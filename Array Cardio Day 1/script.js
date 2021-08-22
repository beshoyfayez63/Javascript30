const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const invFiltered = inventors.filter(
  (inv) => inv.year >= 1500 && inv.year < 1600
);
// console.table(invFiltered);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const nameArr = inventors.map((inv) => `${inv.first} ${inv.last}`);
// console.table(nameArr);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInv = inventors.sort((a, b) => a.year - b.year);
// console.table(sortedInv);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const sumYears = inventors.reduce((total, inventor) => {
  const live = inventor.passed - inventor.year;
  return total + live;
}, 0);
// console.log(sumYears);
// 5. Sort the inventors by years lived
const yearsLivedInv = inventors.sort((a, b) => {
  const firstInv = a.passed - a.year;
  const secondInv = b.passed - b.year;
  return firstInv > secondInv ? 1 : -1;
});

// console.table(yearsLivedInv);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((a, b) => {
  const aLast = a.split(', ')[0];
  const bLast = b.split(', ')[0];
  return aLast.localeCompare(bLast) ? 1 : -1;
});
// console.table(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

// let uniques = [...new Set(data)];
// console.table(uniques);
let uniques = data.filter((d, i) => data.indexOf(d) === i);
console.table(uniques);

const instances = data.reduce((obj, item) => {
  if (obj.hasOwnProperty(item)) {
    obj[item]++;
  } else {
    obj[item] = 0;
  }
  return obj;
}, {});

console.table(instances);

let newArray = [
  { name: 'Beshoy', age: 26 },
  { name: 'Beshoy', age: 27 },
  { name: 'Beshoy', age: 26 },
];
console.clear();
inventors.forEach((inv) => {
  console.groupCollapsed(`${inv.first}`);
  console.log(inv);
  console.groupEnd(`${inv.first}`);
});
