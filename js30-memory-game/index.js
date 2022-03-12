const playList = [
  './assets/audio/ha_ha_ha.mp3',
  './assets/audio/ha-ha.mp3',
  './assets/audio/Outstanding.mp3',
  './assets/audio/well done.mp3',
  './assets/audio/test-your-might.mp3',
  './assets/audio/Finish him.mp3',
  './assets/audio/Fatality.mp3',
  './assets/audio/Flawless_Victory.mp3',

];

let nbFighters;
/*РАСКЛАДКА КАРТ*/
const select = document.querySelector('.select');
const buttonEasy = document.querySelector('.button-easy');
const buttonNormal = document.querySelector('.button-normal');
const buttonHard = document.querySelector('.button-hard');
const buttonTest = document.querySelector('.button-test');

buttonEasy.addEventListener('click', () => {
  startGame(6);
});
buttonNormal.addEventListener('click', () => {
  startGame(9);
});
buttonHard.addEventListener('click', () => {
  startGame(12);
});
buttonTest.addEventListener('click', () => {
  startGame(1);
});

function startGame(level) {
  nbFighters = level;
  cardContainer.style.width=`${195 * nbFighters * 2 / 3}px`;
  getFighters(nbFighters); /* Запускаем метод выбора бойцов с параметром их количества */
  Array.prototype.push.apply(arr, arr); /* Удваиваем */
  let arrRan = getRandom(arr); /* Заносим удвоенный и перемешенный массив в arrRan */
  getCard(arrRan);
  const btnPlay = document.querySelectorAll('.card');
  btnPlay.forEach((element) => {
    element.addEventListener("click", flipCard);
  })
  select.style.display = 'none';
  let title = document.querySelector('.table-result-title1');
  if (nbFighters === 6) {title.textContent = 'EASY LEVEL'}
  if (nbFighters === 9) {title.textContent = 'NORMAL LEVEL'}
  if (nbFighters === 12) {title.textContent = 'HARD LEVEL'}
  if (nbFighters === 1) {title.innerHTML = 'TEST LEVEL'}
}

let p1score = 0;
let p2score = 0;
let arr = [];
let openPair = 0;
let errors = 0;

const getRandomFighter = (min, max) => {                        /*Получаем рандомного бойца из диапазона*/
    return (Math.round(Math.random()*(max-min)+min));
}
  
/*ВЫБОР КАРТИНОК*/
const getFighters = (row) => {
    
    label: for (let i = 0; i < row; i++) {
      let n = getRandomFighter(1, 30);
      
      for (let num of arr) {
        if (n === num) {
          i--;
          continue label;
        }
      }
      arr.push(n);                                /* Получаем массив рандомных и не повторяющихся бойцов */
    }
}

/*ПЕРЕМЕШИВАНИЕ*/
const getRandom = (arr) => {
  return arr.sort(() => Math.round(Math.random() * 100) - 50);
}

function getCard(arrRan) {  /* Заполнение контейнера картами */
  for (let i = 0; i < arrRan.length; i++) {
  
    const cont = document.createElement('div');
    cont.classList.add("card");
    cont.dataset.card = `card${arrRan[i]}`;
    cont.innerHTML = `<img src="./assets/img/Down-face.jpg" alt="card" class="down-face-card">
    <img src="./assets/img/${arrRan[i]}.jpg" alt="card" class="up-face-card">`
    cardContainer.append(cont);
  }
}

let hasFlippedCard = false;
let firstCard;
let secondCard;
let lockCard = false;

const score = document.querySelector('.score-count');
const btRefresh = document.querySelector('.button-refresh');
const btRestart = document.querySelector('.button-restart');
const btClear = document.querySelector('.button-clear');
const cong = document.querySelector('.congratulations');
const yourScore = document.querySelector('.your-score');
const tbResult = document.querySelector('.table-result');

function showScore() {
  score.textContent = p1score;
}

function flipCard() {
  if (lockCard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;
  isMatch ? disableCard() : unflipCard();
}

function disableCard() {
  playAudio(playList[Math.round(Math.random()*(3-2)+2)])
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
  p1score++;
  openPair++;
  showScore();
  if (nbFighters-openPair === 1) {
    playAudio(playList[5]);
  }
  if (nbFighters-openPair === 0) {
    playAudio(playList[6]);
    setTimeout(() => {
      if (errors === 0) {playAudio(playList[7]);}
      yourScore.textContent = p1score;
      cong.style.display = 'flex';
      document.querySelector('.input-name').focus();
    }, 2500);
  }
}

function unflipCard() {
  lockCard = true;
  playAudio(playList[Math.round(Math.random())]);
  p1score++;
  errors++;
  showScore();
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockCard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

const audio = new Audio();
function playAudio(track) {
  audio.preload = "auto";
  audio.src = track;
  audio.play();
}
setTimeout(() => {playAudio(playList[4])},1000);


btRefresh.addEventListener('click', () => {
  location.reload();
});

btRestart.addEventListener('click', () => {
  tbResult.style.display = 'none';
  location.reload();
});

btClear.addEventListener('click', () => {
  localStorage.clear();
  LeaderTableBody.innerHTML = '';
  GameTableBody.innerHTML = '';
});

let playerName = document.querySelector('.input-name');


  playerName.addEventListener('keydown', (event) => {
    if (event.code == 'Enter' && playerName.value !== '') {
      
      let leaderList = JSON.parse(localStorage.getItem(`leader${nbFighters}`));
      let gameList = JSON.parse(localStorage.getItem(`game${nbFighters}`));
      let newLeader = [[`${String(p1score).padStart(2, 0)}`, `${playerName.value}`]]
      
      if (localStorage.getItem(`leader${nbFighters}`) === null) {                  /* SET Leader */
        localStorage.setItem(`leader${nbFighters}`, JSON.stringify(newLeader));
      } else {
        Array.prototype.push.apply(leaderList, newLeader);
      leaderList.sort();
      if (leaderList.length > 10) {leaderList.length = 10}
      localStorage.setItem(`leader${nbFighters}`, JSON.stringify(leaderList));
      }

      if (localStorage.getItem(`game${nbFighters}`) === null) {                  /* SET Last game */
        localStorage.setItem(`game${nbFighters}`, JSON.stringify(newLeader));
      } else {
        Array.prototype.unshift.apply(gameList, newLeader);
      if (gameList.length > 10) {gameList.length = 10}
      localStorage.setItem(`game${nbFighters}`, JSON.stringify(gameList));
      }
            
      cong.style.display = 'none';
      tbResult.style.display = 'flex';
      getLeaderBoard(nbFighters);
      getGameBoard(nbFighters);
      
    }
    return false;
  });
  
  function getLeaderBoard(n) {
    LeaderTableBody.innerHTML = '';
    leaderList = JSON.parse(localStorage.getItem(`leader${n}`));
    for (let i = 0;  i < leaderList.length; i++) {
   
      const row = document.createElement('tr');
      row.innerHTML = `<td>${i + 1}</td>`;
  
      for (let j = leaderList[i].length - 1; j >= 0; j--) {
          row.innerHTML = row.innerHTML + `<td>${leaderList[i][j]}</td>`;
      }
  
      LeaderTableBody.append(row);
  }
  }

  function getGameBoard(n) {
    GameTableBody.innerHTML = '';
    gameList = JSON.parse(localStorage.getItem(`game${n}`));
    for (let i = 0;  i < gameList.length; i++) {
   
      const row = document.createElement('tr');
  
      for (let j = gameList[i].length - 1; j >= 0; j--) {
          row.innerHTML = row.innerHTML + `<td>${gameList[i][j]}</td>`;
      }
  
      GameTableBody.append(row);
  }
  }

  
