'use strict';
// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// let isPerson = false;
// for (let person of people) {
//   const personAge = new Date().getFullYear() - person.year;
//   if (personAge > 19) {
//     isPerson = true;
//     break;
//   } else {
//     isPerson = false;
//   }
// }
// console.log(isPerson);
const isPerson = people.some((person, i) => {
  return new Date().getFullYear() - person.year < 19;
});
// console.log(isPerson);

// Array.prototype.every() // is everyone 19 or older?
// let isPerson = false;
// for (let i = 0; i < people.length; i++) {
//   const personAge = new Date().getFullYear() - people[i].year;
//   if (personAge < 19) {
//     isPerson = false;
//     break;
//   } else {
//     isPerson = true;
//   }
// }

// console.log(isPerson);
// const isPerson = people.every((person) => {
//   const personAge = new Date().getFullYear() - person.year;
//   return new Date().getFullYear() - person.year > 19;
// });
// console.log(isPerson);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// let comment;
// for (let i = 0; i < comments.length; i++) {
//   if (comments[i].id === 'asd') {
//     comment = comments[i];
//     break;
//   } else {
//     comment = 'Comment not found';
//   }
// }
// console.log(comment);
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

let index;
for (let i = 0; i < comments.length; i++) {
  if (comments[i].id === 823423) {
    index = i;
    break;
  }
}
const tests = comments.splice(index, 1);
console.log(comments);
