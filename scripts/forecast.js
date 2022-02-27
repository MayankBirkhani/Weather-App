//API key from AccuWeather
const key = 'fByzshSBjshWAgQ6JNyIqs3rZuEgNg2v';

//get weather information
const getWeather = async (id) =>{

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};


// We are creating here aync function because we want it to return a promise

//cost base :- City API endpoint URL.Returns information for an array of cities that match the search text.

const getCity = async (city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    //console.log(data);

    return data[0];

};

getCity('Haldwani')
.then(data =>{
    return getWeather(data.Key);
}).then(data =>{
    console.log(data);
}).catch(err => console.log(err));

