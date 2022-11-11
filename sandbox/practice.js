let number = 1;
console.log(number);

function incrementNumber(number){
    number ++;
}
console.log(number);

document.getElementById('add').addEventListener('click', incrementNumber)
console.log(number);

