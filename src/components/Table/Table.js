import React, { Component } from 'react'

import "./style.css"

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employers: [
                { id: 'Number', name: 'Name', age: 'Age', email: 'Email' },
                { id: 1, name: 'Annisa', age: 21, email: 'annisa@email.com' },
                { id: 2, name: 'Alvaro', age: 19, email: 'alvaro@email.com' },
                { id: 3, name: 'Sidnei', age: 16, email: 'sidnei@email.com' },
            ]
        }
    }

    renderTableData() {
        return this.state.employers.map((employers, index) => {
            const { id, name, age, email } = employers
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                </tr>
            )
        })
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