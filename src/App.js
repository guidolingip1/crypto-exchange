import React from "react";
import { ListCrypto } from "./components/list-crypto/list-crypto.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      crypto: [],
      searchMovie: "",
    };
  }

  componentDidMount() {
    fetch("https://api.coingecko.com/api/v3/exchanges")
      .then((response) => response.json())
      .then((cryptoList) => this.setState({ crypto: cryptoList }));
  }

  render() {
    const { crypto, searchMovie } = this.state;
    const filteredCryptos = crypto.filter((crypto) =>
      crypto.name.toLowerCase().includes(searchMovie.toLowerCase())
    );
    console.log(crypto);
    return (
      <div className="App">
        <h1>Exchange Finder</h1>
        <SearchBox
          placeholder="Search Exchange"
          handleChange={(e) => {
            this.setState({ searchMovie: e.target.value });
          }}
        />
        <ListCrypto cryptoList={filteredCryptos} />
      </div>
    );
  }
}

export default App;
