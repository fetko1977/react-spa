import { EventEmitter } from "events";
import axios from "axios";
import dispatcher from "../dispatcher";

class PostsStore extends EventEmitter {
    
    constructor(){
        super()
        this.getAllPosts()
    }

    getAllPosts(){
        const url = 'https://jsonplaceholder.typicode.com/posts';
        axios.get(url)
        .then((response) => {
            //console.log(response.data);
            this.posts = response.data;
        })
        .catch(function (error) {
            //console.log(error);
        });
    }

    getSinglePost(postId){
        const url = 'https://jsonplaceholder.typicode.com/posts/' + postId;
        return axios.get(url)
        .then((response) => {
            return response.data;
        })
        .catch(function (error) {
            //console.log(error);
            return error;
        });  
    }
    
    getPostAuthor(postId){
        const url = 'https://jsonplaceholder.typicode.com/users/' + postId;
        return axios.get(url)
        .then((response) => {
            return response.data
        })
        .catch(function (error) {
            //console.log(error);
            return error
        });
    }

    getPostComments(postId){
        const url = 'https://jsonplaceholder.typicode.com/posts/' + postId + '/comments';
        return axios.get(url)
        .then((response) => {
            return response.data;
        })
        .catch(function (error) {
            //console.log(error);
            return error;
        });
    }

    getPosts(){
        return this.posts;
    }

    handleActions(){

    }
}

const postsStore = new PostsStore;
dispatcher.register(postsStore.handleActions.bind(postsStore));

export default postsStore;