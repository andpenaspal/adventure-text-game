import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';

import theme from '~/theme/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <div>Hello</div>
        </EmotionThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
