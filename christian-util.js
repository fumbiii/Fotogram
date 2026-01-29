const GALLERY_PHOTOS = [
  "img/photo_1.jpg",
  "img/photo_2.jpg",
  "img/photo_3.jpg",
  "img/photo_4.jpg",
  "img/photo_5.jpg",
  "img/photo_6.jpg",
  "img/photo_7.jpg",
  "img/photo_8.jpg",
  "img/photo_9.jpg",
  "img/photo_10.jpg",
];

const TEXT = [
  "Galaxy",
  "Tornado",
  "Cat",
  "Castle",
  "Mountain",
  "Snowy Mountain",
  "Parrot",
  "Industries",
  "Wasp",
  "Zebras",
];

const main = document.getElementsByTagName("main")[0];

let currentIndex = 0;

function openDialog(photoIndex) {
  currentIndex = photoIndex;

  document.getElementById("dialog-photo").src = GALLERY_PHOTOS[currentIndex];

  document.getElementById("dialog_text").innerText = TEXT[currentIndex];

  updateDialogContent();

  document.getElementById("photo-dialog").showModal();

  document
    .getElementById("photo-dialog")
    .addEventListener("keydown", handleKeyDown);
}

function closeDialog() {
  document.getElementById("photo-dialog").close();
  document
    .getElementById("photo-dialog")
    .removeEventListener("keydown", handleKeyDown);
}

function next_image() {
  currentIndex++;

  if (currentIndex >= GALLERY_PHOTOS.length) {
    currentIndex = 0;
  }

  updateDialogContent();
}

function previous_image() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = GALLERY_PHOTOS.length - 1;
  }

  updateDialogContent();
}

function updateDialogContent() {
  document.getElementById("dialog-photo").src = GALLERY_PHOTOS[currentIndex];

  document.getElementById("dialog_text").innerText = TEXT[currentIndex];

  document.getElementById("photo_counter_text").innerText = `${
    currentIndex + 1
  } / ${GALLERY_PHOTOS.length}`;
}

function handleKeyDown(event) {
  if (event.key === "ArrowRight") {
    next_image();
  } else if (event.key === "ArrowLeft") {
    previous_image();
  }
}

function dialogWBubblingProtection(event) {
  event.stopPropagation();
}

function changeBackgroundcolor_closeButton() {
  const closeButton = document.querySelector('.close-button');
  closeButton.style.backgroundColor = '#0D3240';
}

function resetBackgroundcolor_closeButton() {
  const closeButton = document.querySelector('.close-button');
  closeButton.style.removeProperty('background-color');
}

const nextButton = document.getElementById('changeImage_nextButton');
nextButton.addEventListener('mouseover', changeImage_nextButton);
nextButton.addEventListener('mouseout', resetImage_nextButton);

const previousButton = document.getElementById('changeImage_previousButton');
previousButton.addEventListener('mouseover', changeImage_previousButton);
previousButton.addEventListener('mouseout', resetImage_previousButton);

function changeImage_nextButton(event) {
  event.target.src = './img/arrow_hover.png';
}

function changeImage_previousButton(event) {
  event.target.src = './img/arrow_hover.png';
}

function resetImage_nextButton(event) {
  event.target.src = './img/arrow.png';
}
function resetImage_previousButton(event) {
  event.target.src = './img/arrow.png';
}