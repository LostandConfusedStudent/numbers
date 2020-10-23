// Declare cards array
var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

function draw() {
    for (var i = 0; i < 2; i++) {
        var playerCards = Math.floor(Math.random() * cards.length);
        console.log("You just got a " + (playerCards, cards[playerCards]));
    };

    for (var i = 0; i < 2; i++) {
        var houseCards = Math.floor(Math.random() * cards.length);
        console.log("Dealer just got a " + (houseCards, cards[houseCards]));
    };
};

draw();