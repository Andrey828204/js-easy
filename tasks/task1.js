function replaceVowels(str) {
  const vowels = "aeiouyAEIOUY";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.includes(char)) {
      result += "*";
    } else {
      result += char;
    }
  }

  return result;
}

console.log(replaceVowels("hello world")); // h*ll* w*rld
console.log(replaceVowels("Javascript"));  // J*v*scr*pt

module.exports = replaceVowels;