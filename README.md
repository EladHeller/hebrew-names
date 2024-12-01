# hebrew-names

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/find-hebrew-names.svg)](https://www.npmjs.com/package/find-hebrew-names)

Extract Hebrew full names from text based on Israel Central Bureau of Statistics (CBS) name data.

## Features
- Detects full names in Hebrew text
- Supports multiple first names (e.g., "משה יהושע כהן")
- Based on official Israeli names database
- Handles names with vav (ו) prefix
- TypeScript support
- Zero dependencies - lightweight and self-contained

## Installation
```bash
npm install hebrew-names
```
## Usage
```ts
import findHebrewFullNames from 'hebrew-names';

const text = 'אני הלכתי לבית הכנסת עם משה כהן ויהונתן לוי';
const names = findHebrewFullNames(text);
console.log(names); // ['משה כהן', 'יהונתן לוי']
```
## Data source
All name data is sourced from the Israel Central Bureau of Statistics (CBS) database. The frequency and distribution of names reflect official Israeli population records.

## Licensing
### Code License
The code in this repository is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

### Data License
The names data is sourced from the Israel Central Bureau of Statistics (CBS) and is subject to CBS end user license. see the [LICENSE](./LICENSE) file for details.
