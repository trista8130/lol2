import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AllChampionsPage from "./pages/AllChampions";
import ChampionPage from "./pages/Champion";

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={AllChampionsPage} />
        <Route exact path="/:name" component={ChampionPage} />
      </div>
    </Router>
  );
};

export default Routes;
