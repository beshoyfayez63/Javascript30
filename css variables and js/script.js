const root = document.documentElement;
const spaceInput = document.querySelector('input[name="spacing"]');
spaceInput.addEventListener('mousemove', function (event) {
  console.log(event.target.value);
  console.log(this.name);
  root.style.setProperty(`--${this.name}`, event.target.value + 'px');
});
const blurInput = document.querySelector('input[name="blur"]');
blurInput.addEventListener('mousemove', function (event) {
  console.log(event.target.value);
  root.style.setProperty(`--${this.name}`, event.target.value + 'px');
});
const colorInput = document.querySelector('input[name="base"]');
colorInput.addEventListener('change', function (event) {
  console.log(event.target.value);
  root.style.setProperty(`--${this.name}`, event.target.value);
});

document.documentElement.style.setProperty('--base');
