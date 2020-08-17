import React, { Component } from 'react';

class Header extends Component {

    navTo(uri: string) {
        window.location.href = window.location.origin + uri;
    }

    render() {
        return (
            <div className="App-header">
                {/* <ul className="nav flex-column">
                    <li className="nav-item">
                        <h1 className="nav-link" onClick={() => { this.navTo('/Board') }}>Board</h1>
                    </li>
                    <li className="nav-item">
                        <h2 className="nav-link" onClick={() => { this.navTo('/Messages') }}>Messages</h2>
                    </li>
                    <li className="nav-item">
                        <h2 className="nav-link" onClick={() => { this.navTo('/Forums') }}>Forums</h2>
                    </li>
                    <li className="nav-item">
                        <h2 className="nav-link" onClick={() => { this.navTo('/Rewards') }}>Rewards</h2>
                    </li>
                </ul> */}
            </div>
        );
    }
}

export default Header;
