const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards, surprise) {
    let thankYou = [];
    for (let i = 0; i < cards.length; i++){
        let x = `Thank you, ${cards[i]}, for the wonderful surprise gift!`;
        thankYou.push(x);
    }
    return thankYou;
}

function countDown(startingNumber){
    let currentNumber = startingNumber;
    while (currentNumber>=0){
        console.log(currentNumber);
        currentNumber--;
    }
}