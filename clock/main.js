let hoursContainer = document.querySelector('.hours-container');
let minutesContainer = document.querySelector('.minutes-container');
let secondsContainer = document.querySelector('.seconds-container');

function getTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360;
  if (secondsDegree === 0) {
    console.log('asd');
    secondsContainer.style.transition = 'none';
  }
  secondsContainer.style.transform = `rotate(${secondsDegree}deg)`;
  const mins = now.getMinutes();
  const minutesDegree = (mins / 60) * 360;
  minutesContainer.style.transform = `rotate(${minutesDegree}deg)`;

  console.log(secondsDegree, mins);
}

setInterval(getTime, 1000);

// setInterval(getTime, 1000);
