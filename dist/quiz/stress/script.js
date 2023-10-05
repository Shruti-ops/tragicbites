document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('quiz-form');
  const resultContainer = document.getElementById('result-container');
  const questions = [
    { id: 'q1', weight: 1 },
    { id: 'q2', weight: 1 },
    { id: 'q5', weight: 1 },
    { id: 'q6', weight: 1 },
    { id: 'q7', weight: 1 },
    { id: 'q8', weight: 1 },
    { id: 'q9', weight: 1 },
    { id: 'q10', weight: 1 },
  ];

  // Function to calculate the total score
  function calculateScore() {
    let totalScore = 0;
    questions.forEach((question) => {
      const selectedOption = document.querySelector(`input[name="${question.id}"]:checked`);
      if (selectedOption) {
        totalScore += parseInt(selectedOption.value) * question.weight;
      }
    });
    return totalScore;
  }

  // Function to display the result
  function displayResult(score) {
    let resultText = '';
    if (score <= 6) {
      resultText = 'Your stress level is minimal.';
    } else if (score <= 12) {
      resultText = 'Your stress level is moderate.';
    } else if (score <= 18) {
      resultText = 'Your stress level is significant.';
    } else {
      resultText = 'Your stress level is severe.';
    }
    resultContainer.textContent = resultText;
    resultContainer.style.display = 'block';
  }

  // Handle form submission
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const totalScore = calculateScore();
    displayResult(totalScore);
  });
});
