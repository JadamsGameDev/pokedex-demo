/**
 * Component for displaying a list of pokemon
 * @param {Pokemon[]} props.data - The data of all Pokemon to be rendered
 * @returns {JSX} - The JSX to render: a list of Pokemon, each with an image and a name
 */
function PokemonList(props) {
  return (
    <ul className="list-group">
      <div className="hr" />
      {props.data.map((Pokemon) => {
        return (
          <li key={Pokemon.data.id}>
            <div
              className="list-group-item poke-item"
              onClick={() => {
                props.setSelected(parseInt(Pokemon.data.id) - 1);
                props.showDetails(true);
              }}
            >
              <div>
                <img
                  className="no-stretch"
                  src={
                    Pokemon.data.sprites.other["official-artwork"].front_default
                  }
                  alt=""
                />
              </div>
              <div className="poke-item details">
                <div className="poke-title">
                  <p className="no_top_margin">{Pokemon.name}</p>
                </div>
              </div>
            </div>
            <div className="hr" />
          </li>
        );
      })}
    </ul>
  );
}

export default PokemonList;
