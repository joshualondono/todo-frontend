import React from "react";
import "./App.css";

//Components

function Todo({ todo }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  );
};

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value)return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      className="input"
      value={value}
      onChange={e => setValue(e.target.value)}
      />
    </form>
);
}

function App() { 

  const [todos, setTodos] = React.useState([
    {
      text: "Workout at 1pm",
      isCompleted: false
    },
    {
      text: "Eat dinner early",
      isCompleted: false
    },
    {
      text: "Fast all day",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
          <TodoForm addTodo={addTodo} />

      </div>
    </div>
  );
}

export default App;