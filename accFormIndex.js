function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


function numberToWords(number) {

  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  if (number === 0) return 'zero';
  if (number < 0) return 'minus ' + numberToWords(-number);
  
  let words = '';
  
  if (number >= 1000000) {
      words += numberToWords(Math.floor(number / 1000000)) + ' million ';
      number %= 1000000;
  }
  
  if (number >= 1000) {
      words += numberToWords(Math.floor(number / 1000)) + ' thousand ';
      number %= 1000;
  }
  
  if (number >= 100) {
      words += numberToWords(Math.floor(number / 100)) + ' hundred ';
      number %= 100;
  }
  
  if (number >= 20) {
      words += tens[Math.floor(number / 10)] + ' ';
      number %= 10;
  }
  
  if (number >= 10) {
      words += teens[number - 10] + ' ';
      number = 0;
  }
  
  if (number > 0) {
      words += ones[number] + ' ';
  }
  
  return words.trim();
}


document.getElementById('initialDeposit').addEventListener('input', function() {
    var number = parseInt(this.value);
    document.getElementById('amountOutput').innerHTML = numberToWords(number);
});

// Get the radio buttons
var yesRadioButton = document.getElementById('disability-yes');
var noRadioButton = document.getElementById('disability-no');

// Get the specify disability section
var specifyDisabilitySection = document.getElementById('disability-details');

// Add event listener to the radio buttons
yesRadioButton.addEventListener('change', function() {
    if (yesRadioButton.checked) {
        specifyDisabilitySection.style.display = 'block';
    } else {
        specifyDisabilitySection.style.display = 'none';
    }
});

noRadioButton.addEventListener('change', function() {
    if (noRadioButton.checked) {
        specifyDisabilitySection.style.display = 'none';
    }
});


// Get the checkbox and address fields
const sameAsPermanentCheckbox = document.getElementById('sameAsPermanent');
const pAddressLine1 = document.getElementById('pAddressLine1');
const pAddressLine2 = document.getElementById('pAddressLine2');
const pCity = document.getElementById('pCity');
const pDistrict = document.getElementById('pDistrict');
const pState = document.getElementById('pState');
const pCountry = document.getElementById('pCountry');
const pPincode = document.getElementById('pPincode');

const cAddressLine1 = document.getElementById('cAddressLine1');
const cAddressLine2 = document.getElementById('cAddressLine2');
const cCity = document.getElementById('cCity');
const cDistrict = document.getElementById('cDistrict');
const cState = document.getElementById('cState');
const cCountry = document.getElementById('cCountry');
const cPincode = document.getElementById('cPincode');

// Add event listener to checkbox
sameAsPermanentCheckbox.addEventListener('change', function() {
    if (sameAsPermanentCheckbox.checked) {
        // Copy values from permanent address to present address
        cAddressLine1.value = pAddressLine1.value;
        cAddressLine2.value = pAddressLine2.value;
        cCity.value = pCity.value;
        cDistrict.value = pDistrict.value;
        cState.value = pState.value;
        cCountry.value = pCountry.value;
        cPincode.value = pPincode.value;
    } else {
        // Clear present address fields
        cAddressLine1.value = '';
        cAddressLine2.value = '';
        cCity.value = '';
        cDistrict.value = '';
        cState.value = '';
        cCountry.value = '';
        cPincode.value = '';
    }
});


const branchNameInput = document.getElementById('branchName');
const branchCodeInput = document.getElementById('branchCode');
const customerIdInput = document.getElementById('customerId');

// Function to validate inputs
function validateInputs() {
    let isValid = true;

    // Check if branch name is empty
    if (branchNameInput.value.trim() === '') {
        isValid = false;
        branchNameInput.classList.add('error');
    } else {
        branchNameInput.classList.remove('error');
    }

    // Check if branch code is empty
    if (branchCodeInput.value.trim() === '') {
        isValid = false;
        branchCodeInput.classList.add('error');
    } else {
        branchCodeInput.classList.remove('error');
    }

    // Check if customer ID is empty
    if (customerIdInput.value.trim() === '') {
        isValid = false;
        customerIdInput.classList.add('error');
    } else {
        customerIdInput.classList.remove('error');
    }

    return isValid;
}

// Add event listener to inputs for validation on input change
branchNameInput.addEventListener('input', validateInputs);
branchCodeInput.addEventListener('input', validateInputs);
customerIdInput.addEventListener('input', validateInputs);