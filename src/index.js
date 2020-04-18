import "./styles/main.scss";
import "./img/bg.jpg";
import "./img/doctortilla_portfolio.png";
import "./img/chesire_portfolio.jpg";
import "./img/polarsteps_portfolio.png";
import "./img/capac-racer_portfolio.png";
import "./img/recoreco_portfolio.png";

import "./apple-touch-icon.png";
import "./favicon-32x32.png";
import "./favicon-16x16.png";
import "./manifest.json";
import "./safari-pinned-tab.svg";

import { triangulator } from "./js/triangulator";

import(/* webpackChunkName: "triangulator" */ "./js/triangulator").then(
  ({ triangulator }) => {
    triangulator({
      url: "./img/bg.jpg",
      svg: document.querySelector("#svg-bg"),
    });
  }
);
