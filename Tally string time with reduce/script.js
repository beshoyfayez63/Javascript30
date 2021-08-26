const videos = document.querySelectorAll('[data-time]');
const videosArr = Array.from(videos);

const secondsArr = videosArr.map((video) => {
  // console.dir(video);
  let time = video.dataset.time;
  let minutes = +time.split(':')[0];
  let seconds = +time.split(':')[1];
  seconds += minutes * 60;
  // console.log(seconds);
  return seconds;
});

const time = secondsArr.reduce((prev, curr) => {
  return prev + curr;
}, 0);

const hours = Math.floor(time / 3600);
const minutes = Math.floor((time / 3600 - hours) * 60);
console.log(hours, minutes);
