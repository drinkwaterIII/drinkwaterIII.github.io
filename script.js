let money = 0;
let gameState = false;

function startGame() {
    const startingAmount = parseFloat(document.getElementById("startingMoney").value);
    if (isNaN(startingAmount) || startingAmount <= 0) {
        alert("Please enter a valid amount to start the game.")
    } else {
        money = startingAmount;
        gameState = true;
        document.getElementById("moneyLeft").textContent = "$" + money.toFixed(2);
        alert("Game started with $" + money);
    }
}
function coinFlip() {
    if (!gameState) {
        alert("Please start the game first!");
        return;
    }
    if (Math.random() > .5) {
        money = money * 1.8;
        document.getElementById("coinResult").textContent = "Heads!";
    }   else {
        money = money * .50;
        document.getElementById("coinResult").textContent = "Tails!"
    }
    
    document.getElementById("moneyLeft").textContent = "$" + money.toFixed(2)
    return money;
}