import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts, fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        //this.props.fetchPosts();
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        console.log(this.props.posts)
        return this.props.posts.map(post => {
            return (
                <div key={post.id} >
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <UserHeader userId={post.userId}/>
                </div>
            );
        })
    }

     render(){
         return(
             <div>
                {this.renderList()}
             </div>
         )
     }
}

const mapStateToProps = state => {
    return {posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts, fetchPostsAndUsers })(PostList);
