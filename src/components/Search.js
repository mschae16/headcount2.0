import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <input placeholder='Search a location' />
      </div>
    );
  }
}

export default Search;