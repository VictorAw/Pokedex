import {fetchAllPokemon, fetchPokemon, makePokemon} from '../util/api_util';
import {REQUEST_ALL_POKEMON,
        REQUEST_POKEMON,
        CREATE_POKEMON,
        receiveAllPokemon,
        receivePokemon,
        createPokemon} from '../actions/pokemon_actions';


const PokemonMiddleware = ({ dispatch }) => next => action => {

  switch (action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon((pokemon) => dispatch(receiveAllPokemon(pokemon)));
      return next(action);
    case REQUEST_POKEMON:
      fetchPokemon(action.id, (pokemon) => dispatch(receivePokemon(pokemon)));
      return next(action);
    case CREATE_POKEMON:
      makePokemon(action.pokemon, (pokemon) =>
        dispatch(receivePokemon(pokemon)));
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
