import React, { Component } from "react";
//TODO: GO to link and workout on examples
//https://www.robinwieruch.de/react-fetching-data/

// PROGRAM TO DISPLAY LINKS
const API = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "redux";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: []
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    const { hits } = this.state;

    return (
      <ul>
        {hits.map(hit => (
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
