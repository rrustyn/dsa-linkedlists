const Queue = require("../queue");
const Stack = require("../stack");

function stringReversal(str) {
}

function balancedBrackets(str) {
  //loop through str
  //check each if they are ( or [ or {
  //if open bracket, add to stack 
  //if another open bracket add to stack, new top
  //if closed
  //check if correct compared to stack top
  //if true keep going
  //if false fail fast

  //check if stack is clear at end

  let openBrackets = ["(", "[", "{"];
  let closeBrackets = [")", "]", "}"];
  let brackStack = new Stack();

  for (let c of str) {
    if (openBrackets.includes(c)) {
      console.log("what is c: ", c);
      brackStack.push(c);
    }
    if (closeBrackets.includes(c)) {
      if(brackStack.isEmpty()) return false;
      
      if (c === ")" && brackStack.peek() === "(") {
        brackStack.pop();
      } else if (c === "]" && brackStack.peek() === "[") {
        brackStack.pop();
      } else if (c === "}" && brackStack.peek() === "{") {
        brackStack.pop();
      } else {
        return false;
      }
    }
  }
 
  return brackStack.isEmpty();
}

function josephusSurvivor(peopleNum, skip) {
}

function calculator(input) {
}

module.exports = {
  calculator,
  josephusSurvivor,
  balancedBrackets,
  stringReversal,
};
