import firstNamesFrequency from './israel-hebrew-first-names.json';
import lastNamesFrequency from './israel-hebrew-last-names.json';

export default function findHebrewFullNames(text: string) {
  const firstNames = firstNamesFrequency.map((name) => name.name);
  const lastNames = lastNamesFrequency.map((name) => name.name);
  const words = text.split(' ');
  const fullNames = [];

  for (let i = 0; i < words.length; i += 1) {
    const potentialFirstNames = [];
    let currentIndex = i;

    let isCurrentWordName = true;

    while (currentIndex < words.length && isCurrentWordName) {
      const currentWord = words[currentIndex].match(/[א-ת "'-]+/)?.[0];
      if (!currentWord) {
        break;
      }

      const formailizedCurrentWord = currentWord.replace(/^ו/g, '');
      const isCurrentWordFormalizedName = currentIndex === i && firstNames.includes(formailizedCurrentWord);

      isCurrentWordName = firstNames.includes(currentWord) || isCurrentWordFormalizedName;

      if (isCurrentWordName) {
        potentialFirstNames.push(isCurrentWordFormalizedName ? formailizedCurrentWord : currentWord);
        currentIndex += 1;
      }
    }
    for (let j = 1; j < potentialFirstNames.length; j += 1) {
      const fullName = potentialFirstNames.slice(0, j + 1).join(' ');
      if (lastNames.includes(potentialFirstNames[j])) {
        fullNames.push(fullName);
      }
    }

    if (potentialFirstNames.length > 0 && currentIndex < words.length) {
      const lastWord = words[currentIndex].match(/[א-ת "'-]+/)?.[0];
      if (lastWord && lastNames.includes(lastWord)) {
        fullNames.push(`${potentialFirstNames.join(' ')} ${lastWord}`);
      }
    }
  }

  return fullNames;
}
