const body = document.querySelector("body");

const IMAGE_NUMBER = 3;

function handleImgLoad() {
  console.log("finished loading");
}

function paintImages(imgnumber) {
  const image = new Image();
  image.src = `images/${imgnumber + 1}.PNG`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMAGE_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImages(randomNumber);
}
init();
