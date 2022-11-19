apodURL = "https://api.nasa.gov/planetary/apod?api_key=0UieBswOrvrViwGPhI6ypg1tdwR9iF8tKV6eT2yJ";

async function getApod(url){
    const response = await fetch(url);
    if (response.ok){
    const data = await response.json();
    console.log(data);
    doStuff(data);
    }
    else{
        console.log('Houston, we have a problem... :/')
    }
}

function apodTemplate(data){
    return `<section class="photo">
    <img src=${data.url} alt="${data.title}">
    <div class="info">
        <h2>${data.title}</h2>
        <h3>${data.date}</h3>
        <p>${data.explanation}</p>
    </div>
    </section>`;

}

function doStuff(data){
    const outputEL = document.querySelector('#mainInfo');
    const html = apodTemplate(data);
    outputEL.insertAdjacentHTML('beforeend', html);
  
}

getApod(apodURL);

async function getApodByDate (){
    var date = document.querySelector('#date').value;
    console.log(date);
    clearContent();
    await getApod(apodURL + `&date=${date}`);
}

function clearContent() {
    document.querySelector('#mainInfo').innerHTML = "";
}

document.querySelector('#refresh').addEventListener('click', getApodByDate);




