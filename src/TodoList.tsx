import * as React from "react";
import { todoListInterface } from "./types";
import { TodoItem } from "./TodoItem";

const TodoList: React.FC<todoListInterface> = ({ todoList, toggleTodo }) => (
  <ul>
    {todoList.map((todoItem) => {
      return (
        <li
          key={todoItem.id}
          onClick={() => {
            toggleTodo(todoItem.id);
          }}
        >
          <TodoItem
            id={todoItem.id}
            text={todoItem.text}
            completed={todoItem.completed}
          ></TodoItem>
        </li>
      );
    })}
  </ul>
);

export default TodoList;
