let score = 0;

const holes = document.getElementsByClassName('hole');

const gameArea = document.getElementById('hit-a-mole');

gameArea.addEventListener('click', function (clickEvent) {
    // if we hit then add it to score
    if (clickEvent.target.matches('.mole')) {
    score++;
    document.getElementById('score').innerText = score;
  }
});


// Game play interval each 1.5 seconds
setInterval(gameplay, 1500);
function gameplay() {
    const randomHoleIndex = Math.floor(Math.random() * holes.length);
    // Reset to all holes
    for (let i = 0; i < holes.length; i++) {
        holes[i].className = "hole";
    }
    holes[randomHoleIndex].classList.toggle('mole');
}

