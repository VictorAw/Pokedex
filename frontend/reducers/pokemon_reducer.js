import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON }
  from "../actions/pokemon_actions";
import _ from "lodash";

function PokemonReducer(state={}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:{
      let newState = _.merge({}, state);
      return _.merge(newState, action.pokemon);
    }
    case RECEIVE_POKEMON:{
      let newState = _.merge({}, state);
      return _.merge(newState, action.pokemon);
    }
    default: {
      return state;
    }
  }
}

export default PokemonReducer;
