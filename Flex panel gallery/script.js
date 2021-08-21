const panels = document.querySelectorAll('.panel');

function closeAllPanels(panels) {
  panels.forEach((panel) => {
    panel.classList.remove('open');
  });
}

panels.forEach((panel, outerIndex) => {
  console.log(panel);

  panel.addEventListener('click', function () {
    panels.forEach((p, innerIndex) => {
      if (outerIndex !== innerIndex) {
        p.classList.remove('open');
      }
    });
    this.classList.toggle('open');
    // this.classList.remove('open-active');
  });
});
panels.forEach((panel, outerIndex) => {
  console.log(panel);

  panel.addEventListener('transitionend', function (e) {
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  });
});
