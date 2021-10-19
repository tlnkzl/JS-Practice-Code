// Import stylesheets
import './style.css';

// Write Javascript code!
function getInput(input) {
  let c = input[0]; //get first letter in the input
  let counter = 1; //set counter to 1
  let result = ''; //initialize empty string
  for (var i = 1; i < input.length; ++i) {
    if (c == input[i]) {
      // if current character is same as previous character
      ++counter; //increment counter
    } // if it is not same
    else {
      result += `${counter}${c}`; // add to the result
      c = input[i]; //set ref as current character
      counter = 1; //reset counter
    }
  }
  result += `${counter}${c}`; // add the last chunk to the result
  console.log(result); //print result
}

getInput('aaabbdcccaaaa');

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
