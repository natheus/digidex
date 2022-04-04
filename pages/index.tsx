import React, { useState, useEffect } from "react";
import Head from "next/head";
import api from "./api/api";
import DigimonThumb from "./components/DigimonThumb";
import SortDigimon from "./components/SortDigimons";

export default function Posts() {
  const [DigimonsData, setDigimonsData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    api.get(``).then((response) => {
      setDigimonsData(response.data);
    });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = DigimonsData.filter((Digimon) => {
        return Object.values(Digimon)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(DigimonsData);
    }
  };

  DigimonsData.sort(SortDigimon("+level", "+name"));

  return (
    <div>
      <Head>
        <title>DigiDex</title>
      </Head>
      <div className="search-bar">
        <form>
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search Digimon or Level"
            aria-label="Search"
            onChange={(e) => searchItems(e.target.value)}
          />
        </form>
      </div>
      <div style={{ padding: 10 }}>
        <main>
          <div className="app-container">
            <div className="digimon-container">
              <div className="all-container">
                {searchInput.length > 1
                  ? filteredResults.map((Digimon, index) => {
                      return (
                        <DigimonThumb
                          key={index}
                          img={Digimon.img}
                          name={Digimon.name}
                          level={Digimon.level}
                        />
                      );
                    })
                  : DigimonsData.map((Digimon, index) => {
                      return (
                        <DigimonThumb
                          key={index}
                          img={Digimon.img}
                          name={Digimon.name}
                          level={Digimon.level}
                        />
                      );
                    })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
