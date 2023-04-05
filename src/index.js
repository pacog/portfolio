import "./styles/reset.css";
import "./styles/main.css";
import bg from "/img/bg.jpg";

import(/* webpackChunkName: "triangulator" */ "./js/triangulator").then(
  ({ triangulator }) => {
    triangulator({
      url: bg,
      svg: document.querySelector("#svg-bg"),
    });
  }
);
