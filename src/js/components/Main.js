import React from "react";
import {
  Route,
  Switch
} from 'react-router-dom';

import Posts from "../pages/Posts";
import SinglePost from "../pages/SinglePost";

export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    const styles = {
        main: {
            minHeight: '100vh'
        }
    }
    return (
      <main style={styles.main} className="clearfix">
          <div className="container">
              <div className="row">
                  <Switch>
                      <Route exact path='/posts' component={Posts}/>
                      <Route path='/posts/:number' component={SinglePost}/>
                  </Switch>
              </div>
          </div>
      </main>
    );
  }
}
