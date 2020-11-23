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
  
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const [todos, setTodos] = React.useState([
    { text: "Need to workout at 1pm" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);

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