const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay(event) {
  // debugger;
  // console.dir(video);
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  // handleProgress();
}

function updateButton() {
  console.log('Update Button');
  const icon = this.paused ? '►' : '❚ ❚';
  // this.nextElementSibling.querySelector('.toggle').textContent = icon;
  toggle.textContent = icon;
}

function skip() {
  console.log('Skip', this);
  console.log(video.currentTime);
  video.currentTime += parseFloat(this.dataset.skip);
}

let rangeClicked = false;
function handleRangeUpdate() {
  if (!rangeClicked) return;
  console.log(this.value, this.name);
  video[this.name] = this.value;
}

function handleProgress() {
  // console.log('handle progress');
  // const videoDuration = parseFloat(video.duration / 60);
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
}

function updateVideoTime(event) {
  console.log('Done', (event.x / this.offsetWidth) * video.duration);
  video.currentTime = (event.offsetX / progress.offsetWidth) * video.duration;
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
skipButtons.forEach((skipBtn) => {
  skipBtn.addEventListener('click', skip);
});
// ranges.forEach((range) => {
//   range.addEventListener('change', handleRangeUpdate);
// });
ranges.forEach((range) => {
  range.addEventListener('mousemove', handleRangeUpdate);
});
ranges.forEach((range) => {
  range.addEventListener('mouseup', () => (rangeClicked = false));
});
ranges.forEach((range) => {
  range.addEventListener('mousedown', () => (rangeClicked = true));
});

let isDrag = false;
progress.addEventListener('click', updateVideoTime);
progress.addEventListener('mousemove', (e) => isDrag && updateVideoTime(e));
progress.addEventListener('mousedown', () => (isDrag = true));
progress.addEventListener('mouseup', () => (isDrag = false));
