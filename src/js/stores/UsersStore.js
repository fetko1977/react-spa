import { EventEmitter } from "events";
import axios from "axios";
import dispatcher from "../dispatcher";

class UsersStore extends EventEmitter {
    
    constructor(){
        super()
        this.getAllUsers()
    }

    getAllUsers(){
        const url = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url)
        .then((response) => {
            //console.log(response.data);
            this.users = response.data;
        })
        .catch(function (error) {
            //console.log(error);
        });
    }

    getSingleUser(userId){
        const url = 'https://jsonplaceholder.typicode.com/users/' + userId;
        return axios.get(url)
        .then((response) => {
            return response.data;
        })
        .catch(function (error) {
            //console.log(error);
            return error;
        });  
    }

    getUsers(){
        return this.users;
    }

    handleActions(){

    }
}

const usersStore = new UsersStore;
dispatcher.register(usersStore.handleActions.bind(usersStore));

export default usersStore;