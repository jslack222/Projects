let player1 = 'rock'

let player2 = 'paper'

if (player1 === player2) {
    console.log('It is a draw')
} else if (player1 === "rock" && player2 === "scissors") {
    console.log('Player 1 wins!')
} else if (player1 === "rock" && player2 === "paper") {
    console.log("Player 2 Wins.")
} else if (player1 === "scissors" && player2 === "paper") {
    console.log("Player 1 wins! ")
} else if (player1 === "scissors" && player2 === "rock") {
    console.log('Player 2 Wins!')
} else if (player1 === 'paper' && player2 === "rock") {
    console.log('Player 1 Wins!')
} else {
    console.log('Player 2 Wins!')
}


let temperature = 71 

if (temperature < 55) {
    console.log('Better get a jacket.')
} else if (temperature <= 70) {
    console.log('Its way too nice outside so wear what you want')
} else {
    console.log("Wear a tank top, its getting hot!")
}

let numsArr = [1, 2, 3, 4, 5]

for (let i = 0; i < numsArr.length; i++) {
    console.log(numsArr[i])
}
numsArr.push(6, 7, 8, 9, 10)

console.log(numsArr)

numsArr.splice(0, 1,'stupid', 'amazing')

console.log(numsArr)

// Jonathan needs to go to the grocery story because he forgot to get some paper towls, Chips and toilet paper. Created a variable called grocery cart, that is equal to an empty array so Jonathan can have something to put all of his items in.

let groceryCart = []

groceryCart.push('toilet paper', 'chips', 'paper towls')

console.log(groceryCart)

// Jonathan realized that he did not need toilet paper after all so in a hurry he rushes to go take it back.

groceryCart.splice(0, 1)

console.log(groceryCart)

//Now Jonathan remebered that he was supposed to get milk, eggs, bacon, sparkling water, chicken nuggets and gummies. Add these items to the grocery cart.

groceryCart.push("milk", 'eggs', 'bacon', 'sparkling water', 'chicken nuggets', 'gummies')

console.log(groceryCart)

//Jonathan no longer needs eggs but needs some egg whites. Take out the eggs and add some egg whites to the grocery cart.

groceryCart.splice(3, 1, 'egg whites')

console.log(groceryCart)

for (i = 0; i > groceryCart.length; i++) {
    console.log(groceryCart[i])
}

for (i = 0; i <= 5; i++) {
    console.log(groceryCart[i])
}