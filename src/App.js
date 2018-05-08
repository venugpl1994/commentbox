import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

var todos = [
{
  todoTitle: 'My first todo',
  todoResponsible: 'Sebastian',
  todoDescription:'My first todo description',
  todoPriority: 'low'
     },
     {
  todoTitle: 'My second todo',
  todoResponsible: 'Sebastian',
  todoDescription:'My second todo description',
  todoPriority: 'medium'
     },
     {
  todoTitle: 'My third todo',
  todoResponsible: 'Sebastian',
  todoDescription:'My third todo description',
  todoPriority: 'high'
     }  
]

class App extends Component {

constructor(props) {
    super(props );

    this.state = {
      todos   
   };

  this.handleAddTodo = this.handleAddTodo.bind(this);

  }     

  handleRemoveTodo(index){
    this.setState({
      todos:this.state.todos.filter(function(e, i){
        return i !== index;
      })
    })
  }

  handleAddTodo(todo) {
    this.setState({todos: [...this.state.todos, todo]})
  }

render() {
    return (
      <div className="container">
 <TodoInput onAddTodo={this.handleAddTodo}></TodoInput>
      <hr/> 

      <h4>Todo count: <span className="badge">{this.state.todos.length}</span></h4>
     <ul className="list-group">
     {this.state.todos.map((todo, index) =>
      <li className="list-group-item" key={index}> 
      <h4 className="list-group-item-heading">{todo.todoTitle}<small><span className="label label-info">{todo.todopriority}</span></small></h4>
     
     <p><span className="glyphicon glyphicon-user"></span> {todo.todoResponsible} </p>
        
     <p>{todo.todoDescription}</p>  

     <button className="btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon-trash"></span> Delete</button> 
      </li>


      )}  
      </ul>                                     
     </div>

    );
  }
}

 class TodoInput extends Component {
    constructor(props){
      super(props);

      this.state={
        todoTitle:'',
        todoResponsible:'',
        todoDescription:'',
        todopriority:'Lowest'
      }


      this.handleInputChange=this.handleInputChange.bind(this);  
      this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleInputChange(event){
      const target =event.target;
       const value =target.value;
        const name =target.name;

        this.setState({
          [name]:value
      })

    }

    handleSubmit(event){
      event.preventDefault();
      this.props.onAddTodo(this.state); 
      this.setState({
        todoTitle:'',
        todoResponsible:'',
        todoDescription:'',
        todoPriority:'Lowest',

      })
    }

      render(){
        return(
        <div>
        <h4>Add New Todo</h4>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label htmlFor="inputTodoTitle" className="col-sm-2 control-label"></label>
        <div className="col-sm-10">
        <input  name="todoTitle"
           type="text"
           className="form-control"
           id="inputTodoTitle"
           value={this.state.todoTitle}
           onChange={this.handleInputChange}
           placeholder="Title"></input>
  </div>
  </div> 
            <div className="form-group">
        <label htmlFor="inputTodoResponsible" className="col-sm-2 control-label">Responsible</label>
        <div className="col-sm-10">
        <input  name="todoResponsible"
           type="text"
           className="form-control"
           id="inputTodoResponsible"
           value={this.state.todoResponsible}
           onChange={this.handleInputChange}
           placeholder="Responsible"></input>
   </div>
  </div>
      <div className="form-group">
        <label htmlFor="inputTodoDesc" className="col-sm-2 control-label">Description</label>
        <div className="col-sm-10">
        <textarea  name="todoDescription"
           className="form-control"
           rows="3"
           id="inputTodoDesc"
           value={this.state.todoDescription}
           onChange={this.handleInputChange}></textarea>
  </div>
  </div>
        <div className="form-group">
        <label htmlFor="inputTodoPriority" className="col-sm-2 control-label">Priority</label>
        <div className="col-sm-10">
        <select  name="todoPriority"
           className="form-control"
           id="inputTodoPriority"
           value={this.state.todoPriority}
           onChange={this.handleInputChange}>
           <option>Lowest</option>
           <option>Low</option>
           <option>Medium</option>
           <option>High</option>
           <option>Highest</option>
           </select>
     </div>
      </div>
      <div className="form-group">
        <div className="sol-sm-offset-2 col-sm-10">
        <button type="submit" className="btn btn-sucess">Add Todo</button>
        </div>
        </div>
        
        </form>
        </div>
        ); 
    }

  }


export default App;
