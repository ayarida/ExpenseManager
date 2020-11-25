import React,{Component} from 'react'; 
import axios from 'axios'; 


export default class EditExpense extends Component{ 
    constructor(props){
        super(props); 
        this.onChangeExpenseName=this.onChangeExpenseName.bind(this); 
        this.onChangeExpensePrice=this.onChangeExpensePrice.bind(this);
        this.onChangeExpenseDescription=this.onChangeExpenseDescription.bind(this);
        this.onChangeExpenseCategory=this.onChangeExpenseCategory.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        //initialize the state
        this.state={
            name: '', 
            price: '', 
            description: '', 
            category: ''
        }
    }

    componentDidMount(){
        axios.defaults.withCredentials=true;
        axios.get('http://localhost:8000/api/expenses/'+this.props.match.params.id)
            .then(response=>{
                console.log(response);
                this.setState({
                    name: response.data.name, 
                    description: response.data.description, 
                    price: response.data.price,
                    category: response.data.category_id

                });
            }).catch((error)=>{
                console.log(error);
            })
    }
    onChangeExpenseName(e){
        this.setState({name:e.target.value}); 
    }

    onChangeExpensePrice(e){
        this.setState({price:e.target.value}); 
    }
    onChangeExpenseDescription(e){
        this.setState({description:e.target.value}); 
    }
    onChangeExpenseCategory(e){
        this.setState({category:e.target.value}); 
    }

    onSubmit(e){
        e.preventDefault(); 

        const expenseObject={
            name: this.state.name, 
            price: this.state.price, 
            description: this.state.description, 
            category: this.state.category

        };
        axios.defaults.withCredentials=true;
        axios.put('http://localhost:8000/api/expenses/'+this.props.match.params.id,expenseObject)
        .then((response)=>{
            console.log(response.data); 
            console.log('Expense Updated Successfully'); 
        }).catch((error)=>{
            console.log(error); 
        }); 
        
        this.props.history.push('/');
        

    }
    render(){
        return (
            <div className="form-wrapper">
                <form onSubmit={this.onSubmit}>
                    
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.onChangeExpenseName}/>
                    <label>Price:</label>
                    <input type="text" value={this.state.price} onChange={this.onChangeExpensePrice}/>

                    <label>Description:</label>
                    <input type="text" value={this.state.description} onChange={this.onChangeExpenseDescription}/>
                    <label>Category:</label>
                    <input type="text" value={this.state.category} onChange={this.onChangeExpenseCategory}/>

                    <button variant="primary" size="lg" block="block" type="submit">
                    Edit Expense
                    </button>
                </form>
            </div>
        )
    }

}
