import React from "react";
import { connect } from "react-redux";
import PokemonIndex from "./pokemon_index";

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon
  };
}

const PokemonIndexContainer = connect(
  mapStateToProps
)(PokemonIndex);

export default PokemonIndexContainer;
