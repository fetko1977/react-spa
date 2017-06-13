import React from "react";
import UsersStore from "../../stores/UsersStore";
import User from "./User";

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
        users: UsersStore.getUsers()
    }
  }

  render() {
    console.log(this.state.users)
    const styles = {
        list: {
            marginTop: '80px',
            color: '#333',
            listStyle: 'none'
        }
    }

    const UsersItems = this.state.users.map((user) => {
      return <User key={user.id} {...user} />
    });

    return (
      <ul className="col-xs-12" style={styles.list}>
            {UsersItems}
      </ul>
    );
  }
}
