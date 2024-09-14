const gameBoard = document.querySelector(".game-board");

// List of card values (pairs)
const cardValues = ["🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🍍", "🥭"];

// Duplicate and shuffle the card values
let cards = [...cardValues, ...cardValues].sort(() => 0.5 - Math.random());

// Create the cards on the game board
cards.forEach((value) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front"></div>
      <div class="card-back">${value}</div>
    </div>
  `;
  card.addEventListener("click", flipCard);
  gameBoard.appendChild(card);
});

let flippedCards = [];
let lockBoard = false;

// Flip card function
function flipCard() {
  if (lockBoard || this.classList.contains("flip")) return;

  this.classList.add("flip");
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    checkForMatch();
  }
}

// Check if the two flipped cards match
function checkForMatch() {
  const [card1, card2] = flippedCards;

  if (card1.innerHTML === card2.innerHTML) {
    flippedCards = [];
  } else {
    lockBoard = true;
    setTimeout(() => {
      card1.classList.add("shake");
      card2.classList.add("shake");
    }, 300);

    setTimeout(() => {
      card1.classList.remove("flip", "shake");
      card2.classList.remove("flip", "shake");
      flippedCards = [];
      lockBoard = false;
    }, 1000);
  }
}
