import { Theme as MTheme, ThemeOptions as MThemeOptions } from '@mui/material/styles';

export type SpacingOption = number | string | undefined;

type SpacingFnc = (units: SpacingOption[], small: boolean) => string;

interface CustomThemeOptions {
  /**
   * Returns consistent Rem Units DOM space based on a .25rem Base Unit.
   * @param units Units to transform to Rem Units. Do not modifies strings.
   * @returns Rem Units for Numerical values and unmodified strings.
   */
  spacer: (...units: SpacingOption[]) => string;
  /**
   * Returns consistent Rem Units DOM space based on a .125rem Base Unit.
   * @param units Units to transform to Rem Units. Do not modifies strings.
   * @returns Rem Units for Numerical values and unmodified strings.
   */
  tinySpacer: (...units: SpacingOption[]) => string;
}

declare module '@mui/material/styles' {
  // Allow 'theme' usage
  interface Theme extends MTheme, CustomThemeOptions {}
  // Allow configuration using `createTheme`
  interface ThemeOptions extends MThemeOptions, CustomThemeOptions {}
}
