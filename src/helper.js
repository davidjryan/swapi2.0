export async function fetchPeople() {
  const people = await fetch('https://swapi.co/api/people/');
  const peopleData = await people.json();
  const { results } = peopleData;

  return results;
}

export function cleanPeople(people) {
  const cleaned = people.map((person) => {
    let { name, homeworld, species} = person;


    return {name, homeworld, species, favorite: false};
  });

  return cleaned;
}

export async function fetchHomeworld(endpoint) {
  let homeworldFetch = await fetch(`${endpoint}`);
  let personHomeworld = await homeworldFetch.json();

  const { name, population } = personHomeworld;

  return { homeworld: name, population };
}


export async function fetchSpecies(endpoint) {
  let speciesFetch = await fetch(`${endpoint}`);
  let personSpecies = await speciesFetch.json();
  const { name } = personSpecies;

  return { species: name };

}

export function buildPeople(people) {
  const built = people.map(async(person) => {
    const { homeworld, population } = await fetchHomeworld(person.homeworld);
    const { species } = await fetchSpecies(person.species[0]);

    return Object.assign( person, { homeworld, population, species });
  });

  return Promise.all(built);
}

export async function fetchPlanets() {
  const response = await fetch('https://swapi.co/api/planets/');
  const planetData = await response.json();
  const { results } = planetData;

  return results;
}

export function cleanPlanets(planets) {
  const cleaned = planets.map((planet) => {
    let { name, terrain, population, climate, residents } = planet;


    return { name, terrain, population, climate, residents, favorite: false };
  });

  return cleaned;
}

export async function fetchResident(endpoint) {
  const response = await fetch(`${endpoint}`);
  const residentData = await response.json();
  const { name } = residentData;

  return name;
}

export function buildPlanets(planets) {
  const build = planets.map(async(planet) => {
    let residents = await planet.residents.map(async(resident) => {
      const name = await fetchResident(resident);
      return name;
    });

    residents = await Promise.all(residents);

    return Object.assign(planet, { residents: residents.join(', ') || 'none' });
  });

  return Promise.all(build);
}

export async function fetchVehicles() {
  const vehicles = await fetch('https://swapi.co/api/vehicles/');
  const vehicleData = await vehicles.json();
  const { results } = vehicleData;

  return results;
}

export function cleanVehicles(vehicles) {
  const cleaned = vehicles.map((vehicle) => {
    const { name, model, passengers } = vehicle;

    return { name,
      model,
      class: vehicle.vehicle_class,
      passengers,
      favorite: false};
  });
  return cleaned;
}

export async function fetchCrawl(number) {
  const film = await fetch(`https://swapi.co/api/films/${number}`);
  if (film.status === 404) {
    throw (new Error('film not found'));
  } else if (film.status > 404) {
    throw (new Error('some other thing went wrong'));
  }
  const filmData = await film.json();
  const { title, opening_crawl, release_date} = filmData;

  return {title: title.toUpperCase(), crawl: opening_crawl, date: release_date};
}

export function randomizer() {
  return Math.floor(Math.random() * 6) + 1;
}
