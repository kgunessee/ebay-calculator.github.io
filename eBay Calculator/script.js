

const priceInput = document.querySelector(".costPrice");
const vatInput = document.querySelector(".vat");
const ebayFee = document.querySelector(".ebay");
const btn = document.querySelectorAll(".btn");
const courier = document.querySelector(".courier");
const textInput = document.querySelectorAll("input");
const ebayPromotion = document.querySelector(".ebayPromotion");
const courierType = document.querySelector(".courier-type");
const profitBtn = document.querySelectorAll(".profit-btn");
const profitInput = document.querySelector(".profit-input");
const totalPriceCost = document.querySelector(".total-price-cost");
const themeButton = document.querySelector(".theme-button");
const themeToggle = document.querySelector(".theme-toggle");
const body = document.querySelector("body");
const table = document.querySelectorAll("td, tr, table, th");
const calculateButton = document.querySelector(".calculate-button");
const icons = document.querySelector(".icons");

// DARK MODE

function darkMode(){
    themeToggle.classList.toggle("theme-toggle-active");
    body.classList.toggle("light-mode");
    calculateButton.classList.toggle("light-mode");
    totalPriceCost.classList.toggle("light-mode");
    icons.classList.toggle("light-mode");

    table.forEach(tables => {
        tables.classList.toggle("light-mode");
    })

    textInput.forEach(input => {
        input.classList.toggle("light-mode");
    })
}

themeButton.addEventListener("click", darkMode);

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
  darkMode;
} 
  
      

function ebayValue(){
ebayPromotion.value = 0;
}

// COURIER PRICES
  
function evriPack48(){
courier.value = 2.82;
courierType.textContent = "Evri 48 Small Package";
}

function evriPar48(){
    courier.value = 3.02;
    courierType.textContent = "Evri 48 Parcel";
}

function evriPack24(){
    courier.value = 3.18;
    courierType.textContent = "Evri 24 Small Package";
}

function evriPar24(){
    courier.value = 3.60;
    courierType.textContent = "Evri 24 Parcel";
}

function rm48Ll1(){
    courier.value = 0.99;
    courierType.textContent = "Royal Mail 48 (0-100g)";
}

function rm48Ll2(){
    courier.value = 1.36;
    courierType.textContent = "Royal Mail 48 (101-250g)";
}

function rm48Ll3(){
    courier.value = 1.56;
    courierType.textContent = "Royal Mail 48 (251-500g)";
}

function rm48Ll4(){
    courier.value = 2.06;
    courierType.textContent = "Royal Mail 48 (501-750g)";
}

function rm24Ll1(){
    courier.value = 1.25;
    courierType.textContent = "Royal Mail 24 (0-100g)";
}

function rm24Ll2(){
    courier.value = 1.77;
    courierType.textContent = "Royal Mail 24 (101-250g)";
}

function rm24Ll3(){
    courier.value = 1.92;
    courierType.textContent = "Royal Mail 24 (251-500g)";
}

function rm24Ll4(){
    courier.value = 2.55;
    courierType.textContent = "Royal Mail 24 (501-750g)";
}

function rmT48(){
    courier.value = 4.40;
    courierType.textContent = "Royal Mail Tracked 48";
}

function PF24(){
    courier.value = 5.50;
    courierType.textContent = "Parcelforce 24";
}

function DPD(){
    courier.value = 5.99;
    courierType.textContent = "DPD Next Day";
}



// PROFIT MARGIN
function profit0(){
    profitInput.value = 0;  
}

function profit10(){
    profitInput.value = 10; 
}

function profit15(){
    profitInput.value = 15;  
}

function profit20(){
    profitInput.value = 20;
}




function calc(){

    // CALCULATIONS

   const totalPrice = document.querySelector("h3").innerHTML = `Total Price = £${((priceInput.valueAsNumber * vatInput.valueAsNumber) * (ebayFee.valueAsNumber / 100 + 1) + courier.valueAsNumber).toFixed(2)}`;

   const totalPriceEbayAndProfit =  document.querySelector("h3").innerHTML = `Total Price = £${((priceInput.valueAsNumber * vatInput.valueAsNumber) * (ebayPromotion.valueAsNumber / 100 + 1) * (ebayFee.valueAsNumber / 100 + 1) * (profitInput.valueAsNumber / 100 +1) + courier.valueAsNumber).toFixed(2)}`;
  
   if(ebayPromotion.value == ""){
    document.querySelector("h3").innerHTML = totalPrice;
    }

    else{
        document.querySelector("h3").innerHTML = totalPriceEbayAndProfit;
    }

    // ERROR MESSAGES WHEN BOXES ARE NOT POPULATED

    if (isNaN(ebayPromotion.valueAsNumber) == true){
        ebayPromotion.style.border = " 2px solid red";
        document.querySelector(".em-ep").style.display = "block";
    }

    else {
        ebayPromotion.style.border = "none";
        document.querySelector(".em-ep").style.display = "none";
    }

    if (isNaN(profitInput.valueAsNumber) == true){
        profitInput.style.border = " 2px solid red";
        document.querySelector(".em-pm").style.display = "block";
    }

    else {
        profitInput.style.border = "none";
        document.querySelector(".em-pm").style.display = "none";

    }

}

// ENTER KEY TO TRIGGER CALCULATION
textInput.forEach((text) =>{

text.addEventListener("keyup", function(e) {
  // If the user presses the "Enter" key on the keyboard
  if (e.keyCode === 13) {
    document.querySelector(".calculate").click();
    document.querySelector(".courier").click();
  }
});
});