export const fetchAllPokemon = function(success, error) {
  $.ajax({
    message: "GET",
    url: "api/pokemon",
    success,
    error
  });
};

export const fetchPokemon = function(id, success, error) {
  $.ajax({
    message: "GET",
    url: `api/pokemon/${id}`,
    success,
    error
  });
};
