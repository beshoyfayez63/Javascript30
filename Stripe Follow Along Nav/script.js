const triggers = document.querySelectorAll('.cool > li');
const backgroundDiv = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function mouseEnterHandler() {
  this.classList.add('trigger-enter');
  setTimeout(() => {
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active');
    }
  }, 150);
  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  backgroundDiv.classList.add('open');
  backgroundDiv.style.height = dropdownCoords.height + 'px';
  backgroundDiv.style.width = dropdownCoords.width + 'px';
  backgroundDiv.style.transform = `translate(${dropdownCoords.left}px, ${
    dropdownCoords.top - navCoords.top
  }px)`;
}
function mouseLeaveHandler() {
  console.log('mouseLeaveHandler');
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  backgroundDiv.classList.remove('open');
}

triggers.forEach((trigger) => {
  // trigger.classList.add('trigger-enter');
  // setTimeout(() => trigger.classList.add('trigger-enter-active'), 150);
  trigger.addEventListener('mouseenter', mouseEnterHandler);
});
triggers.forEach((trigger) =>
  trigger.addEventListener('mouseleave', mouseLeaveHandler)
);
