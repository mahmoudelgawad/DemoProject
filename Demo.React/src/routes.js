import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import requireAuth from './Components/Shared/Authentication/index';

import Posts from './Components/Posts/index';
import PostsNew from './Components/Posts/posts_new';
import PostsShow from './Components/Posts/posts_show';

import WeatherList from './Containers/Weather/index';
import SignIn from './Components/Auth/sign_in';
import ExternalSigninCallBack from './Components/Auth/ExternalSigninCallBack';
import SignOut from './Components/Auth/sign_out';
import SignUp from './Components/Auth/sign_up';
import HomePage from './Components/HomePage/index';
import Users from './Components/Users/index';
import RefreshTokens from './Components/Administration/RefreshTokens/index'


export const DEFAULT_URL = "/";
export const SIGNOUT_URL = "/signout";
export const SIGN_UP_URL = "/signup";
export const EXTERNAL_SIGNIN_CALLBACK = "/signin/external/callback";
export const HOME_URL = "/home";
export const GREET_URL = "/greet";
export const GREET_AGAIN_URL = "/greet/again";
export const POSTS_URL = "/posts";
export const NEW_POST_URL = "/posts/new";
export const SHOW_POST_URL = "/posts/:id";
export const WEATHER_URL = "/weather";
export const USERS_URL = "/users";
export const ADMIN_REFRESHTOKENS = "/admin/refreshtokens";

class Routes extends Component {
    componentDidUpdate() {
        console.log("I am routes", this.props);
    }
    greeting() {
        return (
            <h1>Hi every one !!</h1>
        );
    }

    render() {
        return (
            <div>
                <Route path={GREET_URL} component={this.greeting} />
                <Route path={GREET_AGAIN_URL} component={this.greeting} />
                <Switch>
                    <Route exact path={DEFAULT_URL} component={SignIn}></Route>
                    <Route path={SIGNOUT_URL} component={SignOut} />
                    <Route path={SIGN_UP_URL} component={SignUp} />
                    <Route path={EXTERNAL_SIGNIN_CALLBACK} component={ExternalSigninCallBack} />
                    <Route path={HOME_URL} component={HomePage} />
                    <Route exact path={POSTS_URL} component={requireAuth(Posts)} />
                    <Route path={NEW_POST_URL} component={requireAuth(PostsNew)} />
                    <Route path={SHOW_POST_URL} component={requireAuth(PostsShow)} />
                    <Route path={WEATHER_URL} component={requireAuth(WeatherList)}></Route>
                    <Route path={USERS_URL} component={Users}/>
                    <Route path={ADMIN_REFRESHTOKENS} component={requireAuth(RefreshTokens)}></Route>
                    <Route component={HomePage} />
                </Switch>
            </div>

        );
    }
}
export default Routes