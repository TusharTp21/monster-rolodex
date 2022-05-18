import React, { Component } from "react";
import CardList from "./components/card-list/card-list.jsx";
import SearchBox from "./components/search/search.jsx";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;

    const { onSearchChange } = this;
    const filteredmonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title"> MONSTER ROLODEX</h1>
        <SearchBox
          classname="monster-search-box"
          onChangeHandler={onSearchChange}
        />

        <CardList monsters={filteredmonsters} />
      </div>
    );
  }
}

export default App;
