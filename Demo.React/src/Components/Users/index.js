import React, { Component } from "react";
import * as UserService from '../../Services/UserService';

class Users extends Component {

    getUsers() {
        UserService.getUsers({}, (data) => {
            return data;
        });
    }
    renderUsersList() {
        let userList = this.getUsers();
        if(!userList){
            return;
        }
        userList.map(user => {
            return (
                <li>
                    <b>{user.Name}</b>
                </li>
            );
        });
    }
    render() {
        return (
            <div>
                <ul>
                    {this.renderUsersList()}
                </ul>

            </div>
        );
    }
}

export default Users;