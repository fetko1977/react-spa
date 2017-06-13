import React from "react";
import PostsStore from "../../stores/PostsStore";
import Post from "./Post";

export default class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
        posts: PostsStore.getPosts()
    }
  }

  render() {
    const styles = {
        list: {
            marginTop: '80px',
            color: '#333',
            listStyle: 'none'
        }
    }

    const PostsItems = this.state.posts.map((post) => {
      return <Post key={post.id} {...post} />
    });

    return (
      <ul className="col-xs-12" style={styles.list}>
            {PostsItems}
      </ul>
    );
  }
}
