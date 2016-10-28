import React from 'react';

class PokeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      poke_type: "",
      attack: 0,
      defense: 0,
      moves: [],
      image_url: ""
    };

    this.update = this.update.bind(this);
  }

  update(thing) {
    return e => this.setState({[thing]: e.target.value});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          onChange={this.update("name")}
          value={this.state.name}
          placeholder="Name"/>
        <input type="text"
          onChange={this.update("image_url")}
          value={this.state.image_url}
          placeholder="Image Url"/>
        <select
          value={this.state.type}
          onChange={this.update("poke_type")}>
          <option value="bug">bug</option>
          <option value="dragon">dragon</option>
          <option value="electric">electric</option>
          <option value="fighting">fighting</option>
          <option value="fire">fire</option>
          <option value="flying">flying</option>
          <option value="ghost">ghost</option>
          <option value="grass">grass</option>
          <option value="ground">ground</option>
          <option value="ice">ice</option>
          <option value="normal">normal</option>
          <option value="poison">poison</option>
          <option value="psychic">psychic</option>
          <option value="rock">rock</option>
          <option value="steel">steel</option>
          <option value="water">water</option>
        </select>
        <input type="text"
          onChange={this.update("attack")}
          value={this.state.attack}
          placeholder="Attack"/>
        <input type="text"
          onChange={this.update("defense")}
          value={this.state.defense}
          placeholder="Defense"/>
        <input type="text" id="move_1"
          value={this.state.moves[0]}
          placeholder="Move 1"/>
        <input type="text" id="move_2"
          value={this.state.moves[0]}
          placeholder="Move 2"/>
        <button>Create Pokemon</button>
      </form>
    );
  }
}

export default PokeForm;
