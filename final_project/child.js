let flightURL = "https://proxy.cors.sh/https://app.goflightlabs.com/advanced-real-time-flights?access_key=";
const access_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMzBjNzM4MDUyNWEwNzkyYjczMDQ4N2Y0NGU4NTY3Y2JhYWM2MzY0YjIxNjI2YmMwYjYzMDY3NTVlMjA1NzcyNmYxZTlhNWEzM2M5YzEwMDQiLCJpYXQiOjE2NzA0NzA0NzQsIm5iZiI6MTY3MDQ3MDQ3NCwiZXhwIjoxNzAyMDA2NDc0LCJzdWIiOiIxOTE1MiIsInNjb3BlcyI6W119.EtJy4wvS6KwqmTGqfjmlGnQzrILQ1aHqVKuT-S68Vxncizu2_JU7yBOzBXz1xEOSRRX3snoSFUux0B9SMOdQWQ"
var limit = "&airlineIata=W8" 


async function getFlightURL(url, key, search){
    const response = await fetch(url + key + search);
    if (response.ok){
    const data = await response.json();
    console.log(data);
    //doStuff(data);
    }
}

function flightInfoTemplate(data){
    //console.log(data.flight)
    console.log(data)
    return `
    <div class="results">
        <p>Flight:   ${data}</p>
        <p>Departure:${data.depture}</p>
        <p>Arrival:  ${data.arrival}</p>
        <p>Status:   ${data.status}</p>
    </div>`;

}

function airlineTemplate(data){
    return `
    <div class="results">
        <p>Flight</p>
        <p>Departure:${data.depture}</p>
        <p>Arrival:  ${data.arrival}</p>
        <p>Status:   ${data.status}</p>
    </div>`;


}

function doStuff(data, template){
    const outputEL = document.querySelector('#results');
    const html = template(data);
    outputEL.insertAdjacentHTML('beforeend', html);
  
}

//getFlightURL(flightURL, access_key, limit);

//console.log(flightURL + access_key + limit)

//  {success: true, data: Array(13)}
//  data: Array(13)
//      0: 
//          aircraft: {iataCode: 'B763', icao24: 'C08412', icaoCode: 'B763', regNumber: 'C-GYAJ'}
//          airline: {iataCode: 'W8', icaoCode: 'CJT'}
//          arrival: {iataCode: 'YQM', icaoCode: 'CYQM'}
//          departure: {iataCode: 'YHM', icaoCode: 'CYHM'}
//          flight: {iataNumber: 'W8620', icaoNumber: 'CJT620', number: '620'}
//          geography: {altitude: 3665.22, direction: 22, latitude: 43.21, longitude: -79.2}
//          speed: {horizontal: 685.24, isGround: 0, vspeed: 0}
//          status: "en-route"
//          system: {squawk: null, updated: 1670481402}
//          [[Prototype]]: Object
//      1: {aircraft: {…}, airline: {…}, arrival: {…}, departure: {…}, flight: {…}, …}
//      2: {aircraft: {…}, airline: {…}, arrival: {…}, departure: {…}, flight: {…}, …}
//      3: {aircraft: {…}, airline: {…}, arrival: {…}, departure: {…}, flight: {…}, …}
//      4: {aircraft: {…}, airline: {…}, arrival: {…}, departure: {…}, flight: {…}, …}
//      5: {aircraft: {…}, airline: {…}, arrival: {…}, departure: {…}, flight: {…}, …}
//      6: {aircraft: {…}, airline: {…}, arrival: {…}, departure: {…}, flight: {…}, …}
//      7: {aircraft: {…}, airline: {…}, arrival: {…}, departure: {…}, flight: {…}, …}
//      8: {aircraft: {…}, airline: {…}, arrival: {…}, departure: {…}, flight: {…}, …}
//      9: {aircraft: {…}, airline: {…}, arrival: {…}, departure: {…}, flight: {…}, …}
//      10: {aircraft: {…}, airline: {…}, arrival: {…}, departure: {…}, flight: {…}, …}
//      11: {aircraft: {…}, airline: {…}, arrival: {…}, departure: {…}, flight: {…}, …}
//      12: {aircraft: {…}, airline: {…}, arrival: {…}, departure: {…}, flight: {…}, …}
//          length: 13
//          [[Prototype]]: Array(0)
//      success: true
//      [[Prototype]]: Object


let imagesURL = "https://api.teleport.org/api/urban_areas/slug:mexico-city/images/"

async function getImageURL(url){
    const response = await fetch(url);
    if (response.ok){
    const data = await response.json();
    console.log(data);
    doImages(data);
    }
}

function imagesTemplate(data){
    //console.log(data.flight)
    console.log(data.photos.image)
    return `
    <div class="results">
        <img href="${data.photos.image.mobile}"
    </div>`;

}
function doImages(data){
    const outputEL = document.querySelector('#images');
    const html = imagesTemplate(data);
    outputEL.insertAdjacentHTML('beforeend', html);
  
}

getImageURL(imagesURL);