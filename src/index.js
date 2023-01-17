module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brackets = {};
  let openBracket = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBracket.push(bracketsConfig[i][0]);
    brackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  function isOpenBracket(ch) {
    return openBracket.indexOf(ch) > -1;
  }

  for (let i = 0; i < str.length; i++) {
    let topElement = stack[stack.length - 1];
    const current = str[i];
    if (isOpenBracket(current) && brackets[current] !== current) {
      stack.push(current);
    } else if (isOpenBracket(current) && brackets[current] === current) {
      if (brackets[current] === topElement) {
        stack.pop();
      } else {
        stack.push(current);
      }
    } else {
      if (brackets[current] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
