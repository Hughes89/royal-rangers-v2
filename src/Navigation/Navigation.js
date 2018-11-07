import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Navigation.css';

class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            showNavigation: false,
            fullName: 'Mike Hughes'
        }
    }

    toggleMobileMenu() {
        this.setState({
            showNavigation: !this.state.showNavigation
        });
    }

    render() {
        return (
            <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item rr-nav-logo" href="/events">
                        <img src="https://upload.wikimedia.org/wikipedia/de/thumb/5/51/Logo_Royal_Rangers.svg/400px-Logo_Royal_Rangers.svg.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        <span className="rr-navbar-title">Royal Rangers Outpost 5</span>
                    </a>

                    <a role="button" onClick={e => this.toggleMobileMenu()} className={this.state.showNavigation ? 'navbar-burger is-active' : 'navbar-burger'} aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>

                </div>
                    <div className={this.state.showNavigation ? 'navbar-menu is-active' : 'navbar-menu'}>
                        <div className="navbar-end">
                            <a className="navbar-item">
                                <span className="rr-navbar-icon"><FontAwesomeIcon icon="calendar"></FontAwesomeIcon></span>Events
                            </a>
                            <a className="navbar-item">
                            <span className="rr-navbar-icon"><FontAwesomeIcon icon="image"></FontAwesomeIcon></span>Pictures
                            </a>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                    <span className="rr-navbar-icon"><FontAwesomeIcon icon="user"></FontAwesomeIcon></span>{this.state.fullName}
                                </a>

                                <div className="navbar-dropdown">
                                    <a className="navbar-item">
                                        Logout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </nav>
        )
    }
}

export default Navigation;