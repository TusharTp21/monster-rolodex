import { Component } from "react";

import "./search.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.classname}`}
        type="search"
        placeholder="search-monsters"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
