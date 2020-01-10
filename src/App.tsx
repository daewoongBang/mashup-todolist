import React from 'react';
import { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const App: React.FC = () => {
  return <div>Hello World!</div>;
};

export default App;
