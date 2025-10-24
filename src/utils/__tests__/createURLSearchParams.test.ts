import { describe, expect, it } from 'vitest';
import { createURLSearchParams } from '../createURLSearchParams';

describe('createURLSearchParams', () => {
  it('should create URLSearchParams from an object', () => {
    const input = {
      q: 'fruits',
      fields: [1, 2, 'apple', 'banana'],
    };

    const expected = 'q=fruits&fields=1%2C2%2Capple%2Cbanana';
    const actual = createURLSearchParams(input).toString();

    expect(actual).toEqual(expected);
  });
});
