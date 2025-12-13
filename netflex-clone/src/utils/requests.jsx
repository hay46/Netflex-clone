const API_KEY = `process.env.REACT_APP_API_KEY`;
const requests = {
  fetchAction: `./geners/movie?api key=${API_KEY}&with_geners=28`,
  fetchAdvanture: `./geners/movie?api key=${API_KEY}&with_geners=12`,
  fetchAnimation: `./geners/movie?api key=${API_KEY}&with_geners=16`,
  fetchComedy: `./geners/movie?api key=${API_KEY}&with_geners=35`,
  fetchCrime: `./geners/movie?api key=${API_KEY}&with_geners=80`,
  fetchDocumentary: `./geners/movie?api key=${API_KEY}&with_geners=99`,
  fetchDrama: `./geners/movie?api key=${API_KEY}&with_geners=18`,
  fetchFamily: `./geners/movie?api key=${API_KEY}&with_geners=10751`,
};
export default requests;
