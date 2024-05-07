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

