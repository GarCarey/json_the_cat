const breed = process.argv.slice(2)
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, repsonse, body) => {
const data = JSON.parse(body);

//check to see if a valid cat breed was searched
if (!data.length) {
  console.log("Breed not found! Please use a valid breed.");
  process.exit();
}  

//return error details if there is an error
if (error) return ('Error: ', error); 

//print the description of the cat
console.log(data[0].description);

});