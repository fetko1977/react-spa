import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Layout from "./components/Layout";
import Posts from "./pages/Posts";

const app = document.getElementById('app');
ReactDOM.render(
    <BrowserRouter basename="/">
        <Switch>
            <Route path='/' component={Layout}/>
            <Route path='/posts' component={Posts}/>
        </Switch>
    </BrowserRouter>, 
app);
