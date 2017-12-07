export async function getPeople() {

}

export async function getPlanets() {

}

export async function getVehicles() {

}

export async function getCrawl(number) {
  const film = await fetch(`https://swapi.co/api/films/${number}`)
  const filmData = await film.json()
  const { title, opening_crawl, release_date} = filmData;


  return {title, crawl: opening_crawl, date: release_date}
}

// export async function getAllData(crawl, people, planets, vehicles) {
//   return Promise.
// }

export function randomizer() {
  return Math.floor(Math.random() * 6) + 1;
}
