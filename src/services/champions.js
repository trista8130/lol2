const baseUrl = "https://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US";

const fetchAll = () => {
  return fetch(`${baseUrl}/champion.json`).then((response) => {
    return response.json();
  });
};

const fetchOne = (name) => {
  return fetch(`${baseUrl}/champion/${name}.json`).then((response) =>
    response.json()
  );
};

const ChampionServices = {
  fetchAll, //key and value are same, only write once means both
  fetchOne,
};

export default ChampionServices;
