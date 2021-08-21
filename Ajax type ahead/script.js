const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => {
    console.log(data);

    cities.push(...data);
    cities.sort((a, b) => a.city.localeCompare(b.city));
  });

function findMatches(wordToMatch, array) {
  const regex = new RegExp(wordToMatch, 'gi');
  return array.filter((place) => place.city.match(regex));
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function displayMatches(event) {
  if (event.target.value) {
    console.log(event.target.value);
    const filteredCities = findMatches(event.target.value, cities);
    const html = filteredCities
      .map((place) => {
        const regex = new RegExp(event.target.value, 'gi');
        const cityName = place.city.replace(
          regex,
          `<span class='hl'>
            ${event.target.value}
          </span>`
        );
        return `
        <li>
          <span class="name">${cityName} ${place.state}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
      })
      .join('');

    suggestions.innerHTML = html;
  } else {
    console.log('asd');
    suggestions.innerHTML = `
    <li>Filter for a city</li>
    <li>or a state</li>
    `;
  }
}

input.addEventListener('keyup', displayMatches);
