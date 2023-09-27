import React, { useState, useEffect } from "react";
import api from "./api/api";
import DigimonThumb from "../components/DigimonThumb";
import sortDigimons, { fetchDataWithLevels } from "../utils/utils";

export default function Posts() {
  const [digimonsData, setDigimonsData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDigimons = async () => {
      try {
        setIsLoading(true);
        const response = await api.baseApi(page);
        const digimonsWithLevel = await fetchDataWithLevels(
          response.data.content
        );
        setDigimonsData(digimonsWithLevel);
        setIsLoading(false);
      } catch (error) {
        throw error;
      }
    };

    fetchDigimons();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);

    if (searchValue !== "") {
      const filteredData = digimonsData.filter((digimon) => {
        return Object.values(digimon)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      console.log(filteredData);
      setFilteredResults(filteredData);
    } else {
      setFilteredResults([]);
    }
  };

  const searchDigi = async (searchValue: string) => {
    setSearchInput(searchValue);

    if (searchValue !== "") {
      try {
        let digimon = await api.getDigiByName(searchValue);

        const digimonFilter = [
          {
            level: digimon.data.levels[0]?.level || "Unknown",
            name: digimon.data.name,
            image: digimon.data.images[0]?.href || "Unknown",
          },
        ];
        setFilteredResults(digimonFilter);
      } catch (error) {
        setFilteredResults([
          {
            name: "Digimon not found.",
            image:
              "https://images.vexels.com/media/users/3/128332/isolated/lists/13bcbc98044bbd2bd1d614b83db76de7-oops-bubble-svg.png",
            level: "Unknown",
          },
        ]);
      }
    } else {
      setFilteredResults([]);
    }
  };

  digimonsData.sort(sortDigimons("+level", "+name"));

  return (
    <div>
      <div className="search-bar">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search Name/Level on this page"
          aria-label="Search"
          onChange={(e) => searchItems(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const target = e.target as HTMLInputElement;
              searchDigi(target.value);
            }
          }}
        />
        <img
          style={{ marginLeft: "5px" }}
          src="https://img.icons8.com/ios-filled/50/000000/search.png"
          width={20}
          title="Click Enter to search by name for a specific Digimon"
        />
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
                          img={Digimon.image}
                          name={Digimon.name}
                          level={Digimon.level}
                        />
                      );
                    })
                  : digimonsData.map((Digimon, index) => {
                      return (
                        <DigimonThumb
                          key={index}
                          img={Digimon.image}
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
      <div className="pagination">
        <button
          onClick={handlePrevPage}
          disabled={page === 0 || isLoading}
          className={page === 0 || isLoading ? "disabled" : ""}
        >
          Página Anterior
        </button>
        {isLoading ? (
          <span className="spinner"></span>
        ) : (
          <span>Página {page + 1}</span>
        )}
        <button
          onClick={handleNextPage}
          disabled={isLoading}
          className={isLoading ? "disabled" : ""}
        >
          Próxima Página
        </button>
      </div>
    </div>
  );
}
