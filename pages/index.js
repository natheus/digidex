import React, { Component } from "react";
import Head from "next/head";
import api from "./api/api";
import DigimonThumb from "./components/DigimonThumb.js";
import sortDigimon from "./components/SortDigimons.js";

export class App extends Component {
  state = {
    Digimons: [],
  };

  async componentDidMount() {
    const res = await api.get("");
    this.setState({ Digimons: res.data });
  }

  render() {
    const { Digimons } = this.state;

    Digimons.sort(sortDigimon("+level", "+name"));

    return (
      <div>
        <Head>
          <title>DigiDex</title>
        </Head>
        <main>
          <div className="app-container">
            <div className="digimon-container">
              <div className="all-container">
                {Digimons.map((Digimon, index) => (
                  <DigimonThumb
                    key={index}
                    img={Digimon.img}
                    name={Digimon.name}
                    level={Digimon.level}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
