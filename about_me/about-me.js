console.log("It worked!")

let favorite_foods = ['Tres Leches Cake', 'Curry', 'Milanesa'];
const newParagraph = document.createElement('p');
newParagraph.innerText = `Fun facts: favorite foods \n${favorite_foods[0]}, ${favorite_foods[1]}, and ${favorite_foods[2]}`;
document.body.appendChild(newParagraph);


favorite_foods.shift();
newParagraph.innerText = `Fun facts 2: favorite foods \n${favorite_foods[0]}, and ${favorite_foods[1]}`;

favorite_foods.push('Chocolate Cake')
newParagraph.innerText = `Fun facts 3: favorite foods \n ${favorite_foods[0]}, ${favorite_foods[1]}, and ${favorite_foods[2]}`;

const newFooter = document.createElement('footer');
newFooter.innerHTML = 'Welcome, today is'

var today = new Date();
const printDate = today.getDate();
console.log(printDate);

printDate.innerHTML = `Today´s date is ${today}`;
document.getElementById('displayToday').innerHTML=printDate; 

