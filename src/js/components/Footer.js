import React from "react";


export default class Footer extends React.Component {
  render() {
    const styles = {
        footer: {
           color: 'white',
           padding: '20px 0'
        },
        footerContent: {
            textAlign: 'center'
        }
    }
    return (
      <footer className="footer navbar-inverse" style={styles.footer}>
          <div className="container">
              <div className="row">
                  <div className="col-xs-12" style={styles.footerContent}><i class="fa fa-copyright" aria-hidden="true"></i> All Rights Reserved</div>
              </div>
          </div>
      </footer>
    );
  }
}
