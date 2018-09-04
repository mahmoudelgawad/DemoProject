import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Routes from '../../../routes';
import {TOKEN_KEY_NAME} from '../../../Actions/Authentication/index';


class Header extends Component {
    authButton() {
        if (this.props.isAuth) {
            let token = JSON.parse(localStorage.getItem(TOKEN_KEY_NAME));
            let userName = (token)? token.userName : "";

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
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light">
                <a className="navbar-brand" href="#">React App</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to={Routes.HOME_URL} className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={Routes.POSTS_URL} className="nav-link">Posts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={Routes.WEATHER_URL} className="nav-link">Weather</NavLink>
                    </li>
                </ul>
                <div className="auth-nav-link">
                    {this.authButton()}
                </div>
            </nav>
        );
    }
}
function mapStateToProps(state) {
    return { isAuth: state.auth.isAuth }
}
export default connect(mapStateToProps,null)(Header);