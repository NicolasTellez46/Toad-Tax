// From Claud 4/17/24
//Mod Nicolas Tellez 5/1/2024 (Changed localStorage to sessionStorage)

//stores user inputs
function storeInputs(inputIDs) {
  inputIDs.forEach(function(id) {
    var input = document.getElementById(id);
    sessionStorage.setItem(id, input.value);
  });
}

//restores user inputs
function restoreInputs(inputIDs) {
  inputIDs.forEach(function(id) {
    var input = document.getElementById(id);
    if (input) {
      input.value = sessionStorage.getItem(id);
    }
  });
}

//When button is clicked, store inputs
function handleButtonClick() {
  storeInputs([
    "taxInterest", "dividends", "taxIRA", "taxPension", "taxSS"
  ]);
}

//When page is reloaded, restore inputs
document.addEventListener("DOMContentLoaded", function() {
  restoreInputs([
    "taxInterest", "dividends", "taxIRA", "taxPension", "taxSS"
  ]);

  var nextButton = document.getElementById("nextButton");
  if (nextButton) {
    nextButton.addEventListener("click", handleButtonClick);
  }
});