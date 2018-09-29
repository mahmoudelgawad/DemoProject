import React, { Component } from 'react';
import * as RefreshTokensService from '../../../Services/RefreshTokensService'

class RefreshTokens extends Component {
    constructor(props) {
        super(props);
        this.state = { TokensList:null};
    }
    componentWillMount() {
        RefreshTokensService.getRefreshTokens({}, (data) => {
            this.setState({TokensList:data},() => {
               
            })
        });
    }

    renderRefreshTokens() {
        let list = this.state.TokensList;
        debugger
        if(!list){
            return;
        }
        return list.map((token) => {
            return (
                <div className="row" key={token.id}>
                    <div className="col-sm-3">{token.tokenID}</div>
                    <div className="col-sm-3">{token.subject}</div>
                    <div className="col-sm-3">{token.createdDate}</div>
                    <div className="col-sm-3">{token.expireDate}</div>
                </div>
            );

        });
    }
    render() {
        return (
            <div>
                <h1>Refresh Tokens List</h1>
                <div className="container">
                <div className="row">
                    <div className="col-sm-3">tokenID</div>
                    <div className="col-sm-3">subject</div>
                    <div className="col-sm-3">createdDate</div>
                    <div className="col-sm-3">expireDate</div>
                </div>
                     {this.renderRefreshTokens()}
                </div>
            </div>
        );
    }
}

export default RefreshTokens;