import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const PageOne =()=>{
    return(
        <div>
            Page One
            <Link to="/pageTwo"> Navigate</Link>
        </div>
    )
}

const PageTwo =()=>{
    return(
        <div>
            Page Two
            <button>Click!</button><br/>
            <Link to="/"> Navigate</Link>
        </div>
    )
}
class App extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <div>
                    <Route path="/" exact component
={PageOne}/>
                    <Route path="/pagetwo" component
={PageTwo}/>
                </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;