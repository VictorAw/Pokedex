import { Provider } from "react-redux";
import React from "react";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";
import PokemonDetailContainer from "./pokemon_detail/pokemon_detail_container";
import ItemDetailContainer from "./pokemon_detail/item_detail_container";
import PokeFormContainer from "./pokemon/pokemon_form_container";
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { fetchAllPokemon, fetchPokemon } from "../util/api_util";
import { requestAllPokemon, requestPokemon }
  from "../actions/pokemon_actions";

const Root = ({store}) => {
  const getPokemon = (nextState) => {
    store.dispatch(requestPokemon(parseInt(nextState.params.id)));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/'
          components={PokemonIndexContainer}
          onEnter={() => store.dispatch(requestAllPokemon())}>
        <IndexRoute component={PokeFormContainer}/>
          <Route path='pokemon/:id' component={PokemonDetailContainer}
            onEnter={getPokemon}>
            <Route path='item/:itemId' component={ItemDetailContainer}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
//
// <Route path='pokemon/:id' component={PokemonDetailContainer}
//   onEnter={getPokemon} >
// </Route>
