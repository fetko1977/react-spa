import React from "react";
import { Link } from "react-router-dom";

import Image from "../../components/Image"

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    const styles = {
        homeContainer: {
            marginTop: '80px',
            color: '#333',
        },
        homeLinkWrapper: {
            textAlign: 'center',
            textDecoration: 'none',
            margin: '0 0 20px'
        },
        homeLinkInnerWrapper: {
            width: '320px',
            maxWidth: '100%',
            background: '#ccc',
            margin: 'auto',
            padding: '10px 0',
            boxShadow: '0px 0px 3px 1px rgba(0,0,0,0.75)'
        },
        homeLinkIcon: {
            fontSize: '80px',
            color: 'white',
            textShadow: '1px 1px 3px rgba(0,0,0,0.75)'

        },
        homeLinkTitle: {
            fontSize: '30px',
            color: 'white',
            textShadow: '1px 1px 3px rgba(0,0,0,0.75)'
        },
        copy: {
            mainWrapper: {
                padding: '0 30px'
            },
            title : {
                fontSize: '30px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                background: 'orange',
                color: 'white',
                textShadow: '1px 1px 3px rgba(0,0,0,0.75)'
            },
            wrapper: {
                padding: '20px 0 0'
            },
            image: {
                
            },
            body: {

            }
        }
    }

    return (
        <div className="col-xs-12" style={styles.homeContainer}>
            <Link to={"/users"} className="col-xs-12 col-sm-6 col-md-4" style={styles.homeLinkWrapper}>
                <div style={styles.homeLinkInnerWrapper}>
                    <div style={styles.homeLinkIcon}><i class="fa fa-users" aria-hidden="true"></i></div>
                    <div style={styles.homeLinkTitle}>Users</div>
                </div>
            </Link>
            <Link to={"/posts"} className="col-xs-12 col-sm-6 col-md-4" style={styles.homeLinkWrapper}>
                <div style={styles.homeLinkInnerWrapper}>
                    <div style={styles.homeLinkIcon}><i class="fa fa-clipboard" aria-hidden="true"></i></div>
                    <div style={styles.homeLinkTitle}>Posts</div>
                </div>
            </Link>
            <Link to={"/albums"} className="col-xs-12 col-sm-6 col-md-4" style={styles.homeLinkWrapper}>
                <div style={styles.homeLinkInnerWrapper}>
                    <div style={styles.homeLinkIcon}><i class="fa fa-address-book-o" aria-hidden="true"></i></div>
                    <div style={styles.homeLinkTitle}>Albums</div>
                </div>
            </Link>
            <div className="col-xs-12" style={styles.copy.mainWrapper} >
                <div className="col-xs-12" style={styles.copy.title}>About Our System</div>
                <div className="col-xs-12" style={styles.copy.wrapper}>
                    <div className="col-xs-12 col-sm-6" style={styles.copy.image}>
                        <Image imageSrc="http://www.publicdomainpictures.net/pictures/220000/velka/office-computer-1493393794RBm.jpg" imageAlt="Office Mac" />
                    </div>
                    <div className="col-xs-12 col-sm-6" style={styles.copy.body}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ornare est. Aenean massa purus, aliquam finibus facilisis non, iaculis non ligula. Nam lorem dui, euismod vel mattis id, ullamcorper vel lacus. Nunc ornare mi quis est ultricies viverra. Quisque porta diam id dui scelerisque efficitur. Quisque facilisis placerat erat ut venenatis. Ut euismod consectetur mi ut tempor. Cras varius neque eget felis tincidunt, non elementum nisl dictum. Quisque dictum, lorem a scelerisque cursus, tellus ipsum maximus sapien, id vestibulum urna erat placerat augue. Suspendisse condimentum lorem ex, vel pulvinar eros fringilla eu. Quisque eget orci ex. Mauris mollis facilisis elit.</p>
                        <p>Suspendisse feugiat sed urna at egestas. Phasellus blandit ipsum neque, et faucibus tellus pretium sed. Quisque non pharetra neque. Ut quis mauris sed sem lacinia rutrum sit amet nec leo. Phasellus elementum tempor neque et lobortis. Fusce tincidunt erat sed massa hendrerit, ultricies semper est blandit. Donec non augue dui. Nunc accumsan facilisis metus vitae convallis. Aliquam pharetra eros non scelerisque aliquet. Proin bibendum mauris quis erat pretium, a tempor diam iaculis. Curabitur non egestas neque. Duis dapibus, nisi vitae pellentesque fermentum, magna nisi semper lorem, quis viverra lacus nulla consequat metus.</p>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
  }
}
