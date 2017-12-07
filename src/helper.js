export async function getPeople() {
  const people = await fetch(`https://swapi.co/api/people/`)
  const peopleData = await people.json()
  const { results } = peopleData

  const unresolvedPromises = results.map(async(person) => {
    let homeworldFetch = await fetch(person.homeworld)
    let personHomeworld = await homeworldFetch.json()
    const { name, population } = personHomeworld

    let speciesFetch = await fetch(person.species)
    let personSpecies = await speciesFetch.json()
    const speciesName = personSpecies.name

    return Object.assign({}, name: person.name, homeworld: name, species: speciesName, population)
  })

  return Promise.all(unresolvedPromises)
}

export async function getPlanets() {
  const planets = await fetch(`https://swapi.co/api/planets/`)
  const planetData = await planets.json()
  let { results } = planetData

  const unresolvedPromises = results.map(async(planet) => {
    let residentsFetch = await fetch(planet.residents)
    let residentsData = await residentsFetch.json()
    const unresolvedResidents = 
  })
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
