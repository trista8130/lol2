import React, { useEffect, useState } from "react";

import ChampionServices from "../../services/champions";
import Champion from "../../components/Champion";

function ChampionPage({ match }) {
  const [champion, setChampion] = useState({});
  const [skins, setSkins] = useState([]);
  const [enemytips, setEnemytips] = useState([]);
  const name = match.params.name;

  useEffect(() => {
    const fetchChampion = async () => {
      const response = await ChampionServices.fetchOne(name);
      setChampion(response.data[name]);
      setSkins(response.data[name].skins);
      setEnemytips(response.data[name].enemytips);
    };
    fetchChampion();
  }, [name]);

  return (
    <div>
      <Champion
        champion={champion}
        name={name}
        skins={skins}
        enemytips={enemytips}
      />
    </div>
  );
}

export default ChampionPage;
