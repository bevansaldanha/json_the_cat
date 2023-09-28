const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(` https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    const data = JSON.parse(body);

    if (error !== null) {
      callback(error, null);
    } else {
      callback(null, data[0].description);
    }

  });
};

module.exports = fetchBreedDescription;