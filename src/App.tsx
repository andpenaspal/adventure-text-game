import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Button, ThemeProvider } from '@mui/material';

import Card from '~/components/Card/Card';

import theme from '~/theme/theme';

/* eslint-disable no-console */
const options = [
  { body: 'Test Option 1', onClick: () => console.log('1') },
  { body: 'Test Option 2', onClick: () => console.log('2') },
];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <Card body="This is a Test Body" options={options} />
        <Button>Test</Button>
      </EmotionThemeProvider>
    </ThemeProvider>
  );
};

export default App;
