import React from "react";
import { Link } from "react-router-dom";

export default class User extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const styles = {
      listItem: {
          height: '230px',
          overflow: 'hidden'
      },
      linkItem: {
          textDecoration: 'none',
          color: 'white'
      },
      userNameContainer: {
        background: '#333',
        boxShadow: '0px 1px 1px 0px rgba(0,0,0,0.75)'
        
      },
      userName: {
        color: 'white',
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        margin: '0',
        padding: '10px'
      },
      userContent: {
        padding: '10px 0',
        color: '#333'
      }
    };
    return (
      <li className="col-xs-12 col-sm-6 col-md-4" style={styles.listItem}>
        
        <div style={styles.userNameContainer}>
            <Link to={'/users/' + this.props.id} style={styles.linkItem}>
              <h3 style={styles.userName}>{this.props.name}</h3>
            </Link>
        </div>
           
        <div style={styles.userContent}>
            <p><strong>Company:</strong> {this.props.company.name}</p>
            <p><strong>Email:</strong> {this.props.email}</p>
            <p><strong>Phone:</strong> {this.props.phone}</p>
            <p><strong>Website:</strong><a href={this.props.website} target="_blank"> {this.props.website}</a></p>
        </div>
        
        <button className="btn btn-success pull-right"><Link to={'/users/' + this.props.id} style={styles.linkItem}>View User Details</Link></button>
      </li>
    );
  }
}