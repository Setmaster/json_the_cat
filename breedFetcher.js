const needle = require('needle');
const BASEURL = "https://api.thecatapi.com/v1/breeds/";
const BREED_NAME = process.argv[2];

const fetchBreed = async function() {
  try {
    const response = await needle('get', `${BASEURL}search?q=${BREED_NAME}`);

    if (response.statusCode !== 200) {
      console.error(`Status code error: ${response.statusCode}`);
      process.exit(-1);
    }

    if (response.body.length === 0) {
      console.error(`Error: Breed not found`);
      process.exit(-1);
    }
        
    console.log(response.body[0]["description"]);
        
  } catch (error) {
    console.error(`${error}`);
    process.exit(-1);
  }
};

fetchBreed();