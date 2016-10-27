import React from "react";
import { selectAllPokemon } from "../../reducers/selector";

const pokemonThing = function(pokemon) {
  return (
    <li key={pokemon.id}>
      <section className="poke-list-number">
        <p>{pokemon.id}</p>
      </section>
      <section className="poke-list-item">
        <img src={pokemon.image_url}/>
        <p>{pokemon.name}</p>
      </section>
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
