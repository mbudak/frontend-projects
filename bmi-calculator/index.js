// calculate the bmi
// formula:
// bmi = (weight / ((height*height)/10000))

document.getElementById('btn').addEventListener('click', calculateBMI);

function calculateBMI() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let bmi = (weight / ((height * height) / 10000));
    let resultText = '';
    if (bmi <= 18.6) {
        resultText = 'Under Weight'
    }
    if (bmi > 18.6 && bmi <= 24.9) {
        resultText = 'Normal Weight'
    }
    if (bmi > 24.9) {
        resultText = 'Overweight'
    }
    document.getElementById('results').innerText = `Result is : [${bmi.toFixed(1)}] ${resultText}`;
}