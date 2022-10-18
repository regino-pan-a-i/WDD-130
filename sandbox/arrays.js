const steps = ['one', 'two', 'three']

function listItemTemplate(item){
    return `<li>${item}</li>`;
}

const htmlStrings = steps.map(listItemTemplate);
console.log(htmlStrings);


const listElement = document.getElementById('myList');
const html = htmlStrings.join('');

console.log(html);

listElement.innerHTML = html;