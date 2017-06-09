import React from "react";
import {
  Route,
  Switch
} from 'react-router-dom';

import Posts from "../pages/Posts";

export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <Switch>
            <Route path='/posts' component={Posts}/>
        </Switch>
      </main>
    );
  }
}
