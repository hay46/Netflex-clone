const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchFamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
};

export default requests;
