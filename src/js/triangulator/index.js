class Triangulator {
  constructor() {
    console.log('new triangulator');
  }
}

export const triangulator = (url) => {
  if(!url) {
    throw 'ERROR: triangulator must receive a url';
  }
  return new Triangulator();
}
