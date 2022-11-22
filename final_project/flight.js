let flightURL = "https://app.goflightlabs.com/advanced-real-time-flights?access_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNTMxZGMwZWYwNzg4ZDVmOWY3NzkyNmIxYjA0OTQ2MWNjNmM2ZmMzZjIxOGY0YzgxOTcwZDI2OWE5MWMyOTM5ZDE1NTY1NDE4YmQ1N2VlMGIiLCJpYXQiOjE2NjkxNTIzODcsIm5iZiI6MTY2OTE1MjM4NywiZXhwIjoxNzAwNjg4Mzg3LCJzdWIiOiIxODk2OSIsInNjb3BlcyI6W119.aDT-WtwLcaeCCDOopMiIfU-03_IEX3pp6gM_NqlgGVS8VDcznt1LjyKcJkbnwBIuCrXd2Ls3MP31owD9kLGZUw";
const access_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNTMxZGMwZWYwNzg4ZDVmOWY3NzkyNmIxYjA0OTQ2MWNjNmM2ZmMzZjIxOGY0YzgxOTcwZDI2OWE5MWMyOTM5ZDE1NTY1NDE4YmQ1N2VlMGIiLCJpYXQiOjE2NjkxNTIzODcsIm5iZiI6MTY2OTE1MjM4NywiZXhwIjoxNzAwNjg4Mzg3LCJzdWIiOiIxODk2OSIsInNjb3BlcyI6W119.aDT-WtwLcaeCCDOopMiIfU-03_IEX3pp6gM_NqlgGVS8VDcznt1LjyKcJkbnwBIuCrXd2Ls3MP31owD9kLGZUw"

async function getFlightURL(url){
    const response = await fetch(url);
    if (response.ok){
    const data = await response.json();
    console.log(data);
    //doStuff(data);
    }
}


getFlightURL(flightURL);