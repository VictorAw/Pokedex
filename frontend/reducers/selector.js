import _ from "lodash";

export const selectAllPokemon = function(state) {
  return _.values(state.pokemon);
};

export const selectPokemonItem = (state, itemId) => (
  state.pokemonDetail.items.find((item) => item.id === itemId)
);
