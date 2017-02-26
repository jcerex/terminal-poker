var deck = [];
var number_of_players = 4;
var all_player_cards = [];

if (process.argv[2] && process.argv[3]) {
    if (process.argv[2] === "--players") {
        number_of_players = process.argv[3];
        console.log(`Starting with ${number_of_players} players`);
    } else {
        console.log(`Starting with ${number_of_players} players (default)`);
    }
} else {
    console.log(`Starting with ${number_of_players} players (default)`);
};

function create_deck(deck) {
    "♠♡♢♣".split("").forEach(function (suit) {
        "A 2 3 4 5 6 7 8 9 10 J Q K".split(" ").forEach(function (rank) {
            deck.push(rank + suit);
        });
    });
};

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    };
};

function deal_flop(deck_cards) {
    var card_one, card_two, card_three;
    card_one = deck_cards.shift();
    card_two = deck_cards.shift();
    card_three = deck_cards.shift();
    console.log("Flop:")
    console.log(card_one);
    console.log(card_two);
    console.log(card_three);
};

function deal_turn(deck_cards) {
    var turn;
    turn = deck_cards.shift();
    console.log("Turn:")
    console.log(turn);
};

function deal_river(deck_cards) {
    var river;
    river = deck_cards.shift();
    console.log("River:")
    console.log(river);
};

function burn_card(deck_cards) {
    deck_cards.shift();
};

function deal_player(deck_cards, player_number) {
    var card_one, card_two;
    card_one = deck_cards.shift();
    card_two = deck_cards.shift();
    console.log(`Player ${player_number + 1}:`)
    console.log(card_one);
    console.log(card_two);
    var player_cards = []
    player_cards.push(card_one);
    player_cards.push(card_two);
    console.log(player_cards);
    all_player_cards.push(player_cards);
};

function deal_players(deck_cards) {
    console.log(number_of_players);
    for (var i = 0; i < number_of_players; i += 1) {
        deal_player(deck_cards, i);
    };
};

create_deck(deck);
shuffle(deck);
deal_players(deck);
burn_card(deck);
deal_flop(deck);
burn_card(deck);
deal_turn(deck);
burn_card(deck);
deal_river(deck);
console.log(all_player_cards);
