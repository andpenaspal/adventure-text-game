import { check } from '~/Test';

describe('asdfasdf', () => {
  test('asdf', () => {
    expect(true).toBeTruthy();
  });

  test('a', () => {
    const a = check(true);
    expect(a).toBe('asfd');
  });
});
