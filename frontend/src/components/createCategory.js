import React, { Component } from "react";
import axios from 'axios'
import Swal from 'sweetalert2';


export default class createCategory extends Component {
      constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeCategoryType = this.onChangeCategoryType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
        type: ''
    }
  }

  onChangeCategoryType(e) {
    this.setState({type: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
     const category = {
      type: this.state.type
    };
    axios.post('http://localhost:8000/api/category/create', category)
      .then(res => console.log(res.data));
    Swal.fire(
        'Good job!',
        'Category Added Successfully',
        'success'
    )

    this.setState({type: ''})
  }

  render() {
    return (<div className="form-wrapper">
      <form onSubmit={this.onSubmit}>
     
        <h1>Category:</h1>
        <input type="text" value={this.state.type} onChange={this.onChangeCategoryType}/>
    
        <button variant="primary" size="lg" block="block" type="submit">
          Add Category
        </button>
      </form>
      <br></br>
      <br></br>

      {/* <ExpensesList> </ExpensesList> */}
    </div>);
  }
}

