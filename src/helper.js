export async function getPeople() {

}

export async function getPlanets() {

}

export async function getVehicles() {

}

export async function getScroll() {
  const fetchScroll = await fetch('https://swapi.co/api/films/')
  const films = await fetchScroll.json()
  debugger;

  return films
}
