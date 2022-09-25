import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

import 'animate.css'; // pour que ça ait marché, j'ai eu besoin de npm install animate.css --save

const body = document.querySelector('body');

body.addEventListener('click', startOrStopSound);

function startOrStopSound() {
  const myAudioPlayer = document.querySelector('#audioPlayer');

  if (myAudioPlayer.paused) myAudioPlayer.play();
  else myAudioPlayer.pause();
}