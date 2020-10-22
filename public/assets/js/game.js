// Declare cards array
var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

for (var i = 0; i < cards.length; i++) {
    var draw = Math.floor(Math.random() * cards.length);
    console.log("You just got a " + (draw, cards[draw]));

}
