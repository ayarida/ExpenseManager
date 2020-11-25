import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExpenseTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteExpense = this.deleteExpense.bind(this);
    }

    deleteExpense() {
        axios.delete('http://localhost:8000/api/expenses/' + this.props.obj.id)
            .then((res) => {
                console.log('Expense removed deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.description}</td>
                <td>{this.props.obj.user_id}</td>
                <td>{this.props.obj.category_id}</td>

                <td>
                    <Link className="edit-link" to={"/edit-expense/" + this.props.obj.id}>
                       <button size="sm" variant="info">Edit</button>
                    </Link>
                    <button onClick={this.deleteExpense} size="sm" variant="danger">Delete</button>
                </td>
            </tr>
        );
    }
}