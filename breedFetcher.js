const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, repsonse, body) => {
    //return error details if there is an error
    if (error) {
      callback(error,  null);
    }
    
    const data = JSON.parse(body);

    //check to see if a valid cat breed was searched
    if (!data.length) {
      callback(error, null);
    } else {
      //callback the description of the cat
      callback(null, data[0].description);
    }
  });
};


module.exports = { fetchBreedDescription };