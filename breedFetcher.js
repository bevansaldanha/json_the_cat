const request = require("request");
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, function(error, response, body) {

  if (error !== null) {
    console.log("There was an error");
    return;
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("there was an issue with the breed");
  }
  else {

    console.log(data[0]);
  }

});