import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import { Link } from "react-router-dom";

import { fetchPosts } from '../../Actions/Posts/index';

class PostIndex extends Component {
    //life cycle react component fun act as Init
    //run first time when component init , overwrite i think
    componentWillMount() {
        //to fill the global state {posts}
        console.log("call fetchPosts");
        this.props.fetchPosts();
    }
    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"/posts/" + post.id}>
                        <span className='float-right'>{post.categories} </span>
                        <strong className="float-left">{post.title}</strong>
                    </Link>

                </li>
            );
        });
    }
    render() {
        return (
            <div>
                <div>
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h1>Posts</h1>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }

}

function mapDispatchToPros(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch);
}

function mapStateToProps(state) {
    return { posts: state.posts.all };
}

export default connect(mapStateToProps, mapDispatchToPros)(PostIndex);

//instead using bindActionCreators ,even can use {fetchPosts} only
//export default connect(null,{fetchPosts: fetchPosts})(PostIndex);