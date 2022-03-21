import PokeType from "./PokeType";

/**
 * Component for displaying a Pokemon's details
 * @param {Pokemon} props.data - The data of the Pokemon to be rendered
 * @returns {JSX} - The JSX to render: a page with the Pokemon's details
 */
function PokemonDetails(props) {

  return (
    <div className="details_page">
      <div className="details">
        <img
          src={props.data?.data.sprites.other["official-artwork"].front_default}
          alt=""
        />

        <div className="details_short all_caps">
          <div className="details_tittle">
            <h1>{props.data?.name}</h1>
          </div>
          <h2>types</h2>
          {props.data?.data.types.map((type) => {
            return <PokeType key={type.slot} type={type.type.name} />;
          })}

          <h2>abilities</h2>
          {props.data?.data.abilities.map((ability) => {
            return <span key={ability.slot}>{ability.ability.name + " "}</span>;
          })}
        </div>
      </div>
      <div className="details_moves all_caps no_top_margin">
        <h2>moves</h2>
        <div className="hr"/>
        <div className="text_block">
          {props.data?.data.moves.map((move) => {
            return <p className="moves" key={move.move.name}>{move.move.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
