import React from "react";
import SearchBar from "./searchBar";
import unSplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unSplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ margin: "20px" }}>
        <SearchBar onSumbitHandler={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
