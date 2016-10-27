import { Provider } from "react-redux";
import React from "react";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";
import { Router, Route, hashHistory } from 'react-router';
import { fetchAllPokemon } from "../util/api_util";
import { requestAllPokemon }
  from "../actions/pokemon_actions";


const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={PokemonIndexContainer}
        onEnter={fetchAllPokemon(store.dispatch(requestAllPokemon()))}/>
    </Router>
  </Provider>
);

export default Root;
