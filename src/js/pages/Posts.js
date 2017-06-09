import React from "react";

import Post from "./Post"

export default class Posts extends React.Component {
  constructor() {
    super();
    this.posts = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      }
    ]
  }

  render() {
    const postStyles = {
        marginTop: '80px',
        color: '#333'
    }

    const PostsItems = this.posts.map((post) => {
      return <Post key={post.id} {...post} />
    });

    return (
      <ul className="posts-wrapper" style={postStyles}>
            {PostsItems}
      </ul>
    );
  }
}