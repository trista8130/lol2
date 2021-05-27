import React, { useEffect, useState } from "react";
import "./index.css";
import ChampionServices from "../../services/champions";
import { Link } from "react-router-dom";
import { imageBaseUrl } from "../../constants/url";

export default function AllChampions({ name }) {
  const [champion, setChampion] = useState({});

  function adjustName(n) {
    const arr = n.split("");
    arr.map((v, i) => {
      if (v == " ") {
        arr.splice(i, 1);
      }
      if (v === "'") {
        arr[i + 1] = arr[i + 1].toLowerCase();
        arr.splice(i, 1);
      }
    });
    return arr.join("");
  }

  const newName = adjustName(name);

  const [isActive, setIsActive] = useState(false);

  const handlePopUp = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const fetchChampion = async () => {
      const response = await ChampionServices.fetchOne(newName);
      setChampion(response.data[newName]);
    };
    fetchChampion();
  }, [name]);

  return (
    <div>
      <div className="champion-block">
        <Link to={`/${newName}`}>
          <h3>{name}</h3>
          <p>{champion.title}</p>
          <img src={imageBaseUrl + `/${newName}_0.jpg`} alt={name} />
        </Link>
        <div className="pop-button" onClick={handlePopUp}>
          +
        </div>
      </div>
      <div className={`${isActive ? "active" : "nonactive"} popup-container`}>
        <div className="pop-up">
          <button onClick={handlePopUp}>x</button>
          <h3>{name}</h3>
          <p>{champion.blurb}</p>
          <img src={imageBaseUrl + `/${newName}_0.jpg`} alt={name} />
        </div>
      </div>
    </div>
  );
}
