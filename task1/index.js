function calculate(str) {
  const elementsArr = str.split(' ')

  const firstOperand = elementsArr[0];
  const secondOperand = elementsArr[elementsArr.length - 1];
  const operator = elementsArr[1];

  console.log(elementsArr)
  switch (operator) {
    case '+':
      console.log(elementsArr)
      return firstOperand + secondOperand
      break;
    case '-':
      return firstOperand.slice(0, (firstOperand.length -  secondOperand.length))
      break;
    case '*':
      return firstOperand.repeat(secondOperand.length)
      break;
    case '//':
      return firstOperand.slice(0, (firstOperand.length / secondOperand.length)) || ''
      break;
  }
  
}
console.log(calculate(".. - .."))