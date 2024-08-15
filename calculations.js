
stateAbbreviations = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];


stateTaxes = [
  .035, 0, .025, .023, .022, .061, .055, .033, .0738, 0, .0338, .062,
  .058, .0495, .0315, .057, .045, .045, .0275, .064, .0338, .07, .0405,
  .07, .025, .0245, .0338, 0, 0, .063, .035, .0475, .0175, .0195, .025,
  .07, .0307, .048, .032, 0, 0, 0, .0465, 6, .0345, .0385, 0, .04, .05, 0
];




function getStateTax(st1, inc1) {
  let index = -1;
  let stateValue = st1.value.toUpperCase();


  for (let i = 0; i < stateAbbreviations.length; i++) {
    if (stateAbbreviations[i] === stateValue) {
      index = i;
      break;
    }
  }


  console.log('Index:', index);
  console.log('State Tax Rate:', stateTaxes[index]);


  if (index === -1 || stateTaxes[index] === 0) {
    return parseFloat(inc1.value); // Assuming inc1 is an HTML input element
  } else {
    finalTot = parseFloat(inc1.value) - (parseFloat(inc1.value) * stateTaxes[index]);
    console.log('Calculated Income:', finalTot);
    return finalTot;
  }
}

window.onload = function () {
  const st1 = document.getElementById('state');
  const inc1 = document.getElementById('gross_income');
  const but1 = document.getElementById('subBut');
  const net = document.getElementById('net_income');


  function fun1() {
    console.log('State:', st1.value);
    console.log('Gross Income:', inc1.value);
    net.innerHTML = getStateTax(st1, inc1);
  }
  if (but1) {
    but1.addEventListener('click', fun1);
  } else {
    console.error('Button element not found.');
  }
}
