/**
 * Class that binds a Pokemon to its data
 * @param {string} name - The name of the Pokemon
 * @param {string} url - The url of the Pokemon's data
 * @param {object} data - The cache of the Pokemon's data from the url
 */
class Pokemon {
  constructor(name, url, data) {
    this.name = name;
    this.url = url;
    this.data = data;
  }
}

export default Pokemon;
