const caseCorrector = require('./lib/index.js'); // Replace with the actual path to your library file

test('Converts input to sentence case', () => {
    const inputName = "OnYanGo AbBeY";
    const correctedCase = caseCorrector(inputName);
    expect(correctedCase).toBe("Onyango Abbey");
  
    const inputName3 = "maRy JaNe sMiTh";
    const correctedCase3 = caseCorrector(inputName3);
    expect(correctedCase3).toBe("Mary Jane Smith");
  
    const inputName4 = "muLlaBi DuNcan aMos";
    const correctedCase4 = caseCorrector(inputName4);
    expect(correctedCase4).toBe("Mullabi Duncan Amos");
  
    const inputName5 = "muLlaBi DuNcan oBuRu";
    const correctedCase5 = caseCorrector(inputName5);
    expect(correctedCase5).not.toBe("Mullabi Duncan oBuRu"); // Use .not.toBe() here
  });
  
