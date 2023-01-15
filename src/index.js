module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brackets = {};
  let closedBracket = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    closedBracket.push(bracketsConfig[i][1]);
    brackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  function isClosedBracket(ch) {
    return closedBracket.indexOf(ch) > -1;
  }

  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    if (brackets[current] !== current) {
      if (isClosedBracket(current)) {
        if (brackets[current] !== stack.pop()) {
          return false;
        }
      } else {
        stack.push(current);
      }
    } else {
      stack.push(current);
      if (brackets[current] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length == 0;
}
