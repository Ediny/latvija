function startGame() {
    document.getElementById('gameBoard').style.display = "block";
    document.getElementById('game-top').style.display = "none";
}

function submit () {
    let score = 0;
    if(document.getElementById('correct1').checked) {
        score++;
    }
    if(document.getElementById('correct2').checked) {
        score++;
    } 
    if(document.getElementById('correct3').checked) {
        score++;
    } 
    if(document.getElementById('correct4').checked) {
        score++;
    } 
    if(document.getElementById('correct5').checked) {
        score++;
    } 
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById('result').innerHTML = "Tavs rezultāts ir: " + score;
    document.getElementById('result').style.display = "flex";
 
}



// zemāk var redzēt manus centienus uztaisīt jēdzīgāku kodu 1. spēles versijai līdz padevos //

// const cardOne = document.getElementById('cardOne');
// const cardTwo = document.getElementById('cardTwo');
// const cardThree = document.getElementById('cardThree');
// const cards = [cardOne,cardTwo,cardThree];

// console.log(cards);

// let score = 0;

// function correct() {
//     score += 1;
//     for(let i = 0; i < cards.length; i++) {
//         if(cards[i].style.display === "flex") {
//             cards[i].style.display = "none";
//         } else if(cards[i].style.display = "none") {
//             cards[i].style.display = "flex";
//         } else {
//             cards[i+1].style.display = "flex";
//         }
//     }
// }

// function nextCard () {
// cardOne.style.display = "none";
// }

// function startGame () {
//     for(let i = 0; i < cards.length; i++) {
//         cards[i].style.display = "none";
//         cardOne.style.display = "flex";
//     }
// }

// function firstCard() {
//     score += 1;

// }



