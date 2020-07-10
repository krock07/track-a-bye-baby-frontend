import React, { Component } from 'react';



class Users extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () =>{
        fetch('http://localhost:3000/users')
            .then(data => data.json())
            .then(json => this.setState({users:json}))
        .catch(error => console.error(error))
    }
    
    render() {
        return (
            <div>
                {this.state.users.map((user, index)=>{
        return (
            <div>
            <h1>name: {user.name}</h1>
            </div>
        )
    })}
            </div>
        );
    }
}

export default Users;