export async function fetchPeople(endpoint) {
  const people = await fetch(`${endpoint}`)
  const peopleData = await people.json()
  const { results } = peopleData

  return results;
}

  
  //Homeworld contructor
//   const unresolvedPromises = results.map(async(person) => {
//     let homeworldFetch = await fetch(person.homeworld)
//     let personHomeworld = await homeworldFetch.json()
//     const { name, population } = personHomeworld
//
//     let speciesFetch = await fetch(person.species)
//     let personSpecies = await speciesFetch.json()
//     const speciesName = personSpecies.name
//
//     return Object.assign({}, {name: person.name, homeworld: name, species: speciesName, population})
//   })
//
//   return Promise.all(unresolvedPromises)
// }

export async function fetchPlanets(endpoint) {
  const response = await fetch(`${endpoint}`)
  const planetData = await response.json()
  const { results } = planetData

  return results
}

export async function fetchResident(endpoint) {
  const response = await fetch(`${endpoint}`)
  const residentData = await response.json()
  const { results } = residentData

  return results
}

export async function getPlanets(planets) {

}

export async function getResidents(residents) {
    const unresolvedResidents = residentsData.map(async(resident) => {
      let residentNameFetch = await fetch(resident.name)
      let residentNameData = await residentNameFetch.json()
      const residentName = residentNameData.name

      return residentName
    })
}

  // const unresolvedPromises = results.map(async(planet) => {
  //   let residentsFetch = await fetch(planet.residents)
  //   let residentsData = await residentsFetch.json()
  //
  //
  //   const residents = Promise.all(unresolvedResidents)
  //   const { name, terrain, population, climate } = planet
  //
  //   return Object.assign({}, {name, terrain, population, climate, residents})
  // })
  //
  // return Promise.all(unresolvedPromises)

export async function getVehicles() {
  const vehicles = await fetch(`https://swapi.co/api/vehicles/`)
  const vehicleData = await vehicles.json()
  const { results } = vehicleData

  const reconstructedVehicles = results.map((vehicle) => {
    const { name, model, passengers } = vehicle

    return Object.assign({}, {name, model, vClass: vehicle.class, passengers})
  })

  return reconstructedVehicles
}

export async function getCrawl(number) {
  const film = await fetch(`https://swapi.co/api/films/${number}`)
  if(film.status === 404) {
    throw(new Error('film not found'))
  } else if(film.status > 404) {
    throw(new Error('some other thing went wrong'))
  }
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
