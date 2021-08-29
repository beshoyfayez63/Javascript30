const triggers = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  console.log('highlighting', this);
  // triggers.forEach((trigger) => {
  //   trigger.style.background = 'rgba(0, 0, 0, 0.05)';
  // });
  // this.style.transition = 'background 0.2s';
  // this.style.background = 'white';
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  let scrolledY = window.scrollY;
  highlight.style.transform = `translate(${
    linkCoords.left + window.scrollX
  }px, ${linkCoords.top + scrolledY}px)`;
}

triggers.forEach((trigger) => {
  trigger.addEventListener('mouseenter', highlightLink);
});
