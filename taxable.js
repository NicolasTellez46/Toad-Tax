
//Mod Nicolas Tellez 5/1/2024 (Changed getElements to sessionStorage)
//Mod Nicolas Tellez 5/7/2024 (Merged scripts and made sure all function work as intended and return a value)
function taxable_income() {
    // Retrieve inputs from sessionStorage
    var totalAmount = parseFloat(sessionStorage.getItem('totalAmount') || 0);
    var nrWage = parseFloat(sessionStorage.getItem('nrWage') || 0);
    var nrTips = parseFloat(sessionStorage.getItem('nrTips') || 0);
    var nrMedicare = parseFloat(sessionStorage.getItem('nrMedicare') || 0);
    var taxDepCare = parseFloat(sessionStorage.getItem('taxDepCare') || 0);
    var adoptBenefits = parseFloat(sessionStorage.getItem('adoptBenefits') || 0);
    var wages = parseFloat(sessionStorage.getItem('wages') || 0);
    var foreignEmpComp = parseFloat(sessionStorage.getItem('foreignEmpComp') || 0);
    var taxInterest = parseFloat(sessionStorage.getItem('taxInterest') || 0);
    var dividends = parseFloat(sessionStorage.getItem('dividends') || 0);
    var taxIRA = parseFloat(sessionStorage.getItem('taxIRA') || 0);
    var taxPension = parseFloat(sessionStorage.getItem('taxPension') || 0);
    var taxSS = parseFloat(sessionStorage.getItem('taxSS') || 0);
    var capGainLoss = parseFloat(sessionStorage.getItem('capGainLoss') || 0);
    var additionalInc = parseFloat(sessionStorage.getItem('additionalInc') || 0);
    var adjustments = parseFloat(sessionStorage.getItem('adjustments') || 0);
    var bIncomeDed = parseFloat(sessionStorage.getItem('bIncomeDed') || 0);

    // Get standard deduction based on filing status
    var standardDed = 0;
    var filingStatus = parseInt(sessionStorage.getItem('status'));
    if (filingStatus === 1) {
        standardDed = 13850;
    } else if (filingStatus === 2) {
        standardDed = 27700;
    } else {
        standardDed = 20800;
    }

    // Add and subtract to get taxable income
    var grossIncome = totalAmount + nrWage + nrTips + nrMedicare + taxDepCare + adoptBenefits + wages + foreignEmpComp + taxInterest + dividends + taxIRA + taxPension + taxSS + capGainLoss + additionalInc;
    var adjustedGrossIncome = grossIncome - adjustments;
    var taxableIncome = adjustedGrossIncome - bIncomeDed - standardDed;
    if (taxableIncome<0){
        taxableIncome = 0
    }
    // Output taxable income to screen
    // From Chat GPT 5/1/2024 (Formats output with $ sign)
    
    sessionStorage.setItem("grossIncome", grossIncome); // 
    sessionStorage.setItem("adjustedGrossIncome", adjustedGrossIncome)
    sessionStorage.setItem("taxableIncome", taxableIncome)
    sessionStorage.setItem("line33",taxableIncome)
}
// Function Created by Elex Weisman 4/18/2024
function total_tax() {
    // Defining variables
    var otherTax = parseFloat(document.getElementById('totalAmount').value);
    var schedule2line3 = parseFloat(document.getElementById('schedule2line3').value);
    var childTaxCredit = parseFloat(document.getElementById('childTaxCredit').value);
    var schedule3line8 = parseFloat(document.getElementById('schedule3line8').value);
    var schedule2line21 = parseFloat(document.getElementById('schedule2line21').value);

    // Add and Subtract to get Total Tax
    var line18 = otherTax + schedule2line3
    var line21 = childTaxCredit + schedule3line8
    var line22 = line18 - line21
    if (line22 <= 0){
        line22 = 0
    }

    // Total Tax
    var line24 = 0
    sessionStorage.setItem("line24", line24)
}

function payment(){
    /*
    //Collect tax info and set to variables
    var formW2 = parseFloat(document.getElementById('formW2').value);
    var form1099 = parseFloat(document.getElementById('form1099').value);
    var formOther = parseFloat(document.getElementById('formOther').value);
    var line26 = parseFloat(document.getElementById('line26').value);
    var earnedIncomeCredit = parseFloat(document.getElementById('earnedIncomeCredit').value);
    var childCredit = parseFloat(document.getElementById('childCredit').value);
    var opportunityCredit = parseFloat(document.getElementById('opportunityCredit').value);
    //var reserved = parseFloat(document.getElementById('reserved').value);
    
    var schedule3 = parseFloat(document.getElementById('schedule3').value);
    



    //Add all variables
    var sumOfForms = formW2+form1099+formOther
    var otherPayments = earnedIncomeCredit+childCredit+opportunityCredit+schedule3
    var line33 = sumOfForms+line26+otherPayments
    */
    //GET LINE 33 FOR REFUND AND OTHER FUNCTION


    //var line33 = sessionStorage.getElementById("taxableIncome")
    //sessionStorage.setItem("line33", line33)
}

function refund(){
    // Find amount you overpaid
    var line24 = sessionStorage.getItem("taxableIncome");
    var line33 = sessionStorage.getItem("line33");
    if (line33 > line24){
        var refund = line33-line24
    }
    else if (line24.isNaN()&&line33.isNAN()){
        var refund = 0
    }
    
    sessionStorage.setItem("amountRefunded", refund)
}

function amount_owed(){
    // Find amount owed in taxes for user
    var line24 = parseFloat(sessionStorage.getItem("taxableIncome"));
    var line33 = parseFloat(sessionStorage.getItem("line33"));

    if (line24.isNaN() && line33.isNAN()){
        var amountOwed = 0
    }
    else{
        var amountOwed = line24-line33
    }
    sessionStorage.setItem("amountOwed", amountOwed)

}



//NEW

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
      "taxDepCare", "adoptBenefits", "wages", "bIncomeDed"
    ]);
    taxable_income();
    total_tax();
    payment();
    refund();
    amount_owed();

  }
  
  // When page is reloaded, restore inputs
  document.addEventListener("DOMContentLoaded", function() {
    restoreInputs([
        "firstName", "lastName", "address", "apt",
        "city", "state", "ZIP", "status", "mainSSN",
        "spouseSSN", "totalAmount", "nrWage", "nrTips", "nrMedicare",
        "taxInterest", "dividends", "taxIRA", "taxPension", "taxSS",
        "additionalInc", "adjustments", "capGainLoss", "foreignEmpComp",
        "taxDepCare", "adoptBenefits", "wages", "bIncomeDed"
    ]);
  
    var nextButton = document.getElementById("nextButton");
    if (nextButton) {
        nextButton.addEventListener("click", handleButtonClick);
    }
  });