import PokemonList from "./PokemonList";
import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import PokemonDetails from "./PokemonDetails";
import LoadingAnim from "./LoadingAnim";

/**
 * Get the data of a single pokemon
 * @param {string} url - The url of the pokemon
 * @returns json data of the pokemon
 */
async function getIndividualPokemonData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
/**
 * Remap the data from the API to a more usable format
 * @param {array} data - The data from the API
 * @returns {Pokemon[]} - The data in a more usable format
 */
async function remapPokemonData(pokemonData) {
  let newArray = [];
  for (let i = 0; i < pokemonData.length; i++) {
    let pokemon = await new Pokemon(
      pokemonData[i].name,
      pokemonData[i].url,
      await getIndividualPokemonData(pokemonData[i].url)
    );
    newArray.push(pokemon);
  }
  return newArray;
}
/**
 * Gets all pokemon data of the top 150 from the API
 * @returns {Pokemon[]} - The data of all the pokemon
 */
async function getAllPokemonData() {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then((response) => response.json())
    .then((json) => json.results)
    .then(async (json) => await remapPokemonData(json))
    .catch((error) => console.log(error));
}
/**
 * Displays the Main Page
 * @param {boolean} showDetails - Whether or not to show the details page
 * @param {Pokemon[]} pokemonData - The data of all the pokemon
 * @param {number} selected - The index of the selected pokemon
 * @returns {JSX} - The JSX to render: the main page
 */
function App() {
  const [pokemonData, setPokemonData] = useState({});

  const [showDetails, setShowDetails] = useState(false);

  const [selectedPokemon, setSelectedPokemon] = useState(0);
  useEffect(() => {
    getPokemon();
  }, []);

  //Loads all pokemon data into pokemonData state
  const getPokemon = async () => {
    let data = await getAllPokemonData();
    setPokemonData(data);
  };

  return (
    <div>
      {pokemonData[0] ? (
        <div className="top_bar">
          <img className="bar_icon" src="/PokeBall_icon.png" alt="" />
          <h1 className="bar_title">POKÉDEX - BY JONATHAN ADAMS</h1>
        </div>
      ) : null}
      <div id="Main_Page">
        <div id="Left_Offer">
          <div id="Left_Offer_Content"></div>
          <div className="vr"></div>
        </div>
        {pokemonData[0] ? (
          <PokemonList
            data={pokemonData}
            setSelected={setSelectedPokemon}
            showDetails={setShowDetails}
          />
        ) : (
          <LoadingAnim />
        )}
        {showDetails ? (
          <PokemonDetails data={pokemonData[selectedPokemon]} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
