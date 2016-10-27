export const fetchAllPokemon = function(success, error) {
  $.ajax({
    message: "GET",
    url: "api/pokemon",
    success,
    error
  });
};
