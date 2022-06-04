var likeCounter = 0;

function debounce(func, wait, immediate) {
    var timeout;
  
    return function executedFunction() {
      var context = this;
      var args = arguments;
          
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      var callNow = immediate && !timeout;
      
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
      
      if (callNow) func.apply(context, args);
    };
  };
  
var button = document.getElementById("debounce");
var likeCount = document.getElementById("likeCount");

button.addEventListener('click', debounce(function() { 
    likeCounter++;
    likeCount.innerText = likeCounter;
}, 1000)); 