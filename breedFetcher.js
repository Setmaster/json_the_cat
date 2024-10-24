const needle = require('needle');
const BASEURL = "https://api.thecatapi.com/v1/breeds/";

const fetchBreedDescription = function(name, callback) {
  needle('get', `${BASEURL}search?q=${name}`, (error, response) => {
    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      callback(`Status code error: ${response.statusCode}`, null);
    } else {
      const body = response.body;
      if (body && body.length > 0) {
        callback(null, body[0]["description"]);
      } else {
        callback("No breed found", null);
      }
    }
  });
};

module.exports = {fetchBreedDescription};