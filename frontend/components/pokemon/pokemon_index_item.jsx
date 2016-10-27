import React from "react";
import { withRouter } from 'react-router';

const PokemonIndexItem = (props) => {

  const handleClick = (url) => ( (e) => (props.router.push(url)));

  return (
   <li onClick={handleClick(`/pokemon/${props.pokemon.id}`)}>
     <section className="poke-list-number">
       <p>{props.pokemon.id}</p>
     </section>
     <section className="poke-list-item">
       <img src={props.pokemon.image_url}/>
       <p>{props.pokemon.name}</p>
     </section>
   </li>
 );
};

export default withRouter(PokemonIndexItem);
