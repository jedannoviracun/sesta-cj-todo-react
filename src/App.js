import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello Todo app!',
      newTodo: '',
      todos: []
    }

    this.formSubmitted = this.formSubmitted.bind(this)

  }

    newTodoChanged(event){
      this.setState({
        newTodo: event.target.value
      })
    }

    formSubmitted(event){
      event.preventDefault();
      const todos = this.state.todos.slice()
      todos.push({
        title: this.state.newTodo,
        done: false
      })
      this.setState({
        newTodo:'',
        todos
      })
    }

    toggleTodoDone(event, index) {
      console.log(event.target.checked)
      const todos = [...this.state.todos]
      todos[index] = {...todos[index]}
      todos[index].done = event.target.checked
      this.setState({
        todos
      })
    }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo" value={this.state.newTodo}/>
          <button type="submit">Add todo</button>
        </form>
        <ul>
          {this.state.todos.map((todo, index) => {
            return <li key={todo.title}>
              <input onChange={(event) => this.toggleTodoDone(event)}type="checkbox" />
            {todo.title}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
