flightURL = "https://api.aviationstack.com/v1/flights?access_key=8da5b507ed1d0a5bac3d27121b084a20";

async function getFlightURL(url){
    const response = await fetch(url);
    if (response.ok){
    const data = await response.json();
    console.log(data);
    //doStuff(data);
    }
}


getFlightURL(flightURL);