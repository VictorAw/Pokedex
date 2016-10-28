import React from 'react';
import { Link } from 'react-router';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(url) {
    let pokePath = `pokemon/${this.props.pokemonDetail.id}`;
    return ((e) => (this.props.router.push(pokePath + url)));
  }

  render() {
    let pokemonDetail = this.props.pokemonDetail;
    return(
      <section className="poke-detail">
        <img src={pokemonDetail.image_url}/>
        <ul>
          <li className="poke-name" key={pokemonDetail.name}>{pokemonDetail.name}</li>
          <li key={pokemonDetail.poke_type}>
            <strong>Type:</strong> {pokemonDetail.poke_type}</li>
          <li key={pokemonDetail.attack}>
            <strong>Attack:</strong> {pokemonDetail.attack}</li>
          <li key={pokemonDetail.defense}>
            <strong>Defense:</strong> {pokemonDetail.defense}</li>
          <li key="moves">
            <strong>Moves:</strong> {pokemonDetail.moves.join(", ")}
          </li>
          <li key="item-images" className="item-images">
            <h1>Toys</h1>
            {pokemonDetail.items.map((item) => (
              <img key={item.id} src={item.image_url}
                onClick={this.handleClick(`/item/${item.id}`)}/>
              )
            )}
          </li>
          {this.props.children }
        </ul>
      </section>
    );
  }
}

export default PokemonDetail;
