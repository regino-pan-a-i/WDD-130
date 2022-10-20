const steps = ['one', 'two', 'three'];

function listItemTemplate(item){
    return `<li>${item}</li>`;
}

const htmlStrings = steps.map(listItemTemplate);
console.log(htmlStrings);


const listElement = document.getElementById('myList');
const html = htmlStrings.join('');

console.log(html);

listElement.innerHTML = html;


const letterGrade = ['A', 'B', 'C', 'D'];

function gpa(grade){
    if (grade == 'A'){
        return 4;
    }
    else if (grade == 'B'){
        return 3;
    }
    else if (grade == 'C'){
        return 2;
    }
    else if (grade == 'D'){
        return 1;
    }
}

function convertToGpapoints(grade){
    let points = 0;
    switch(grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3.1;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        default:
            points = 0;
    }
    return points;
}

const gpaList = letterGrade.map(gpa);
console.log(gpaList);


const switchList = letterGrade.map(convertToGpapoints);
console.log(switchList);


function sumPoints (total, current){
    return total + current;
}

const average = switchList.reduce(sumPoints, 0)/switchList.length;
console.log(average.toFixed(2));

//const avg2 = gpaList((total, current) => total + current, 0);
//console.log(avg2);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

function counter(word){
    return word.length >= 6;
    
}

const newFruits = fruits.filter(counter);
console.log(newFruits);

const newFruitsList = fruits.filter(word => word.length >= 6);
console.log(newFruitsList);

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;

const index = numbers.indexOf(luckyNumber);
console.log(index);