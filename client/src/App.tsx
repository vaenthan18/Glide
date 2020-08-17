import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header/Header';
import Board from './Main Board/Board'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <Header />
                        <Router>
                            <Switch>
                                <Route path="/" exact component={Board} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;