import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <ul>
        <li key='name' className='item-name'>
          {this.props.item.name}
        </li>
        <li key='happy' className='item-content'>
          Happiness: {this.props.item.happiness}
        </li>
        <li key='price' className='item-content'>
          Price: ¥{this.props.item.price}
        </li>
      </ul>
    );
  }
}

export default ItemDetail;
