function findGenreById (genre, id) {
  return genre.id === id;
}
export function getGenresNames (idArray) {
  const genresSelected = [];
  idArray.forEach (id => {
    genresSelected.push (genres.find (genre => genre.id === id));
  });
  names = genresSelected.map (element => element.name);
  return names.join (',');
}
const genres = [
  {
    id: 28,
    name: 'Ação',
  },
  {
    id: 12,
    name: 'Aventura',
  },
  {
    id: 16,
    name: 'Animação',
  },
  {
    id: 35,
    name: 'Comédia',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentário',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Família',
  },
  {
    id: 14,
    name: 'Fantasia',
  },
  {
    id: 36,
    name: 'História',
  },
  {
    id: 27,
    name: 'Terror',
  },
  {
    id: 10402,
    name: 'Música',
  },
  {
    id: 9648,
    name: 'Mistério',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Ficção científica',
  },
  {
    id: 10770,
    name: 'Cinema TV',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'Guerra',
  },
  {
    id: 37,
    name: 'Faroeste',
  },
];
