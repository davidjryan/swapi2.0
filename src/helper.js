export async function fetchPeople() {
  const people = await fetch('https://swapi.co/api/people/')
  const peopleData = await people.json()
  const { results } = peopleData

  return results
}

export function cleanPeople(people) {
  const cleaned = people.map((person) => {
    let { name, homeworld, species} = person


    return {name, homeworld, species, favorite: false}
  });

  return cleaned;
}

export async function fetchHomeworld(endpoint) {
  let homeworldFetch = await fetch(`${endpoint}`)
  let personHomeworld = await homeworldFetch.json()

  const { name, population } = personHomeworld

  return { homeworld: name, population };
}


export async function fetchSpecies(endpoint) {
  let speciesFetch = await fetch(`${endpoint}`)
  let personSpecies = await speciesFetch.json()
  const { name } = personSpecies

  return { species: name }

}

export function buildPeople(people) {
  const built = people.map(async(person) => {
    const { homeworld, population } = await fetchHomeworld(person.homeworld)
    const { species } = await fetchSpecies(person.species[0])
    debugger;

    return Object.assign( person, { homeworld, population, species })
  })

  return Promise.all(built);
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

export async function fetchPlanets() {
  const response = await fetch('https://swapi.co/api/planets/')
  const planetData = await response.json()
  const { results } = planetData

  return results;
}

export async function fetchResident(endpoint) {
  const response = await fetch(`${endpoint}`)
  const residentData = await response.json()
  const { results } = residentData

  return results
}

// export async function getResidents(residents) {
//     const unresolvedResidents = residentsData.map(async(resident) => {
//       let residentNameFetch = await fetch(resident.name)
//       let residentNameData = await residentNameFetch.json()
//       const residentName = residentNameData.name
//
//       return residentName
//     })
// }

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

export async function fetchVehicles() {
  const vehicles = await fetch('https://swapi.co/api/vehicles/')
  const vehicleData = await vehicles.json()
  const { results } = vehicleData;

  return results;
}

export function cleanVehicles(vehicles) {
  const cleaned = vehicles.map((vehicle) => {
    const { name, model, passengers } = vehicle

    return { name, model, class: vehicle.vehicle_class, passengers, favorite: false}
  })
  return cleaned
}

export async function fetchCrawl(number) {
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

export function randomizer() {
  return Math.floor(Math.random() * 6) + 1;
}
