// Define a function to convert a name to sentence case
function caseCorrector(name) {
    let sentenceCaseName = '';
    let capitalizeNext = true; // Capitalize the next character
  
    for (const char of name) {
      if (char === ' ') {
        // Space indicates the start of a new word
        sentenceCaseName += ' ';
        capitalizeNext = true;
      } else {
        if (capitalizeNext) {
          sentenceCaseName += char.toUpperCase();
          capitalizeNext = false;
        } else {
          sentenceCaseName += char.toLowerCase();
        }
      }
    }
  
    return sentenceCaseName;
  }
  module.exports = caseCorrector;
  // Example usage:
  const inputName = "OnYanGo AbBeY";
  const correctedCase = caseCorrector(inputName);
  console.log(correctedCase); // Output: "Onyango Abbey"
  