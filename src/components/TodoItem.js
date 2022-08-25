import React, { useState } from "react";
import styled from "styled-components";

const TodoItem = ({ todo, todos, setTodos }) => {
  const [editedTodo, setEditedTodo] = useState(todo.title);

  const deleteTask = () => {
    console.log(todo.id, todo.title, "fire");
    const clickedTodoID = todo.id;

    setTodos(todos.filter((todo) => todo.id !== clickedTodoID));

    console.log(todos);
  };

  return (
    <>
      <TodoListItem>
        <Checkbox className="far fa-circle" />
        <input
          style={{ textDecoration: "" }}
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
        />

        <SaveTodo className="fas fa-check" />
        <DeleteTodo className="fas fa-trash-alt" onClick={deleteTask} />
      </TodoListItem>
    </>
  );
};

export default TodoItem;

const TodoListItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  transition: 0.3s;

  input {
    flex: 1;
    font-size: 22px;
    outline: none;
    background: none;
    border: none;
    color: white;
  }
`;

const Checkbox = styled.i`
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const DeleteTodo = styled.i`
  color: #ff4605;
  padding: 10px 16px;
  margin-left: 14px;
  border-radius: 4px;
  margin-right: -12px;

  &:hover {
    background-color: #7e2601;
    transition: 0.3s;
    cursor: pointer;
  }
`;

const SaveTodo = styled.i`
  padding: 10px 16px;
  border-radius: 4px;
  margin-right: -12px;
  color: #42c732;

  &:hover {
    background-color: #2b6127;
    transition: 0.3s;
    cursor: pointer;
  }
`;
