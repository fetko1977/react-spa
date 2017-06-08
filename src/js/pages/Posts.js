import React from "react";

export default class Posts extends React.Component {
  constructor() {
    super();
    console.log(this);
  }

  render() {
    return (
      <div className="posts-wrapper">
            Posts Goes in here
      </div>
    );
  }
}