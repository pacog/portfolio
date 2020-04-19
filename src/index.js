import "./styles/main.scss";
import bg from "./img/bg.jpg";

import(/* webpackChunkName: "triangulator" */ "./js/triangulator").then(
  ({ triangulator }) => {
    triangulator({
      url: bg,
      svg: document.querySelector("#svg-bg"),
    });
  }
);
