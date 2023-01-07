const questions = ['What is your name?', 'Where do you live?', 'What do you do?', 'What is your favorite color?', 'Do you have any hobbies?', 'What is your favorite food?', 'What is your favorite animal?', 'What is your favorite movie?', 'What is your favorite book?', 'What is your favorite TV show?'];

function shuffleAndDisplayQuestions() {
  // Shuffle the questions
  let shuffledQuestions = shuffle(questions);

  // Get the first 5 questions
  let displayedQuestions = shuffledQuestions.slice(0, 5);

  // Clear the current questions from the page
  clearQuestions();

  // Display the new questions on the page
  displayQuestions(displayedQuestions);
}

// Shuffle the questions and display them when the page loads
window.onload = shuffleAndDisplayQuestions;

// Shuffle the questions and display them when the "New questions" button is clicked
document.getElementById('new-questions-button').addEventListener('click', shuffleAndDisplayQuestions);


function clearQuestions() {
    let questionContainer = document.getElementById('question-container');
    while (questionContainer.firstChild) {
      questionContainer.removeChild(questionContainer.firstChild);
    }
  }
  
  function displayQuestions(questions) {
    let questionContainer = document.getElementById('question-container');
    for (let i = 0; i < questions.length; i++) {
      let question = questions[i];
      let questionElement = document.createElement('p');
      questionElement.textContent = question;
      questionContainer.appendChild(questionElement);
    }
  }
  

  //////////
  const answers = ['John', 'New York', 'Developer', 'Blue', 'Yes', 'Pizza', 'Dog', 'Inception', 'The Alchemist', 'Game of Thrones'];

function checkAnswers() {
  // Get the answer elements
  let answerElements = document.getElementsByClassName('answer');

  // Clear the current messages
  clearMessages();

  // Check the answers and display the messages
  for (let i = 0; i < answerElements.length; i++) {
    let answerElement = answerElements[i];
    let answer = answerElement.value;
    let correctAnswer = answers[i];
    let messageElement = document.createElement('p');
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      messageElement.textContent = 'Correct';
      messageElement.style.color = 'green';
    } else {
      messageElement.textContent = 'Incorrect';
      messageElement.style.color = 'red';
    }
    answerElement.parentNode.appendChild(messageElement);
  }
}

// Check the answers and display the messages when the "Send answers" button is clicked
document.getElementById('send-answers-button').addEventListener('click', checkAnswers);

function clearMessages() {
  let answerElements = document.getElementsByClassName('answer');
  for (let i = 0; i < answerElements.length; i++) {
    let answerElement = answerElements[i];
    let messageElement = answerElement.nextSibling;
    while (messageElement !== null && messageElement.tagName !== 'P') {
      messageElement = messageElement.nextSibling;
    }
    if (messageElement !== null) {
      answerElement.parentNode.removeChild(messageElement);
    }
  }
}
