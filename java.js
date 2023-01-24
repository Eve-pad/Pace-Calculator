let  distanceInput = document.getElementById("distance");
    hoursInput = document.getElementById("hours");
    minutesInput = document.getElementById("minutes");
    secondsInput = document.getElementById("seconds");
    calculateBtn = document.getElementById("calculate_btn");
    paceText = document.getElementById("pace");

calculateBtn.addEventListener("click", function () {
  let kilometers = parseFloat(distanceInput.value),
    hours = parseFloat(hoursInput.value),
    minutes = parseFloat(minutesInput.value),
    seconds = parseFloat(secondsInput.value);

  function validateInputs (value, input){
  
    if(isNaN (value)){
    input.style.backgroundColor ="red"
      return "You need to put a number";
    }
    else{
     input.style.backgroundColor ="initial"
    }
  }
  validateInputs(kilometers,distanceInput);
   validateInputs(hours,hoursInput);
  validateInputs(minutes,minutesInput);

//   if(isNaN(kilometers)){
//     distanceInput.style.borderColor="red";
//     return;
//   } else{
//     distanceInput.style.backgroundColor="initial"
//   }
//     if(isNaN(distance)){
//       distanceInput.style.background ="red";
//       return;
//     }
//       else{
//             distanceInput.style.background="initial"
//       }
       
   
  let totalMinutes = hours * 60 + minutes + seconds / 60,
    pace = totalMinutes / kilometers;
    paceMinutes = Math.floor(pace),
    paceSeconds = Math.round((pace - paceMinutes) * 60);
     
  paceText.textContent = " You need to run " + paceMinutes + ": " + paceSeconds + " minutes per kilometers";
});

// let block = document.getElementById("block");
//   block.style.backgroundColor ="red";
//   block.style.width ="100px"
//   block.style.height ="100px"

//   block.style.position = "absolute";
//   document.addEventListener("click", function(event){
//     block.style.left = event.clientX + "px";
//     block.style.top = event.clientY + 'px';///positioning
//   });