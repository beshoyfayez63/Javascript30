const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}
const newBandsSorted = bands.sort((bandA, bandB) => {
  // let wordA, wordB, sentenceA, sentenceB;
  // wordA = bandA.split(' ');
  // wordB = bandB.split(' ');

  // // console.log(wordA[0] === 'The' ? wordA : '');
  // // console.log(wordB[0] === 'The' ? wordA : '');
  // // console.table(wordB);
  // if (wordA[0] === 'The' || wordA[0] === 'A' || wordA[0] === 'An') {
  //   wordA.shift();
  // }
  // if (wordB[0] === 'The' || wordB[0] === 'A' || wordB[0] === 'An') {
  //   wordB.shift();
  // }
  // sentenceA = wordA.join(' ');
  // sentenceB = wordB.join(' ');
  return strip(bandA).localeCompare(strip(bandB));
});

console.table(newBandsSorted);
