// Iteration 5: Store the player score and display it on the game over screen
document.addEventListener("DOMContentLoaded", () => {
    
    const score = localStorage.getItem("score");
   
    const scoreElement = document.getElementById("score-board"); 
    if (scoreElement) {
        scoreElement.textContent = score; 
    } else {
        console.error("Score element not found!"); 
    }
});

