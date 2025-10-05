/**
 * Detailed Instructions:
 * 1. Define a function named checkAnswer.
 * 2. Identify the correctAnswer as "4".
 * 3. Retrieve the user's answer using document.querySelector('[name="quiz"]:checked').
 * 4. Compare and update the feedback element with the ID 'feedback'.
 * 5. Add a click event listener to the 'submit-answer' button.
 */

function checkAnswer() {
    // 2. Identify the Correct Answer
    const correctAnswer = "4"; 
    
    // 3. Retrieve the User’s Answer
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');
    
    // Check if the user has selected an answer
    if (!selectedChoice) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedChoice.value;
    const feedbackElement = document.getElementById('feedback');
    
    // 4. Compare the User’s Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        // Correct answer
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        // Incorrect answer
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// 5. Add an Event Listener to the Submit Button
const submitButton = document.getElementById("submit-answer");

// Add click event listener, passing the checkAnswer function reference (no parentheses!)
submitButton.addEventListener("click", checkAnswer);