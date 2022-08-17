const vowel = ["a", "e", "i", "o", "u"];

function vowelCounter(vowel, text) {
  textArray = text.split(" ");
  for (let i = 0; i < vowel.length; i += 1) {
    if (vowel.includes(text.toLowerCase())) {
      return i;
    };
  };
  return -1;
};