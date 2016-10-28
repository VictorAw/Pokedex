import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";
import { makePokemon } from './util/api_util';
import { receivePokemon } from './actions/pokemon_actions';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  ReactDOM.render(<Root store={store} />, document.getElementById('root'));

  window.store = store;
  window.receivePokemon = receivePokemon;
  window.receivePokemon = receivePokemon;
  window.makePokemon = makePokemon;
});
