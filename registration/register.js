var count = 1
console.log(count);
function increaseCount(count){
    return count;
}

console.log(count);

function participantTemplate(count){
    count++;
    
    return `<section class="participant${count}">
    <p>Participant ${count}</p>
    <div class="item">
    <label for="fname"> First Name<span>*</span></label>
    <input id="fname${count}" type="text" name="fname" value="" required />
    </div>
    <div class="item activities">
    <label for="activity">Activity #<span>*</span></label>
    <input id="activity${count}" type="text" name="activity" />
    </div>
    <div class="item">
    <label for="fee">Fee ($)<span>*</span></label>
    <input id="fee${count}" type="number" name="fee" />
    </div>
    <div class="item">
    <label for="date">Desired Date <span>*</span></label>
    <input id="date${count}" type="date" name="date" />
    </div>
    <div class="item">
    <p>Grade</p>
    <select>
    <option selected value="" disabled selected></option>
    <option value="1">1st</option>
    <option value="2">2nd</option>
    <option value="3">3rd</option>
    <option value="4">4th</option>
    <option value="5">5th</option>
    <option value="6">6th</option>
    <option value="7">7th</option>
    <option value="8">8th</option>
    <option value="9">9th</option>
    <option value="10">10th</option>
    <option value="11">11th</option>
    <option value="12">12th</option>
    </select>
    </div>
    </section>`;
}

function renderForm(){
    const htmlForm = participantTemplate(count);
    document.getElementById('add').insertAdjacentHTML('beforebegin', htmlForm);
}



//document.getElementById('add').addEventListener('click', increaseCount(count));
document.getElementById('add').addEventListener('click',renderForm, increaseCount(count));

//document.getElementsByTagName('form')[0].addEventListener('submit')

//Since we will be adding a pretty complex set of HTML, let's create a function called participantTemplate(count) 
//where count is the current number of participants shown.
//To make the ids unique in our template remember that we can do something like this: 
//`<section class="participant${count}">` You should add the count to each id in the template.
//When it is time to insert the new HTML into the form, take a look at insertAdjacentHTML(). 
//Notice that we can insert something beforebegin. In other words if we select the add button element, 
//and insert beforebegin it will place our new participant right where we want it.
