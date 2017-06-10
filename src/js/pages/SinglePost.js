import React from "react";
import axios from "axios";

import PostsStore from "../stores/PostsStore";

export default class SinglePost extends React.Component {
    constructor(props) {
        super();
        this.state = {
            post: {},
            postInfo: {
                author: '',
                postComments: []
            }
        }
        this.getSinglePost(props.match.params.number)
        this.getPostAuthor(this.state.post.postId)
    }

    getSinglePost(id){
        const url = 'https://jsonplaceholder.typicode.com/posts/' + id;
        axios.get(url)
        .then((response) => {
            this.setState({post: response.data});
        })
        .catch(function (error) {
            //console.log(error);
        });  
    }

    getPostAuthor(id){
        const url = 'https://jsonplaceholder.typicode.com/users/' + id;
        axios.get(url)
        .then((response) => {
            this.setState({
                postInfo: {
                    author: response.data
                }
            });
        })
        .catch(function (error) {
            //console.log(error);
        });
    }
  
  render() {
    const currentPost = this.state.post;
    const currentPostAuthor = this.state.postInfo.author;
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
        
      }
    };
    return (
      <div className="col-xs-12" style={styles.postContainer}>
        <div style={styles.postTitleContainer}><h3 style={styles.postTitle}>{currentPost.title}</h3></div>
        <div style={styles.postTitleContent}>{currentPost.body}</div>
      </div>
    );
  }
}