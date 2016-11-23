import './styles/main.scss';
// import 'file?name=./img/[name].[ext]!./img/bg1.jpg';
// import 'file?name=./img/[name].[ext]!./img/bg2.jpg';
// import 'file?name=./img/[name].[ext]!./img/bg3.jpg';
import 'file?name=./img/[name].[ext]!./img/bg.jpg';
import { triangulator } from './js/triangulator';

const triangulation = triangulator({
  url: './img/bg.jpg',
  svg: document.querySelector('#svg-bg')
});
