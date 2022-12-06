// add export to run tests!
export const drawLetters = () => {
  // const drawLetters = () => {
  // Implement this method for wave 1

  const availableLetters = {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 9,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2,
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1,
  };

  const letterBowl = [];

  Object.keys(availableLetters).forEach((key) => {
    const quantity = availableLetters[key];
    for (let i = 0; i < quantity; i++) {
      letterBowl.push(key);
    }
  });

  const letterHand = [];
  for (let i = 0; i < 10; i++) {
    const i = Math.floor(Math.random() * letterBowl.length);
    const randomLetter = letterBowl[i];
    letterHand.push(randomLetter);
    letterBowl.splice(i, 1);
  }
  return letterHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const capitalizedWord = input.toUpperCase();
  const splitWord = capitalizedWord.split("");

  let submittedLetter = true;
  splitWord.forEach((letter) => {
    if (lettersInHand.includes(letter)) {
      // remove letter from lettersInHand
      const letterIndex = lettersInHand.indexOf(letter);
      lettersInHand.splice(letterIndex, 1);
    } else {
      submittedLetter = false;
    }
  });
  return submittedLetter;
};

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
