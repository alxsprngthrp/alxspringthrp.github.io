let person = prompt("Please enter your full name", "");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
}

// SMT KOP LIFT
//
//

// Define variables and assign them values based on button names
function func1(){ 
    var seconds1 = 00; // Seconds default value is "00"
    var tens1 = 00; // Tenths of seconds default value is "00"
    var appendTens1 = document.getElementById("tens1") // Find "tens1" in HTML and append the Tens1 variable to it
    var appendSeconds1 = document.getElementById("seconds1") // As above
    var buttonStart1 = document.getElementById('button-start1'); // As above
    var buttonStop1 = document.getElementById('button-stop1'); // As above
    var buttonReset1 = document.getElementById('button-reset1'); // As above
    var submit1 = document.getElementById('submit1');
    var Interval ;
  
buttonStart1.onclick = function() { // When buttonStart1 is clicked, run this function
      
      clearInterval(Interval); // Forget how long a second is
       Interval = setInterval(startTimer1, 10); // This is how long a second is
    }
    
      buttonStop1.onclick = function () {
          clearInterval(Interval);
      }
      
    buttonReset1.onclick = function() {
       clearInterval(Interval);
      tens1 = "00";
        seconds1 = "00";
      appendTens1.innerHTML = tens1;
        appendSeconds1.innerHTML = seconds1;
    }
  
    // Start Timer
    function startTimer1 () {
      tens1++; // add 1 to tens1
      
      if(tens1 <= 9){
        appendTens1.innerHTML = "0" + tens1;
      }
      
      if (tens1 > 9){
        appendTens1.innerHTML = tens1;
        
      } 
      
      if (tens1 > 99) {
        seconds1++;
        appendSeconds1.innerHTML = "0" + seconds1;
        tens1 = 0;
        appendTens1.innerHTML = "0" + 0;
          }
      
      if (seconds1 > 9){
        appendSeconds1.innerHTML = seconds1;
      }
    }
  
    submit1.onclick = function () {
      console.log (person,"SMT KOP LIFT: ",seconds1);
  }
  }



      //DEPANEL
      //
      //
      //

  function func2(){ 
      var seconds2 = 00; // Seconds default value is "00"
      var tens2 = 00; // Tenths of seconds default value is "00"
      var appendTens2 = document.getElementById("tens2") // Find "tens1" in HTML and append the Tens1 variable to it
      var appendSeconds2 = document.getElementById("seconds2") // As above
      var buttonStart2 = document.getElementById('button-start2'); // As above
      var buttonStop2 = document.getElementById('button-stop2'); // As above
      var buttonReset2 = document.getElementById('button-reset2'); // As above
      var Interval ;
    
  buttonStart2.onclick = function() { // When buttonStart1 is clicked, run this function
        
        clearInterval(Interval); // Forget how long a second is
        Interval = setInterval(startTimer2, 10); // This is how long a second is
      }
      
        buttonStop2.onclick = function () {
            clearInterval(Interval);
        }
        
      buttonReset2.onclick = function() {
        clearInterval(Interval);
        tens2 = "00";
          seconds2 = "00";
        appendTens2.innerHTML = tens2;
          appendSeconds2.innerHTML = seconds2;
      }
    
      // Start Timer
      function startTimer2 () {
        tens2++; // add 1 to tens1
        
        if(tens2 <= 9){
          appendTens2.innerHTML = "0" + tens2;
        }
        
        if (tens2 > 9){
          appendTens2.innerHTML = tens2;
          
        } 
        
        if (tens2 > 99) {
          seconds2++;
          appendSeconds2.innerHTML = "0" + seconds2;
          tens2 = 0;
          appendTens2.innerHTML = "0" + 0;
            }
        
        if (seconds2 > 9){
          appendSeconds2.innerHTML = seconds2;
        }
        submit2.onclick = function () {
          console.log (person,"DEPANEL: ",seconds2);
      }
    }
  }


