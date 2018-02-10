const assert = require('assert');
const Words = require('../words.js');
const KeyBoard = require('../keyboard.js');
const WordsData = require('../wordsData.js');
const WordsView = require('../../views/wordsView.js');


describe('Words', function () {
  let words;
})
beforeEach(function(){
  var keyBoard = new KeyBoard();
  var gamedata = [
    {
		"_id": "5a7eef69a2b10990107c5148",
		"word": "apple",
		"category": "food",
		"image": "/images/food/apple.svg"
	},
	{
		"_id": "5a7eef69a2b10990107c5149",
		"word": "banana",
		"category": "food",
		"image": "/images/food/banana.svg"
	}
  ]
  var gameView = WordsView
  words = new Words(keyBoard, gamedata, gameView);
});

it('should start with an empty word', function(){
  assert.strictEqual(words.word, "");
});

it('should start with an empty answer', function(){
  assert.strictEqual(words.answer, "");
});

it('should be able to set a word', function(){
  words.word = "apple"
  assert.strictEqual(words.word, "apple");
});

it('should be able to set an answer', function(){
  words.answer = "apple"
  assert.strictEqual(words.answer, "apple");
});

it('should start with an empty wordsToPlay', function(){
  assert.strictEqual(words.wordsToPlay.length, 0);
});

it('should setWord and setAnswerLength', function(){
  words.setWord('test')
  words.setAnswerLength();
  assert.deepEqual(words.answer, "_ _ _ _ ");
  assert.strictEqual(words.word, "test");
});

it('should be able to set a word from gamedata', function(){
  words.setWord(words.gamedata[0].word);
  assert.strictEqual(words.word, "apple");
});

it('should prepare a round', function(){
  words.prepareRound(0);
  assert.strictEqual(words.word, "apple");
})
