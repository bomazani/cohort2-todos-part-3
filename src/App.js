import React, { Component } from 'react';
import todosList from './todos.json';
import TodoLists from './todoLists/TodoLists';
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todosList,
      input: "",
    }
  }


  todoToggleClick = (id) => (event) => {
    this.setState({
      todos: this.state.todos.map(
        todo => todo.id === id ? {
          ...todo, 
          completed: !todo.completed 
        } : { 
          ...todo
        }
      )
    })
  }


  todoDestroy = (id) => (event) => {
    this.setState({
      todos: this.state.todos.filter(
        todo => todo.id !== id 
      )
    })
    console.log("todoDestroy button was clicked")
    console.log(this.state.todos)
  }
  
  
  clearCompleted = (onClick) => {
    this.setState({
      todos: this.state.todos.filter(
        todo => todo.completed !== true 
      )
    })
    console.log("clearCompleted button was clicked")
    console.log(this.state.todos)
  }


  handleChange = (event) => {
    this.setState({ input: event.target.value });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, 
        {
        title: this.state.input,
        id: this.state.todos[this.state.todos.length-1].id+1,
        completed: false
        },
      ],
      input: ""
    });
    console.log(this.state.todos);
  }


  render() {
    return (

      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={this.handleSubmit}>
            <input 
              value={this.state.input} 
              onChange={this.handleChange} 
              className="new-todo" 
              placeholder="What needs to be done?" 
              autoFocus 
            />
          </form>
        </header>

        <section className="main">
          <TodoLists 
            todoDestroy={this.todoDestroy} 
            todoToggleClick={this.todoToggleClick} 
            todos={this.state.todos} 
          />
        </section>

        <footer className="footer">

          <span className="todo-count"><strong>{this.state.todos.length}</strong> item(s) total</span>
          <span className="space"><strong> </strong></span>
          <span className="total-count"><strong>{this.state.todos.length}</strong> item(s) left</span>


          <button className="clear-completed" onClick={this.clearCompleted} >
            Clear completed
          </button>
        </footer>
      </section>

    );
  }
}

export default App;
