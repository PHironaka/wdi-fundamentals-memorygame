// var cardOne = 'queen';
// var cardTwo = 'queen';
// var cardThree = 'king';
// var cardFour = 'king';

// if (cardOne === cardTwo) {
// 	alert('You found a match!');	
// } else {
//   alert('Sorry, try again.');
// }

// find the board and set it to a variable
// so that we can add cards to it


var board = document.getElementById('game-board');
var cards = ['queen', 'queen', 'king' 'king', ];
var cardsInPlay = [];

// function that will create your board
function createBoard() {
  // loop through your cards array to create card elements for your board
  for (var i=0; i<cards.length; i++) {

    // create a div element which will be used as a card
    var cardElement = document.createElement('div');

    // add a class to the card element which will help link styling
    cardElement.className = 'card';

    // this will set the card's 'data-card' to be the element of the array
  // data — attributes are meant to store data about an element that is not
  // tied to a style,
  // i.e., 'king'.
  cardElement.setAttribute('data-card', cards[i]);


  // when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards, 'data-card').innerHTML = '<img src="king.png" alt="King of Spades" />';

    // append the card to the board
    board.appendChild(cardElement);
  }

}



//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this pre-work, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play, check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for your next try
    cardsInPlay = [];

  }

}


