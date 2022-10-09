const axios = require('axios');

module.exports = async () => {
  const result = await axios.get('https://rickandmortyapi.com/api/character/');

  return result.data.results;
};
