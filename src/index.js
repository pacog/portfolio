import './styles/main.scss';
import 'file?name=./img/[name].[ext]!./img/bg.jpg';
import 'file?name=./img/[name].[ext]!./img/doctortilla_portfolio.png';
import 'file?name=./img/[name].[ext]!./img/chesire_portfolio.jpg';
import 'file?name=./img/[name].[ext]!./img/polarsteps_portfolio.png';
import 'file?name=./img/[name].[ext]!./img/recoreco_portfolio.png';

import { triangulator } from './js/triangulator';

const triangulation = triangulator({
  url: './img/bg.jpg',
  svg: document.querySelector('#svg-bg')
});
