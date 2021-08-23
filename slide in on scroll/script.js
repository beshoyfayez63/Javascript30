function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    // let callNow = !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}
const sliderImages = document.querySelectorAll('.slide-in');
function scrollSlider(event) {
  sliderImages.forEach((image, i) => {
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2;

    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPost = window.scrollY < imageBottom;
    // console.log(i, slideInAt, '==>', image.offsetTop);
    console.log(i, window.scrollY, '==>', imageBottom);
    if (isHalfShown && isNotScrolledPost) {
      image.classList.add('active');
    } else if (isHalfShown && !isNotScrolledPost) {
      image.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(scrollSlider, 20));
