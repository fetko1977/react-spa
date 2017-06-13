import React from "react";

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    const styles = {
        homeContainer: {
            marginTop: '80px',
            color: '#333',
        }
    }

    return (
        <div className="col-xs-12" style={styles.homeContainer}>
            Home Page
        </div>
    );
  }
}
