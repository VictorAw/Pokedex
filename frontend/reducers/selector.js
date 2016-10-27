import _ from "lodash";

export const selectAllPokemon = function(state) {
  return _.values(state.pokemon);
};
