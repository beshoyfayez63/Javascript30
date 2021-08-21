let audio = document.querySelectorAll('audio');
// console.log(keys);

window.addEventListener('keydown', (event) => {
  // console.log(event.keyCode);
  let keys = document.querySelectorAll(`div[data-key]`);
  keys.forEach((key) => {
    if (+key.getAttribute('data-key') === event.keyCode) {
      key.classList.add('playing');
      let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
      audio.currentTime = 0;
      audio.play();
      // setTimeout(() => {
      //   key.classList.remove('playing');
      // }, 100);
      key.addEventListener('transitionend', function () {
        key.classList.remove('playing');
      });
    } else {
      key.classList.remove('playing');
    }
  });
});
