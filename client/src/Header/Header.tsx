import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faComments, faStar } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
// import { Nav } from 'react-bootstrap';

class Header extends Component {

    navTo(uri: string) {
        window.location.href = window.location.origin + uri;
    }

    render() {
        return (
            <div className="vh-100 container-fluid col-md-2 sidebar-sticky bg-light">
                <nav className="purple sidebar">
                    <div className="sidebar container">
                        <h1 className="text-light">Glide.</h1>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="/Board">
                                    <FontAwesomeIcon icon={faTasks} fixedWidth={true} />
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
                                <div className="menu-text">
                                    My Classes
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <h5>Classes</h5>
                <ul>

                </ul>
            </div>

        );
    }
}

export default Header;