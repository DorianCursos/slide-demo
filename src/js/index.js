// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import landscape1 from '../assets/images/landscape-1.jpg';
import landscape2 from '../assets/images/landscape-2.jpg';
import landscape3 from '../assets/images/landscape-3.jpg';
import landscape4 from '../assets/images/landscape-4.jpg';
import landscape5 from '../assets/images/landscape-5.jpg';
import landscape6 from '../assets/images/landscape-6.jpg';

const slideImageElement = document.getElementById('slide-image');
const prevButtonElement = document.getElementById('previous-button');
const nextButtonElement = document.getElementById('next-button');

let slideCounter = 0;

const slideImages = [landscape1, landscape2, landscape3, landscape4, landscape5, landscape6];

const changeImage = () => {
  slideImageElement.src = slideImages[slideCounter];
};

const previousImage = () => {
  if (slideCounter <= 0) {
    slideCounter = slideImages.length - 1;
  } else slideCounter--;
  changeImage();
};

const nextImage = () => {
  if (slideCounter >= slideImages.length - 1) {
    slideCounter = 0;
  } else slideCounter++;
  changeImage();
};

prevButtonElement.addEventListener('click', previousImage);
nextButtonElement.addEventListener('click', nextImage);
