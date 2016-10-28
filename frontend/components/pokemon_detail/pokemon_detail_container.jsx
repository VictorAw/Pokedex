import React from 'react';
import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => ({
  pokemonDetail: state.pokemonDetail
});

const PokemonDetailContainer = connect(
  mapStateToProps
)(PokemonDetail);

export default PokemonDetailContainer;
