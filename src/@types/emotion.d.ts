import { Theme as MuyTheme } from '@mui/material/styles';

import '@emotion/react';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MuyTheme {}
}
