import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import { fetchPost } from '../../Actions/Posts/index';
import { deletePost } from '../../Actions/Posts/index';

class PostsShow extends Component {
    state={
        backToPostsList:false
    }
    componentWillMount() {
        this.props.fetchPost(this.props.match.params.id);
    }
    deletePostClick(id){
        this.props.deletePost(id).then(() =>{
            this.setState({backToPostsList:true});
        });
    }
    render() {
        //OR const post = this.props.post;
        const { post } = this.props;
        if(this.state.backToPostsList){
            return (
                <Redirect to='/posts'/>
            );
        }
        if (!post) {
            return <div>Loading ...</div>
        }
        return (
            <div className='text-left'>
            <Link to='/posts'>Back To List</Link>
            <button onClick={() => {this.deletePostClick(post.id)}} className="btn btn-danger float-right">Delete</button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);

