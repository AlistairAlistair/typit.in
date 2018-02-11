const keyPress = require ('./models/keyPress');
const keyRelease = require ('./models/keyRelease');
const KeyBoard = require ('./models/keyboard.js');
const WordsData = require('./models/wordsData.js');
const WordsView = require('./views/wordsView.js');
const Words = require('./models/words.js');



const app = function(){
  const wordsData = new WordsData('http://localhost:5000/api/words');
  const wordsView = new WordsView(document.querySelector('.game-window'));
  const startButton = document.querySelector('#start-button');


  wordsData.getData();


  startButton.addEventListener('click', function(){
    this.parentNode.removeChild(this);

    const keyBoard = new KeyBoard();
    var gameData = wordsData.giveData();
    const words = new Words(keyBoard, gameData, wordsView);
    words.getWordsToPlay('animal');
    console.log(words.keyboard);
    words.prepareRound(0);
    keyPress(words);
    keyRelease();

    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(words.word)
    });

  });


};

window.addEventListener('load', app);
