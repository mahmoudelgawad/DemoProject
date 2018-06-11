import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import {Link} from "react-router-dom";

import {fetchPosts} from '../../Actions/Posts/index';

 class PostIndex extends Component {
    componentWillMount() {
        // console.log("this time is good for load get posts action here");
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                <div className="text-right">
<Link to="/posts/new" className="btn btn-primary"> 
Add a Post
</Link>
                </div>
                posts list here !!
            </div>
        );
    }

}

function mapDispatchToPros(dispatch){
    return bindActionCreators({fetchPosts},dispatch);
}

export default connect(null,mapDispatchToPros)(PostIndex);

//instead using bindActionCreators ,even can use {fetchPosts} only
//export default connect(null,{fetchPosts: fetchPosts})(PostIndex);