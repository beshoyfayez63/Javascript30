const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;
function debounce(fn, wait) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
}

function stickyNavHandler(event) {
  if (window.scrollY >= topOfNav) {
    // nav.style.position = 'sticky';
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', stickyNavHandler);
