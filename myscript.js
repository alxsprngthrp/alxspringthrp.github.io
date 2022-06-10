//smt kop lift timer script (func1)

function func1(){
  
    var seconds1 = 00; 
    var tens1 = 00; 
    var appendTens1 = document.getElementById("tens1")
    var appendSeconds1 = document.getElementById("seconds1")
    var buttonStart1 = document.getElementById('button-start1');
    var buttonStop1 = document.getElementById('button-stop1');
    var buttonReset1 = document.getElementById('button-reset1');
    var Interval ;
  
buttonStart1.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer1, 10);
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
    
     
    
    function startTimer1 () {
      tens1++; 
      
      if(tens1 <= 9){
        appendTens1.innerHTML = "0" + tens1;
      }
      
      if (tens1 > 9){
        appendTens1.innerHTML = tens1;
        
      } 
      
      if (tens1 > 99) {
        console.log("seconds");
        seconds1++;
        appendSeconds1.innerHTML = "0" + seconds1;
        tens1 = 0;
        appendTens1.innerHTML = "0" + 0;
      }
      
      if (seconds1 > 9){
        appendSeconds1.innerHTML = seconds1;
      }
    
    }
    
  
  }
  

  function func2(){
  
    var seconds2 = 00; 
    var tens2 = 00; 
    var appendTens2 = document.getElementById("tens2")
    var appendSeconds2 = document.getElementById("seconds2")
    var buttonStart2 = document.getElementById('button-start2');
    var buttonStop2 = document.getElementById('button-stop2');
    var buttonReset2 = document.getElementById('button-reset2');
    var Interval ;
  
buttonStart2.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer2, 10);
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
    
     
    
    function startTimer2 () {
      tens2++; 
      
      if(tens2 <= 9){
        appendTens2.innerHTML = "0" + tens2;
      }
      
      if (tens2 > 9){
        appendTens2.innerHTML = tens2;
        
      } 
      
      if (tens2 > 99) {
        console.log("seconds");
        seconds2++;
        appendSeconds2.innerHTML = "0" + seconds2;
        tens2 = 0;
        appendTens2.innerHTML = "0" + 0;
      }
      
      if (seconds2 > 9){
        appendSeconds2.innerHTML = seconds2;
      }
    
    }
    
  
  }
  