
let player = {
    name: "Arun",
    chips: "145",
    sayHello: function(){
        console.log("Hello")
    }
}

// player.sayHello()

let hasBlackJack = false
let isAlive = false
let message = "" 
let sum = 0
let cards = []

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
console.log(cardsEl)
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function startGame(){
    isAlive =  true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard(){
    let num =  Math.floor(Math.random()*13)+1

    if(num === 1){
        //console.log(num)
        return 11
    }
    else if(num > 10){
        //console.log(num)
        return 10
    }
    else{
        return num
    }
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    
    if(sum < 21){
        message = "Do you want to draw a new card ?"
    } else if(sum === 21){
        message = "you've got black jack"
        hasBlackJack = true
    }
    else if(sum > 21){
        message = "Busted"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard(){

    if(isAlive && hasBlackJack === false){
        console.log("Drawing new card from the deck!")
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}

