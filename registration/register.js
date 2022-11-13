var count = 0
console.log(count);
function increaseCount(){
    return count ++;
}

console.log(count);

function participantTemplate(){
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

document.getElementsByTagName('form').addEventListener('submit')

//Add an event listener to the form. We are listening for a submit event.
//On submit we need to keep the form from doing what it normally would...which is to reload the page.
//Then we need to find all of the fee inputs. There will be one for each participant that has been added. 
//The totals from those fields need to be summed up.
//Get the adult name from the form.
//Hide the Form, and show the summary element. Insert the following message into the summary element: 
//"Thank you NAME for registering. You have registered N participants and owe $N in Fees."

function submitForm(event) {
    event.preventDefault();
    // do the rest of the stuff
}


function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    const feeTotal = feeElements.reduce((total,item) => total + parseFloat(item.value))
    // once you have your total make sure to return it!
    
  }


