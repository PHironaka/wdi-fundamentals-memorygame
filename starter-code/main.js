var board = document.getElementById('game-board');
var cards = ['queen', 'queen', 'king', 'king' ];
var cardsInPlay = [];


// function that will create your board
//function createCards() {
  // loop through your cards array to create card elements for your board
//  for (var i=0; i<cards.length; i++) {

  //  var cardElement = document.createElement('div');

    // add a class to the card element which will help link styling
   // cardElement.className = 'card';


    // append the card to the board
    //board.appendChild(cardElement);
  //}



//};
 // call the function!
 // createCards();




// function that will create your board
function createBoard() {
  // loop through your cards array to create card elements for your board
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement ('div');    
    // this will set the card's 'data-card' to be the element of the array
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    // when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards);
    // append the card to the board
    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }
}

//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));

    if (this.getAttribute('data-card') ==='king') {
        this.innerHTML = "<img src='king.png'>";
    }
        else {
          this.innerHTML = "<img src='queen.jpg'>";
        }

  // if you have two cards in play, check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for your next try
    cardsInPlay = [];

  }

}



//checks to see if two cards in play are a match
function isMatch(cards) {
  // check if there are two cards are matched up
  if (cardsMatch[0] === cardsMatch [1]) {
      alert("You found a match!");
  }
    else {
      alert("Sorry, try again.");
    }

}




 // call the function!
  createBoard();

