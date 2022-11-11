const baseURL = "https://pokeapi.co/api/v2/pokemon/";
//let results = null
///const response = fetch(baseURL).then(function(response){console.log("first");});
///console.log(response);
///doStuff(response);

async function getPokemon(url,callback){
    const response = await fetch(url);
    if (response.ok){
    const data = await response.json();
    callback(data);
    }
}

function pokemonTemplate(pokemon){
    return `<h3>${pokemon.name}</h3>
    <img src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name}">`;


}

function pokeListTemplate(pokemon){
    return `<li>${pokemon.name}</li>`;
}

function doStuff(data){
    const outputEL = document.querySelector('#output');
    const html = pokemonTemplate(data);
    outputEL.insertAdjacentHTML("afterbegin", html);

    
}

function doStuffList(data){
    // generate the html for each item in th elist
    const listEL = document.querySelector('#pokeList')
    const htmlStrings = data.results.map(pokeListTemplate);
    //insert the HTML into the element
    listEL.insertAdjacentHTML('afterbegin', htmlStrings.join(''));

    // Other way to do it 
        // data.results.forEach(function(item) {
        //    listEl.insertAdjacentHTML('beforeemd'), pokeListTemplate(item);
        // })
}



function pokemonTemplateList(pokemon){
    return `<ul>
    <li>Name: ${pokemon.name}</li>
    <img src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name}"> 
    </ul>`
}




getPokemon(baseURL + "ditto", doStuff);
getPokemon(baseURL, doStuffList);
