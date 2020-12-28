import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import React from 'react';

class App extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' render={() => (<Home/>)}/>
                        <Route exact path='/About' render={() => (<About/>)}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
