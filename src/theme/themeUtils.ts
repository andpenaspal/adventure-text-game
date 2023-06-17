import { Theme } from '@mui/material';

type PaletteColorOptions = 'primary' | 'secondary' | 'info' | 'warning' | 'error' | 'success';

type Option = 'light' | 'main' | 'dark' | 'contrastText';

/**
 * Theme Utility Shorthand to not get nested Colors from the Palette.
 * @param theme Theme to use.
 * @param color Desired color. From PaletteColor options.
 * @param option Desired options for the color. Defaults to 'main'.
 * @returns Color specified.
 */
export const getColor = (theme: Theme, color: PaletteColorOptions, option: Option = 'main') =>
  theme.palette[color][option];
