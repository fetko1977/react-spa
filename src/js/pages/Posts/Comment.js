import React from "react";
import { Link } from "react-router-dom";

export default class Comment extends React.Component {
  constructor(props) {
    super();
    //console.log(props);
  }

  render() {
    const styles = {
        commentItem: {
            margin: '0 0 20px'
        },
        commentBody: {
            padding: '10px 0',
            color: '#333'
        },
        commentName: {
            background: '#333',
            padding: '5px',
            color: 'white',
            fontWeigth: 'bold',
            textAlign: 'right'
        }
    };
    return (
      <li className="col-xs-12" style={styles.commentItem}>
        <div style={styles.commentBody}>{this.props.body}</div>
        <div style={styles.commentName}><i class="fa fa-user-circle-o" aria-hidden="true"></i> {this.props.name}</div>
      </li>
    );
  }
}