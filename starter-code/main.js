var board = document.getElementById('game-board');
var cards = ['queen', 'queen', 'king', 'king' ];
var cardsInPlay = [];

// function that will create your board
function createCards() {
  // loop through your cards array to create card elements for your board
  for (var i=0; i<cards.length; i++) {

    var cardElement = document.createElement('div');

    // add a class to the card element which will help link styling
    cardElement.className = 'card';

    // this will set the card's 'data-card' to be the element of the array
  cardElement.setAttribute('data-card', cards[i]);

    // append the card to the board
    board.appendChild(cardElement);
  }



};
 // call the function!
  createCards();




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


