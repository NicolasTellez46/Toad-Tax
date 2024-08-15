// From Claud 4/17/24
//Mod Nicolas Tellez 5/1/2024 (Changed localStorage to sessionStorage)
//Mod Nicolas Tellez 5/2/2024 (Compressed all sessionStorages to a singular file)

// Define a single function to store user inputs
function storeInputs(inputIDs) {
  inputIDs.forEach(function(id) {
      var input = document.getElementById(id);
      sessionStorage.setItem(id, input.value);
  });
}

// Define a single function to restore user inputs
function restoreInputs(inputIDs) {
  inputIDs.forEach(function(id) {
      var input = document.getElementById(id);
      if (input) {
          input.value = sessionStorage.getItem(id);
      }
  });
}

// When button is clicked, store inputs
function handleButtonClick() {
  storeInputs([
    "firstName", "lastName", "address", "apt",
    "city", "state", "ZIP", "status", "mainSSN",
    "spouseSSN", "totalAmount", "nrWage", "nrTips", "nrMedicare",
    "taxInterest", "dividends", "taxIRA", "taxPension", "taxSS",
    "additionalInc", "adjustments", "capGainLoss", "foreignEmpComp",
    "taxDepCare", "adoptBenefits", "wages", "BIncomeDed"
  ]);
}

// When page is reloaded, restore inputs
document.addEventListener("DOMContentLoaded", function() {
  restoreInputs([
      "firstName", "lastName", "address", "apt",
      "city", "state", "ZIP", "status", "mainSSN",
      "spouseSSN", "totalAmount", "nrWage", "nrTips", "nrMedicare",
      "taxInterest", "dividends", "taxIRA", "taxPension", "taxSS",
      "additionalInc", "adjustments", "capGainLoss", "foreignEmpComp",
      "taxDepCare", "adoptBenefits", "wages", "BIncomeDed"
  ]);

  var nextButton = document.getElementById("nextButton");
  if (nextButton) {
      nextButton.addEventListener("click", handleButtonClick);
  }
});






