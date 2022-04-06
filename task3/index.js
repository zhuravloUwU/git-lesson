function isValidParentheses(str) {
  if (str.length <= 0 || str.length > 100) return false;
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = stack[stack.length - 1]
    if(str[i] === '('){
      stack.push(str[i])
    } else if (char === '(' && str[i] === ')'){
      stack.pop()
    } else return false
  }
  return stack.length ? false : true
}

console.log(isValidParentheses("("))