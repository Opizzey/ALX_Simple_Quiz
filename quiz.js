function checkAnswer() {
    const correctAnswer = "4"; 
    
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');
    
    if (!selectedChoice) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedChoice.value;
    const feedbackElement = document.getElementById('feedback');
    
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

const submitButton = document.getElementById("submit-answer");

submitButton.addEventListener("click", checkAnswer);