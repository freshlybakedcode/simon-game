'use strict';

var strictBtn = document.getElementsByClassName('button-strict')[0]
var strictLed = document.getElementsByClassName('strict')[0].children[0];
var switchSlider = document.getElementsByClassName('switch-slider')[0];
var scoreCount = document.getElementsByClassName('number')[0];

console.log(scoreCount);

var playerScore;

function isGameOn() {
	return switchSlider.classList.contains('on');
}

function updateScore() {

}

function turnGameOff(){
	//Turn off all the stuff

	//If strictLED is lit, unlight it
	if (strictLed.classList.contains('lit')) {
		strictLed.classList.remove('lit');
	}
	//If the score is visible, hide it
	playerScore = '';
	updateScore();
	//If the pads are functional, unfunction them
}

function populateListeners() {
	if (document.addEventListener) {
		strictBtn.addEventListener('click', function() {
			if (isGameOn()) {
				toggleClass(strictLed, 'lit');
			}
		});
		switchSlider.addEventListener('click', function() {
			if (isGameOn()) {
				turnGameOff();
			}

			toggleClass(this, 'on');
		});
	}
	else {
		if (gameIsOn) {
			strictBtn.attachevent('onclick', function() {
				toggleClass(strictLed, 'lit');
			});
		}
		switchSlider.attachevent('onclick', function() {
			if (isGameOn()) {
				turnGameOff();
			}

			toggleClass(this, 'on');
		});
	}
}

function toggleClass(element, cl) {
	element.classList.toggle(cl);
}

// Populate Event Listeners on page load
(function () {
	populateListeners();
})();
