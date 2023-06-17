import { useState } from 'react';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@mui/material';

import reactLogo from '~/assets/react.svg';
import theme from '~/theme/theme';
import { getColor } from '~/theme/themeUtils';

import './App.css';

import viteLogo from '/vite.svg';

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.main};
  :hover {
    border-color: ${({ theme }) => getColor(theme, 'secondary')};
  }
`;

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <div>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </EmotionThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
