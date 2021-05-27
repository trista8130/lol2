import React from "react";
import "./index.css";
import { imageBaseUrl } from "../../constants/url";

export default function Champion({ champion, name, skins, enemytips }) {
  return (
    <div className="champion-container">
      <h1>{champion.name}</h1>
      <div className="info">
        <p>{champion.blurb}</p>
        <div className="details">
          {enemytips.map((content, i) => (
            <p key={i}>{content}</p>
          ))}
        </div>
      </div>
      <div className="skins-container">
        {skins.map((skin) => (
          <div className="skin-block" key={skin.id}>
            <img
              src={imageBaseUrl + `/${name}_${skin.num}.jpg`}
              alt={`${name}_${skin.num}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
