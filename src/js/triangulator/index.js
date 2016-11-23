import Triangulator from './triangulator';

export const triangulator = ({ url, svg }) => {
  if(!url || !svg) {
    throw 'ERROR: triangulator must receive a url and a svg container';
  }
  return new Triangulator({ url, svg });
}
