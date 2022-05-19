var bgColorArray = ["#caf0f8", "#ade8f4", "#90e0ef", "#48cae4", "#00b4d8", "#0096c7", "#0077b6", "#023e8a", "#03045e"];
var bgColorOrder = 0;

function animateBg() {
    if (bgColorOrder >= bgColorArray.length) {
        bgColorOrder = 0;
    }
    document.body.style.backgroundColor = bgColorArray[bgColorOrder];
    //
    bgColorOrder ++;
}

function animateRandomBg() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log('color', randomColor);
    document.body.style.backgroundColor = `#${randomColor}`;
}

document.body.addEventListener('keydown', keydownOnKeyboard, true); 

function keydownOnKeyboard(e) {
    // Reset all Buttons
    document.getElementById("btn_A").className = "blob ";
    document.getElementById("btn_B").className = "blob ";
    document.getElementById("btn_C").className = "blob ";
    document.getElementById("btn_Shift").className = "blob ";
    document.getElementById("btn_Control").className = "blob ";

    if (e.key == "a" || e.key == "A") {
        document.getElementById("btn_A").className = "blob red";    
    }
    if (e.key == "b" || e.key == "B") {
        document.getElementById("btn_B").className = "blob red";    
    }
    if (e.key == "c" || e.key == "C") {
        document.getElementById("btn_C").className = "blob red";    
    }
    if (e.key == "Shift") {
        document.getElementById("btn_Shift").className = "blob red";    
    }
    if (e.key == "Control") {
        document.getElementById("btn_Control").className = "blob red";    
    }

    document.getElementById("pressedKey").innerText = "[Pressed Key is : " + e.key + "]";
}