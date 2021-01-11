import React, { Component } from 'react'

import "./style.css"

import axios from "axios";


class Table extends Component {
    state = {
        users: [],
        isLoading: true,
        errors: null
    };

    getEmployees() {
        axios
            .get("https://randomuser.me/api/?results=20")
            .then(response =>
                response.data.results.map(user => ({
                    name: `${user.name.first} ${user.name.last}`,
                    username: `${user.login.username}`,
                    phone: `${user.phone}`,
                    dob: `${user.dob.date}`,
                    email: `${user.email}`,
                    image: `${user.picture.large}`
                }))
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.getEmployees();
    }

    renderTableData() {
        const { isLoading, users } = this.state;
        return (
            <React.Fragment>
                {!isLoading ? (
                    users.map(user => {
                        const { username, name, phone, email, dob, image } = user;
                        return (
                            <tr key={username}>
                                <td><img src={image} alt={name} /></td>
                                <td>{name}</td>
                                <td>{phone}</td>
                                <td>{email}</td>
                                <td>{dob}</td>
                            </tr>

                        );
                    })
                ) : (
                        <p>Loading...</p>
                    )}
            </React.Fragment>
        );
    }

    render() {
        return (
            <div>
                <h1 id='title'>Employee Directory</h1>
                <table id='employers'>
                    <tbody>

                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}



export default Table 