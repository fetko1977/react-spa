import React from "react";
import axios from "axios";

import PostsStore from "../../stores/PostsStore";
import Comment from "./Comment"

export default class SinglePost extends React.Component {
    constructor(props) {
        super();
        this.state = {
            collapsed: true,
            post: {},
            author: '',
            postComments: []
        }
        this.getSinglePost(props.match.params.number)
        this.getPostAuthor(props.match.params.number)
        this.getPostComments(props.match.params.number)
    }

    toggleCollapse(){
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    getSinglePost(postId){
        PostsStore.getSinglePost(postId).then((response) => {
            this.setState({post: response});
        }) 
    }

    getPostAuthor(postId){
        PostsStore.getPostAuthor(postId).then((response) => {
            this.setState({author: response.name});
        })
        
    }

    getPostComments(postId){
        PostsStore.getPostComments(postId).then((response) => {
            this.setState({postComments: response});
        })
    }
  
    render() {
        const Comments = this.state.postComments.map((comment) => {
            return <Comment key={comment.id} {...comment} />
        });
        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : "";
        const currentPost = this.state.post;
        const currentPostAuthorName = this.state.author;
        const styles = {
            postContainer: {
                marginTop: '80px',
                color: '#333',   
            },
            postTitleContainer: {
                
                
            },
            postTitle: {
                background: 'red',
                padding: '5px',
                color: 'white',
                boxShadow: '0px 1px 1px 0px rgba(0,0,0,0.75)'
            },
            postTitleContent: {
                padding: '15px 0'
            },
            postTitleAuthor: {
                textAlign: 'right'
            },
            postCommentsWrapper: {
                listStyle: 'none'
            },
            postCommentsBtn: {
                width: '100%',
                margin: '10px 0',
                boxShadow: '0px 1px 1px 0px rgba(0,0,0,0.75)',
                outline: 'none',
                fontWeight: 'bold'
            }
        };

        return (
        <div className="col-xs-12" style={styles.postContainer}>
            <div style={styles.postTitleContainer}><h3 style={styles.postTitle}>{currentPost.title}</h3></div>
            <div style={styles.postTitleContent}>{currentPost.body}</div>
            <div style={styles.postTitleAuthor}><strong>Author:</strong> {currentPostAuthorName}</div>
            
            <button onClick={this.toggleCollapse.bind(this)} className="btn" style={styles.postCommentsBtn}><i class="fa fa-comments-o" aria-hidden="true"></i> Comments</button>

            <ul class={"col-xs-12 " + navClass} style={styles.postCommentsWrapper}>
               {Comments}
            </ul>
        </div>
        );
    }
}