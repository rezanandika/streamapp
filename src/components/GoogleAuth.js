import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "166488307936-v11dp01mtorh7im09t9t564i7h2vm2jb.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };


  renderAuthButton() {
    if (this.state.isSignedIn == null) {
      return <div>I dont know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return  (
        <button className="ui red google button">               
            <i className="google icon" />              
            Sign Out           
        </button> 
        )
    } else {
      return (
        <button className="ui red google button">             
        <i className="google icon" />             
        Sign In with Google         
        </button>   
      )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;