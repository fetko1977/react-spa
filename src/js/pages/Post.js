import React from "react";
import { Link } from "react-router-dom";

export default class Post extends React.Component {
  constructor(props) {
    super();
    //console.log(props);
  }

  render() {
    const styles = {
      listItem: {
          height: '180px',
          overflow: 'hidden'
      },
      linkItem: {
          textDecoration: 'none',
          color: '#333'
      },
      postTitleContainer: {
        background: 'red',
        boxShadow: '0px 1px 1px 0px rgba(0,0,0,0.75)'
        
      },
      postTitle: {
        color: 'white',
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        margin: '0',
        padding: '10px'
      },
      postTitleContent: {
        padding: '10px 0'
      }
    };
    return (
      <li className="col-xs-12 col-sm-6 col-md-4" style={styles.listItem}>
        <Link to={'/posts/' + this.props.id} style={styles.linkItem}>
            <div style={styles.postTitleContainer}><h3 style={styles.postTitle}>{this.props.title}</h3></div>
            <div style={styles.postTitleContent}>{this.props.body}</div>
        </Link>
      </li>
    );
  }
}