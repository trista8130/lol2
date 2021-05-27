import React, { useState, useEffect } from "react";
import "./index.css";
import AllChampions from "../../components/AllChampions";
import ChampionServices from "../../services/champions";

function AllChampionsPage() {
  const [champions, setChampions] = useState();

  useEffect(() => {
    const fetchAllChampions = async () => {
      const response = await ChampionServices.fetchAll();
      const champions = Object.values(response.data);
      setChampions(champions);
    };

    fetchAllChampions();
  }, []); 
  return (
    <div className="App">
      <div className="logo">
        <img
          src="https://www.pngmart.com/files/3/League-of-Legends-Logo-PNG-Image.png"
          alt=""
        />
      </div>
      <div className="champions-container">
        {champions &&
          champions.map(
            (champion, index) =>
              index < 20 && (
                <AllChampions name={champion.name} key={champion.name} />
              )
          )}
      </div>
    </div>
  );
}

export default AllChampionsPage;
