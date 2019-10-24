import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StreamCreate from './StreamCreate';
import StreamDelete from './StreamDelete';
import StreamEdit from './StreamEdit';
import StreamList from './StreamList';
import StreamShow from './StreamShow';
import Header from './Header';

class App extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/new" component={StreamCreate}/>   
                    <Route path="/edit" exact component={StreamEdit}/>
                    <Route path="/delete" exact component={StreamDelete}/>
                    <Route path="/show" exact component={StreamShow}/>
                </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;