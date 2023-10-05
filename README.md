# case-corrector

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

# Description

The case-corrector library is a lightweight and efficient JavaScript utility for transforming names into sentence case. Whether you're dealing with user input, data processing, or any scenario where consistent and readable formatting matters, this library simplifies the task of capitalizing the first letter of each word in a name while converting the rest to lowercase.

### Features

- **Simple Integration**: Easily incorporate the case-corrector library into your JavaScript projects with a straightforward API.

- **Efficient and Lightweight**: Designed to minimize runtime impact, this library efficiently processes names, making it suitable for applications of all sizes.

- **Flexible Usage**: Use it to correct names from various sources, such as user inputs, databases, or API responses.

- **Supports Diverse Input**: Handles names with spaces, ensuring that multiple words are correctly formatted.

- **Improved Readability**: Enhance the readability of your text by standardizing the capitalization of names.

## Installation

You can install this library using npm or yarn:

```bash
npm install case-corrector
# or
yarn add case-corrector
```

## Usage

```javascript
const caseCorrector = require("case-corrector");

const inputName = "OnYanGo AbBeY";
const correctedCase = caseCorrector(inputName);
console.log(correctedCase); // Output: "Onyango Abbey"
```

## API Reference

`correctedCase(name: string): string`

Example

```javascript
const caseCorrector = require('case-corrector');
const inputName = "OnYanGo AbBeY";
const correctedCase = case-corrector.toSentenceCase(inputName);
console.log(correctedCase); // Output: "Onyango Abbey"

```

## Contributing

```javascript
If you'd like to contribute to this library, please follow these guidelines:

Fork the repository on GitHub.
Make your changes in a feature branch.
Write tests for your changes (if applicable).
Make sure all tests pass.
Submit a pull request with a clear description of your changes.
```

## License

---

```javascript
This project is licensed under the [MIT License](LICENSE.md). You are free to use, modify, and distribute this library as per the terms of the license.
```
