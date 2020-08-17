import React, { Fragment, Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './Sidebar/Sidebar';
import Board from './Main Board/Board'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <Sidebar />
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