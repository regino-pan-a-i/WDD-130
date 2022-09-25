const newParagraph = document.createElement("p");
newParagraph.textContent = "Hello World";
document.body.appendChild(newParagraph);

const myList = ["one one", "two two"];

const newList = document.createElement('ul');
newList.innerHTML = `<li>${myList[0]}</li><li>${myList[1]}</li>`;
document.body.appendChild(newList);


const newSection = document.createElement("section")
const newH2 = document.createElement("h2")
newH2.innerText = 'CSE 121b'
