import React, { Component } from 'react';

import LoginPhoto from '../assets/400px-Logo_Royal_Rangers.svg.png';

import './Login.css';

// TODO - ADD AUTH0 AUTHENTICATION TO HANDLE USERS

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            loading: false
        }
    }

    toggleLoading() {
        this.setState({
            loading: !this.state.loading
        })
    }

    loginToApplication = e => {
        // TODO - Link to actual api end point (Mimic Loading with set timeout for now)
        this.toggleLoading();
        const setUser = this.props.setUser;
        setTimeout(() => {
            setUser({});
            // this.toggleLoading();
        }, 2000)
    }


    render() {
        return (
            <div className="rr-login-wrapper">
                <div className="rr-login-form">
                    <div className="rr-login-title">
                        <img src={LoginPhoto} />
                        <h3>Royal Rangers Outpost 5</h3>
                    </div>
                    <div className="rr-login-group">
                        <div className="field">
                            <label htmlFor="email" className="label">Email</label>
                            <div className="control">
                                <input  
                                    className="input"
                                    id="email"
                                    type="text"
                                    placeholder="email@email.com"
                                    value={this.state.username}
                                    name="email"
                                />
                            </div>
                        </div>                        
                        <div className="field">
                            <label htmlFor="password" className="label">Password</label>
                            <div className="control">
                                <input  
                                    className="input"
                                    id="password"
                                    type="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    name="password"
                                />
                            </div>
                        </div>                          
                        <div>
                            <button 
                                className={this.state.loading ? 'button is-primary is-loading' : 'button is-primary'} 
                                onClick={this.loginToApplication}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
}

export default Login;