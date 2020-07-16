const body = document.querySelector("body");

const IMAGE_NUMBER = 3;

function handleImgLoad() {
  console.log("finished loading");
}

function paintImages() {
  const image = new Image();
  image.src = "images/2.PNG";
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  return number;
}

function init() {
  paintImages();
}
init();
