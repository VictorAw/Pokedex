import React from 'react';
import { connect } from 'react-redux';
import PokeForm from './poke-form';
import { makePokemon } from '../../actions/pokemon_actions';

const mapDispatchToProps = (dispatch) => (
  {createPokemon: () => dispatch(makePokemon())}
);

const PokeFormContainer = connect(
  mapDispatchToProps
)(PokeForm);

export default PokeFormContainer;
