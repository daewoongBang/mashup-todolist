import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodosState } from '../contexts/TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  const todos = useTodosState();
  return (
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem id={todo.id} text={todo.text} done={todo.done} />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
