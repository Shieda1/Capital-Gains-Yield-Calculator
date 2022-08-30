// https://www.omnicalculator.com/finance/capital-gains-yield

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const capitalgainsyieldRadio = document.getElementById('capitalgainsyieldRadio');
const boughtpriceRadio = document.getElementById('boughtpriceRadio');
const currentpriceRadio = document.getElementById('currentpriceRadio');

let capitalgainsyield;
let boughtprice = v1;
let currentprice = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

capitalgainsyieldRadio.addEventListener('click', function() {
  variable1.textContent = 'Bought price';
  variable2.textContent = 'Current price';
  boughtprice = v1;
  currentprice = v2;
  result.textContent = '';
});

boughtpriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Capital gains yield';
  variable2.textContent = 'Current price';
  capitalgainsyield = v1;
  currentprice = v2;
  result.textContent = '';
});

currentpriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Capital gains yield';
  variable2.textContent = 'Bought price';
  capitalgainsyield = v1;
  boughtprice = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(capitalgainsyieldRadio.checked)
    result.textContent = `Capital gains yield = ${computecapitalgainsyield().toFixed(2)}`;

  else if(boughtpriceRadio.checked)
    result.textContent = `Bought price = ${computeboughtprice().toFixed(2)}`;

  else if(currentpriceRadio.checked)
    result.textContent = `Current price = ${computecurrentprice().toFixed(2)}`;
})

// calculation

function computecapitalgainsyield() {
  return ((Number(currentprice.value) - Number(boughtprice.value)) / Number(boughtprice.value)) * 100;
}

function computeboughtprice() {
  return Number(capitalgainsyield.value) / Number(currentprice.value);
}

function computecurrentprice() {
  return ((Number(capitalgainsyield.value) / 100) * Number(boughtprice.value)) + Number(boughtprice.value);
}