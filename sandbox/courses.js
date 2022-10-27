// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    "catalog year": "2018",
    // if you need a key name with a space in between use is with quotes.
    // To call the key instead of doing aCourse.catalog year  do  aCourse['catalog year']
    toFind : 1, 
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    findSection: function (toFind){
        // this function will have to return true or false
        return this.sections.find(function(section){
            // "this" tells the program to look inside of itself
            return section.sectionNum == toFind});
    },
    enrollStudent: function (sectionNum){
        // find the right section in this.sections
        const theSection = this.findSection(sectionNum);
        // add one to the enrollment
        theSection.enrolled ++;
    }
  };




function setCourseName(course){
    document.querySelector('#courseName').textContent = course.name;
    document.querySelector('#courseCode').textContent = course.code;
}

function sectionTemplate(section){
    return `<tr>
                <td>${section.sectionNum}</td>
                <td>${section.roomNum}</td>
                <td>${section.enrolled}</td>
                <td>${section.days}</td>
                <td>${section.instructor}</td>
            </tr>`;
}

function renderSections(sections){
    const sectionsElement = document.querySelector('#sections');
    const sectionsHTML = sections.map(sectionTemplate);
    sectionsElement.innerHTML = sectionsHTML.join('');

}

document.querySelector('#enrollStudent').addEventListener('click',function (e){
    const sectionNum = document.querySelector('#sectionNum').value;
    aCourse.enrollStudent(sectionNum);
    renderSections(aCourse.sections);

})

setCourseName(aCourse);
renderSections(aCourse.sections);

aCourse.sections.find(function(item){
    aCourse.findSection(item,1);
})