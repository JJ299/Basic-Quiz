let total = 0;
let rank;
const main = document.querySelector('main');

const one = prompt("Which planet do we live in?");
  if(one.toUpperCase() === "EARTH"){
    total += 1;
  }
const two = prompt("What is the last name of the first President of the United States?");
  if(two.toUpperCase() === "WASHINGTON"){
    total += 1;
  }
const three = prompt("How many states are there in the United States?");
  if(three.toUpperCase() === "FIFTY" || +three === 50){
    total += 1;
  }
const four = prompt("What is the capital of Germany?");
  if(four.toUpperCase() === "BERLIN"){
    total += 1;
  }
const five = prompt("What is the capital of Japan?");
  if(five.toUpperCase() === "TOKYO"){
    total += 1;
  }

if (total === 5){
    rank = "Gold";
  } 
else if (total >= 3) {
    rank = "Silver";
  }
else if(total >= 2) {
    rank = "Bronze";
  }
else {
    rank = "No crown";
  }

main.innerHTML = `
  <h2> You got ${total} out of 5 questions correct.</h2>
  <p> Crown earned: <strong>${rank}</strong></p>`;





