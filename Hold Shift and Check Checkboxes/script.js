const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);
// document.querySelector().previousElementSibling

// let lastCheckbox;

// function handleChecked(event) {
//   let inBetween = false;
//   if (event.shiftKey && this.checked) {
//     checkboxes.forEach((innerCheckbox, innerIndex) => {
//       console.groupCollapsed('Grouped');
//       console.log(innerCheckbox, lastCheckbox, '/n', this);
//       if (innerCheckbox === this || innerCheckbox === lastCheckbox) {
//         inBetween = !inBetween;
//         console.log('test', inBetween);
//       }
//       console.groupEnd('Grouped');
//       if (inBetween) {
//         innerCheckbox.checked = true;
//       }
//     });
//   }
//   lastCheckbox = this;
// }

// checkboxes.forEach((checkbox, i) => {
//   checkbox.addEventListener('click', handleChecked);
// });
let lastCheckbox;
function checkboxClickHandler(event) {
  console.log(event.shiftKey);
  let isBetween = false;

  if (event.shiftKey && this.checked && lastCheckbox) {
    // debugger;
    checkboxes.forEach((checkbox) => {
      console.log(this, lastCheckbox);
      // if (!lastCheckbox) {
      //   lastCheckbox = this;
      // }
      if (checkbox === this || checkbox === lastCheckbox) {
        isBetween = !isBetween;
      }
      if (isBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastCheckbox = this;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', checkboxClickHandler);
});
