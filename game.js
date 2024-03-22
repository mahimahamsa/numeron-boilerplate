// Iteration 2: Generate 2 random number and display it on the screen

// Iteration 3: Make the options button functional

// Iteration 4: Build a timer for the game
const num1Element = document.getElementById("number1");
const num2Element = document.getElementById("number2");
const timerElement = document.getElementById("timer");
let score = 0;
let timeRemaining = 5;
let intervalId;


function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; 
}

function startGameTimer() {
    clearInterval(intervalId); 
    timeRemaining = 5;
    timerElement.innerText = timeRemaining;
    intervalId = setInterval(() => {
        timeRemaining--;
        timerElement.innerText = timeRemaining;
        if (timeRemaining == 0) {
            clearInterval(intervalId);
            handleGameOver();
        }
    }, 1000);
}

function compareNumbersAndScore(operation) {
    const number1 = parseInt(num1Element.innerText);
    const number2 = parseInt(num2Element.innerText);
  
    if (
        (operation === "greater-than" && number1 > number2) ||
        (operation === "lesser-than" && number1 < number2) ||
        (operation === "equal-to" && number1 === number2)
    ) {
        score++;
        displayRandomNumbersAndStartGame();
    } else {
        handleGameOver();
    }
}

function displayRandomNumbersAndStartGame() {
    const number1 = generateRandomNumber();
    const number2 = generateRandomNumber();
    num1Element.innerText = number1;
    num2Element.innerText = number2;
    startGameTimer();
}

function handleGameOver() {
    localStorage.setItem("score", score);
    window.location.href = "./gameover.html";
}

// Add event listeners to buttons
document.getElementById("greater-than").onclick = () => compareNumbersAndScore("greater-than");
document.getElementById("lesser-than").onclick = () => compareNumbersAndScore("lesser-than");
document.getElementById("equal-to").onclick = () => compareNumbersAndScore("equal-to");

// Initial display of random numbers and start of the game
displayRandomNumbersAndStartGame();
