import React, { Component } from "react";
import axios from 'axios';
import ExpenseTableRow from './expenseTableRow';


export default class ExpenseList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      expenses: []
    };
  }

  componentDidMount() {
    axios.defaults.withCredentials=true;
    axios.get('http://localhost:8000/api/expenses/')
      .then(res => {
        this.setState({
          expenses: res.data //save in the array the returned associative array from the index method in expense controller 
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.expenses.map((res, i) => {
      return <ExpenseTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Description</th>
            <th>User Id</th>
            <th>Category Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </table>
    </div>);
  }
}