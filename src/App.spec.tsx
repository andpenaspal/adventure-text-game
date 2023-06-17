import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import App from './App';

describe('asfd', () => {
  test('asfd', () => {
    expect(true).toBeTruthy();
  });

  test('asdffads', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
