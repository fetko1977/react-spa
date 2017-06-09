import React from "react";

export default class Post extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <li className="posts-item">
        <span>{this.props.userId}</span>
        <span>{this.props.id}</span>
        <span>{this.props.title}</span>
        <span>{this.props.body}</span>
      </li>
    );
  }
}