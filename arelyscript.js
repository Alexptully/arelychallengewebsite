document.getElementById("submitBtn").addEventListener("click", function () {
    const userInput = document.getElementById("userInput").value.trim();
    const correctPassword = "italian italian and i love you";
    const resultDiv = document.getElementById("result");
    const hintParagraph = document.getElementById("hint");

    if (userInput === correctPassword) {
        hintParagraph.textContent = "🎁 Your next clue: 44 23 15  14 11 54  44 23";
        resultDiv.classList.remove("hidden");
    } else {
        hintParagraph.textContent = "❌ Incorrect, try again!";
        resultDiv.classList.remove("hidden");
    }
});