const TAX_RATE = 0.10;
const PHONE_PRICE = 19.99;
const ACCESORY_PRICE = 8.99;
const SPENDING_THRESHOLD = 30;

var bankBalance = 149;
var amount = 0;

var formatAmount = function(amt) {
    amt = amt.toFixed(2);
    amt = String(amt);
    amt = "$" + amt;
    alert("Your total purchase price is " + amt)
}

var calculateTax = function(amt) {
    amt = amt + (amt * TAX_RATE);
    retrun amt;
}



for (var 1=0; i < bankBalance/PHONE_PRICE; i++) {
    amount += PHONE_PRICE;
    if (amount < bankBalance) {
    amount = amount + ACCESORY_PRICE;
    } else {
    alert("You do not have enough money for this purchase")
    }
}


calculateTax(amount);
formatAmount(amount);





