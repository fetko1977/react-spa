import React from "react";

export default class Image extends React.Component {
  constructor() {
    super();
  }

  render() {
    const styles = {
        homeImage: {
            width: '100%',
            margin: '0 0 20px'
        }
    }

    return (
        <img src={this.props.imageSrc} alt={this.props.imageAlt} style={styles.homeImage}/>
    );
  }
}
