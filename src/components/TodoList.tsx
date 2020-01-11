import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem id={1} text="프로젝트 생성하기" done={true} />
      <TodoItem id={2} text="Component 추가" done={false} />
    </TodoListBlock>
  );
};

export default TodoList;
