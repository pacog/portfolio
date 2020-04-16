import "./styles/main.scss";
import "file?name=./img/[name].[ext]!./img/bg.jpg";
import "file?name=./img/[name].[ext]!./img/doctortilla_portfolio.png";
import "file?name=./img/[name].[ext]!./img/chesire_portfolio.jpg";
import "file?name=./img/[name].[ext]!./img/polarsteps_portfolio.png";
import "file?name=./img/[name].[ext]!./img/capac-racer_portfolio.png";
import "file?name=./img/[name].[ext]!./img/recoreco_portfolio.png";

import "file?name=./[name].[ext]!./apple-touch-icon.png";
import "file?name=./[name].[ext]!./favicon-32x32.png";
import "file?name=./[name].[ext]!./favicon-16x16.png";
import "file?name=./[name].[ext]!./manifest.json";
import "file?name=./[name].[ext]!./safari-pinned-tab.svg";

import { triangulator } from "./js/triangulator";

const triangulation = triangulator({
  url: "./img/bg.jpg",
  svg: document.querySelector("#svg-bg"),
});
