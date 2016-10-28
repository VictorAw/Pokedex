import { RECEIVE_POKEMON } from "../actions/pokemon_actions";
import _ from "lodash";

const PokemonDetailReducer = (state = { moves: [], items: [] }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POKEMON:
      // IDEA: this might not work
      return _.merge( {}, state, action.pokemon);
    default:
      return state;
  }
};

export default PokemonDetailReducer;
