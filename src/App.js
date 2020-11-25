
import React from 'react';
import axios from 'axios';

export default class TodoList extends React.Component {
  state = {
    todos: [],
    text: '',

  }

  componentDidMount() {
    axios.get(`http://localhost:3000/todos`)
      .then(res => {
        const todos = res.data;
        this.setState({ todos });
      })
  }

  handleChange = event => {
    this.setState({ text: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    
    axios.post('http://localhost:3000/todos', {
      text: this.state.text
    }).then(res => {
        console.log(res);
        console.log(res.data);

    axios.get(`http://localhost:3000/todos`)
            .then(res => {
              const todos = res.data;
              this.setState({ todos });
            })

      })
  }

  handleClick(val) {
    //const data = this.state.todos.map(todo => todo.text)
    axios.delete(`http://localhost:3000/todos/${val}`)
    .then(res => {
      console.log(res);
      console.log(res.data);

    axios.get(`http://localhost:3000/todos`)
          .then(res => {
            const todos = res.data;
            this.setState({ todos });
          })
    })
  }

  render() {
    return (
      <div>
      <ul>
        { this.state.todos.map(todo => <li onClick={() => this.handleClick(todo._id)}>{todo.text}</li>)}
      </ul>
            <form onSubmit={this.handleSubmit}>
              <label>
                Add Todo:
                <input type="text" text="text" onChange={this.handleChange} />
              </label>
              <button type="submit">Add</button>
            </form>
          </div>
    )
  }
}

