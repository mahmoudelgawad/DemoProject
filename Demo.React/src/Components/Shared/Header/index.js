import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Routes from '../../../routes';
import { TOKEN_KEY_NAME } from '../../../Actions/Authentication/index';
import Error from './Error';


class Header extends Component {
    renderError() {
        if (!this.props.error) {
            return;
        }
        debugger
        return (
            <Error error={this.props.error}></Error>
        );
    }
    authButton() {
        if (this.props.isAuth) {
            let token = JSON.parse(localStorage.getItem(TOKEN_KEY_NAME));
            let userName = (token) ? token.username : "";

            return (
                <div>
                    <u><b>Hello,{userName} </b></u>
                    <Link to={Routes.SIGNOUT_URL}>Sign Out</Link>
                </div>

            );
        }
        return [
            <Link to={Routes.DEFAULT_URL} key={1}>Sign In</Link>,
            <Link to={Routes.SIGN_UP_URL} key={2}>Sign Up</Link>
        ]

    }
    renderAdministrationMenu() {
        if (this.props.isAuth) {
            let token = JSON.parse(localStorage.getItem(TOKEN_KEY_NAME));
            let username = (token) ? token.username : "";
            if (username && username === 'admin') {
                return (
                    <li className="nav-item">
                        <NavLink to={Routes.ADMIN_REFRESHTOKENS} className="nav-link">Tokens</NavLink>
                    </li>
                );
            }
        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-light">
                    <a className="navbar-brand" href="#">React App</a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to={Routes.HOME_URL} className="nav-link">Home</NavLink>
                        </li>
                        {this.renderAdministrationMenu()}
                        <li className="nav-item">
                            <NavLink to={Routes.POSTS_URL} className="nav-link">Posts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={Routes.WEATHER_URL} className="nav-link">Weather</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={Routes.USERS_URL} className="nav-link">Users</NavLink>
                        </li>
                    </ul>
                    <div className="auth-nav-link">
                        {this.authButton()}
                    </div>
                </nav>
                {this.renderError()}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        error: state.error
    }
}
export default connect(mapStateToProps, null)(Header);