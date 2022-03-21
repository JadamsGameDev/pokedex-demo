/**
 * Changes styles based on type
 * @param {string} type - The type of the Pokemon
 * @returns {JSX} - The JSX to render: a span with the type's colour
*/
function renderSwitch(type) {
  switch (type) {
    case "normal":
      return <span className="type normal">{type}</span>;
    case "fighting":
      return <span className="type fighting">{type}</span>;
    case "flying":
      return <span className="type flying">{type}</span>;
    case "poison":
      return <span className="type poison">{type}</span>;
    case "ground":
      return <span className="type ground">{type}</span>;
    case "rock":
      return <span className="type rock">{type}</span>;
    case "bug":
      return <span className="type bug">{type}</span>;
    case "ghost":
      return <span className="type ghost">{type}</span>;
    case "steel":
      return <span className="type steel">{type}</span>;
    case "fire":
      return <span className="type fire">{type}</span>;
    case "water":
      return <span className="type water">{type}</span>;
    case "grass":
      return <span className="type grass">{type}</span>;
    case "electric":
      return <span className="type electric">{type}</span>;
    case "psychic":
      return <span className="type psychic">{type}</span>;
    case "ice":
      return <span className="type ice">{type}</span>;
    case "dragon":
      return <span className="type dragon">{type}</span>;
    case "dark":
      return <span className="type dark">{type}</span>;
    case "fairy":
      return <span className="type fairy">{type}</span>;
    case "shadow":
      return <span className="type shadow">{type}</span>;
    case "unknown":
      return <span className="type unknown">{type}</span>;
    default:
      return <span className="type normal">{type}</span>;
  }
}
function PokeType(props) {
  return renderSwitch(props.type);
}

export default PokeType;
