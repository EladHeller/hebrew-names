import { describe, expect, it } from '@jest/globals';
import findHebrewFullNames from '../index';

describe('findHebrewFullNames', () => {
  it('should ignore only first names', () => {
    const text = 'קוראים לו רועי Cohen';
    const result = findHebrewFullNames(text);

    expect(result).toStrictEqual([]);
  });

  it('should find simple full names in text', () => {
    const text = 'אני הלכתי לבית הכנסת עם משה כהן ויהונתן לוי';
    const result = findHebrewFullNames(text);

    expect(result).toStrictEqual(['משה כהן', 'יהונתן לוי']);
  });

  it('should handle names with ו prefix', () => {
    const text = 'פגשתי את יוני ומשה כהן';
    const result = findHebrewFullNames(text);

    expect(result).toStrictEqual(['משה כהן']);
  });

  it('should handle mixed Hebrew and non-Hebrew text', () => {
    const text = 'Hello משה כהן! How are you?';
    const result = findHebrewFullNames(text);

    expect(result).toStrictEqual(['משה כהן']);
  });

  it('should handle middle names', () => {
    const text = 'לחבר שלי קוראים רועי דוד כהן';
    const result = findHebrewFullNames(text);

    expect(result).toStrictEqual(['רועי דוד', 'רועי דוד כהן', 'דוד כהן']);
  });
});
