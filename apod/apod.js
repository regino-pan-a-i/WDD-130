apodURL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

async function getApod(url){
    const response = await fetch(url);
    if (response.ok){
    const data = await response.json();
    console.log(data);
    doStuff(data);
    }
}

function apodTemplate(data){
    return `<section class="photo">
    <img src=${data.url} alt="${data.title}">
    <div>
        <h2>${data.title}</h2>
        <h3>${data.date}</h3>
        <p>${data.explanation}</p>
    </div>
    </section>`;

}

function doStuff(data){
    const outputEL = document.querySelector('main');
    const html = apodTemplate(data);
    outputEL.insertAdjacentHTML('beforeend', html);
  
}

getApod(apodURL);