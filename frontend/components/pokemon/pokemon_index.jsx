import React from "react";
import { selectAllPokemon } from "../../reducers/selector";

const pokemonThing = function(pokemon) {
  return (
    <li key={pokemon.id}>
      <section className="poke-list-decoration">
        <p>{pokemon.id}</p>
        <img src={pokemon.image_url}/>
      </section>
      <p>{pokemon.name}</p>
    </li>
  );
};

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='poke-list'>
        <p>We have John in our list</p>
        <ul>
          {
            selectAllPokemon(this.props).map((pokemon) => (
              pokemonThing(pokemon)
            ))
          }
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;
