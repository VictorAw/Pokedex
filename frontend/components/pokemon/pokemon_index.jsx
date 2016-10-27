import React from "react";
import { selectAllPokemon } from "../../reducers/selector";
import PokemonIndexItem from "./pokemon_index_item";

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
            selectAllPokemon(this.props).map((p) => (
              <PokemonIndexItem pokemon={p} key={p.id} />
            ))
          }
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;
