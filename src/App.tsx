import * as React from "react";
import { useState } from "react";
import TodoList from "./TodoList";
import { todoItemInterface } from "./types";

function App() {
  const [todos, setTodos] = useState<todoItemInterface[]>([
    { id: 0, text: "clean house", completed: false },
    { id: 1, text: "cook dinner", completed: false },
  ]);

  let toggleTodo = (id: number): void => {
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = todos.map((todo, currentIndex) => {
      if (currentIndex === index) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    setTodos(newTodos);
  };

  return (
    <div>
      <h6>React hooks example</h6>
      <TodoList todoList={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
