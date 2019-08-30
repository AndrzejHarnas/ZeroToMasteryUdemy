import React, { Component } from "react";
class App extends Component {

    constructor() {
      super();
      this.state = { data: [] };
    }
    async componentDidMount() {
      const response = await fetch(`https://swapi.co/api/people`);
      const json = await response.json();
      console.log(json.results);
      this.setState({ data: json.results });
    }
    render() {
      return (
        <div>
          <ul>
            {this.state.data.map(el => (
              <li>
                {el.name}: {el.height}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

export default App;
