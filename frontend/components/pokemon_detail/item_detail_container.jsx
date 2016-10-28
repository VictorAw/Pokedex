import React from 'react';
import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => ({
  item: selectPokemonItem(state, parseInt(ownProps.params.itemId))
});

const ItemDetailContainer = connect(
  mapStateToProps
)(ItemDetail);

export default ItemDetailContainer;
