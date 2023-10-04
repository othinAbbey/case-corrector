# case-corrector

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install this library using npm or yarn:

```bash
npm install case-corrector
# or
yarn add case-corrector
```

##Usage

```javascript
const caseCorrector = require('case-corrector');

const inputName = "OnYanGo AbBeY";
const correctedCase = caseCorrector(inputName);
console.log(correctedCase); // Output: "Onyango Abbey"

##API Reference
`correctedCase(name: string): string`
This function takes a name string as input and converts it to sentence case. It capitalizes the first letter of each word and makes the rest of the letters lowercase.

`name`(string): The input name to be converted.

Example
const caseCorrector = require('case-corrector');
const inputName = "OnYanGo AbBeY";
const correctedCase = case-corrector.toSentenceCase(inputName);
console.log(correctedCase); // Output: "Onyango Abbey"

Contributing
If you'd like to contribute to this library, please follow these guidelines:

Fork the repository on GitHub.
Make your changes in a feature branch.
Write tests for your changes (if applicable).
Make sure all tests pass.
Submit a pull request with a clear description of your changes.

##License
-------

This project is licensed under the [MIT License](LICENSE.md). You are free to use, modify, and distribute this library as per the terms of the license.

```
