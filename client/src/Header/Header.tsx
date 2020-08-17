import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTasks, faComments, faStar } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
// import { Nav } from 'react-bootstrap';

class Header extends Component {

    navTo(uri: string) {
        window.location.href = window.location.origin + uri;
    }

    render() {
        return (
            <nav className="vh-100 col-md-2 purple sidebar">
                <div className="sidebar-sticky container">
                    <h1 className="text-light">Glide.</h1>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="/Board">
                                <FontAwesomeIcon icon={faTasks} fixedWidth={true}/>
                                &nbsp; Board</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Messages">
                                <FontAwesomeIcon icon={faComments} fixedWidth={true} />
                            &nbsp; Messages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Forums">
                            <FontAwesomeIcon icon={faComments} fixedWidth={true} />
                            &nbsp; Forums</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Rewards">
                                <FontAwesomeIcon icon={faStar} fixedWidth={true} />
                                &nbsp; Rewards</a>
                        </li>
                        <li>
                            <div className="accordian" id="#accordionExample">
                            <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Collapsible</a>
                                <div id="collapseOne" className="collapse" data-parent="#accordionExample">
                                    Hi
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;