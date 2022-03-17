const playList = [
  './assets/audio/ODC_-_Wanted.mp3',
  './assets/audio/Blind Channel_-_Dark Side.mp3',
  './assets/audio/Linkin Park_-_New Divide.mp3',
  './assets/audio/Papa_Roach_-_Between_Angels_And_Insects.mp3',
  './assets/audio/Rammstein_-_DEUTSCHLAND.mp3',
  './assets/audio/Disturbed_-_Criminal.mp3',
];
const trackCover = [
  './assets/img/Wanted.jpg',
  './assets/img/Dark_side.jpg',
  './assets/img/New_Divide.jpg',
  './assets/img/Between_Angels.jpg',
  './assets/img/Deutschland.jpg',
  './assets/img/Criminal.jpg',
];
const artist = [
  'ODC',
  'Blind Channel',
  'Linkin Park',
  'Papa Roach',
  'Rammstein',
  'Disturbed',
];

const trackName = [
  'Wanted',
  'Dark Side',
  'New Divide',
  'Between Angels And Insects',
  'Deutschland',
  'Criminal',
];

const audio = new Audio();
let isPlay = false;
let playNum = 0;
let trackCurrentTime = 0;

const btnPlay = document.querySelector('.btn-play');
const btnPlayNext = document.querySelector('.btn-forward');
const btnPlayPrev = document.querySelector('.btn-backward');
const spanArtist = document.querySelector('.artist');
const spanTrack = document.querySelector('.track');
const timeline = document.querySelector('.timeline');

function playAudio(track, trackCurrentTime) {
  audio.src = track;
  audio.currentTime = trackCurrentTime;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function changeCover() {
  document.documentElement.style.setProperty('--cover', `url('${trackCover[playNum]}')`);
  spanArtist.innerHTML = artist[playNum];
  spanTrack.innerHTML = trackName[playNum];
}

const getTimeInMS = (t) => {
  let sec = parseInt(t);
  let min = parseInt(sec / 60);
  sec = sec - min*60;
  return (`${min}:${String(sec).padStart(2,0)}`);
}

btnPlay.addEventListener("click", () => {
    if (!isPlay) {
          playAudio(playList[playNum], trackCurrentTime);
          isPlay = true;
      } else {
          pauseAudio();
          trackCurrentTime = audio.currentTime;
          isPlay = false;
      }
      btnPlay.classList.toggle('pause');
});

const playNext = () => {
  playNum++;
  if (playNum >= playList.length) {
    playNum = 0;
  }
  changeCover();
  trackCurrentTime = 0;
  if (!isPlay) {btnPlay.classList.toggle('pause');}
  playAudio(playList[playNum], 0);
  isPlay = true;
}

const playPrev = () => {
  playNum--;
  if (playNum < 0) {
    playNum = playList.length - 1;
  }
    changeCover();
    trackCurrentTime = 0;
    if (!isPlay) {btnPlay.classList.toggle('pause');}
    playAudio(playList[playNum], 0);
    isPlay = true;
}

btnPlayNext.addEventListener("click", () => {
  playNext();
});


btnPlayPrev.addEventListener("click", () => {
  playPrev();
});
setInterval(() => {
  document.querySelector('.current').textContent = getTimeInMS(audio.currentTime);
  if (audio.duration) {
    document.querySelector('.length').textContent = getTimeInMS(audio.duration);
  } else {document.querySelector('.length').textContent = getTimeInMS(0);}
  document.querySelector('.progress').style.width = audio.currentTime / audio.duration * 100 + "%";
  if (audio.currentTime === audio.duration) {playNext();}
}, 200);

timeline.addEventListener("click", element => {
  const timeWidth = window.getComputedStyle(timeline).width;
  const selectTime = element.offsetX / parseInt(timeWidth) * audio.duration;
  audio.currentTime = selectTime;
  trackCurrentTime = selectTime;
}, null);
