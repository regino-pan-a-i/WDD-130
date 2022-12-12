let flightURL = "https://proxy.cors.sh/https://app.goflightlabs.com/advanced-real-time-flights?access_key=";
const access_key_1 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMzBjNzM4MDUyNWEwNzkyYjczMDQ4N2Y0NGU4NTY3Y2JhYWM2MzY0YjIxNjI2YmMwYjYzMDY3NTVlMjA1NzcyNmYxZTlhNWEzM2M5YzEwMDQiLCJpYXQiOjE2NzA0NzA0NzQsIm5iZiI6MTY3MDQ3MDQ3NCwiZXhwIjoxNzAyMDA2NDc0LCJzdWIiOiIxOTE1MiIsInNjb3BlcyI6W119.EtJy4wvS6KwqmTGqfjmlGnQzrILQ1aHqVKuT-S68Vxncizu2_JU7yBOzBXz1xEOSRRX3snoSFUux0B9SMOdQWQ"
const access_key_2 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZWUyNGY4MDQ0NjNjNTdlYmMwM2IyZGJhMDkzZTFmMmMzYTRkYzRlMDVlYWU1YTlmNDQ2MGMxZTc4ZTkxMDNkMWI1YTBiYjNlYzdhYmM5NWQiLCJpYXQiOjE2NzA4MjkzMTEsIm5iZiI6MTY3MDgyOTMxMSwiZXhwIjoxNzAyMzY1MzExLCJzdWIiOiIxOTIxNCIsInNjb3BlcyI6W119.tsjcNq573HBErUi-G8YDddtjDv9EmUp1PNm3NIXmZUEPTeyEdx4ggQoJ5LyrMqqVXviiTnFVLAwQAaLjo6Wjfw"
var limitFl = "&flightIata=" 
var limitAi = "&airlineIata=W8"

async function getFlightURL(url, key, search){
    const response = await fetch(url + key + search);
    if (response.ok){
    const data = await response.json();
    console.log(data);
    render(data.data);
    }
}

function render(data){
    const outputEL = document.querySelector('#results');
    const html = flightInfoTemplate(data);
    outputEL.insertAdjacentHTML('beforeend', html);
  
}
//html.join("")

function flightInfoTemplate(data){
    //console.log(data.flight)
    //console.log(data[0].flight.iataNumber);
    return `
    <div class="results">
        <h3>Results</h3>
        <p>Flight:   ${data[0]["flight"].iataNumber}</p>
        <p>Departure:${data[0]["departure"].iataCode}</p>
        <p>Arrival:  ${data[0]["arrival"].iataCode}</p>
        <p>Status:   ${data[0]["status"]}</p>
    </div>`;

}

function airlineTemplate(data){
    return `
    <div class="results">
        <h3>Results</h3>
        <p>Flight:   ${data[0]["flight"].iataNumber}</p>
        <p> Departure:${data[0]["departure"].iataCode}</p>
        <p> Arrival:  ${data[0]["arrival"].iataCode}</p>
        <p> Status:   ${data[0]["status"]}</p>
    </div>`;


}



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


let imagesURL = "https://api.teleport.org/api/urban_areas/slug:"
const images = "/images/"

var destiny = "Arrival"

async function getImageURL(url, place){
    const response = await fetch(url + place + images);
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
    <h3>${destiny} city:</h3>
    <img src="${data.photos[0].image.mobile}">
    </div>`;
    
}
function doImages(data){
    const outputEL = document.querySelector('#images');
    const html = imagesTemplate(data);
    outputEL.insertAdjacentHTML('beforeend', html);
    
}

function clearContent() {
    document.getElementById('images').innerHTML = '';
    document.getElementById('results').innerHTML = '';
}

function submit(event){
    event.preventDefault();
    
    var airline = document.getElementById("airline").value;
    var flight = document.getElementById("flightnum").value;
    var place = document.getElementById("arrival").value;
    
    if (airline != null) {
        getFlightURL(flightURL, access_key_2, limitFl + flight);
    }
    else {
        
        getFlightURL(flightURL, access_key_2, limitFl + flight);
    }
    clearContent();
    // if (airline == null){
        //     ariline = ""
        // }
        //console.log(airline);
        
    console.log(place);
        
    // Create an image based on the arrival city
    if ((place.split(' ').length) > 1){
        var city = place.replace(" ", "-");
        console.log(city.toLowerCase());
        getImageURL(imagesURL, city.toLowerCase())
    }
    else{
        console.log(place.toLowerCase())
        getImageURL(imagesURL, place.toLowerCase());
    }

}

document.getElementById("submit").addEventListener('click', submit);

