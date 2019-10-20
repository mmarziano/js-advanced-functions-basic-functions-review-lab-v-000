// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*') {
  return function(param="special") {
    return `You are ${flair}${param}${flair}!`
  }
}

let Calculator = {}

Calculator.add = (a, b) => a + b;
Calculator.subtract = (a, b) => a - b;
Calculator.multiply = (a, b) => a * b;
Calculator.divide = (a, b) => a/b;

function actionApplyer(int, fns) {
  if (fns.length === 0) {
    return int;
  } else {
    let a = fns[0](int);
    let b = fns[1](a);
    let c = fns[2](b);
    return c
  }
}