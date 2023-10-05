document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');

    if (submitButton) {
        submitButton.addEventListener('click', function(e) {
            e.preventDefault();
        
            let totalScore = 0;

            for (let i = 1; i <= 1; i++) {
                const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
                console.log(selectedOption);

                const selectedValue = parseInt(selectedOption.value);
                console.log(selectedValue);

                if (!isNaN(selectedValue)) {
                    totalScore += selectedValue;
                // } else {
                //     // Handle the case where no option is selected
                //     alert("Please answer all questions.");
                //     return;
                }
            }

            window.location.href = `quiz/results/results.html?score=${totalScore}`;
        });
    }
});

