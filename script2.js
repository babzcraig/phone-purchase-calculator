const TAX_RATE = 0.09;
const PHONE_PRICE = 99.99;
const SPENDING_THRESHOLD = 200;
const ACCESSORY_PRICE = 9.99;

var bankBalance = 409;
var amount = 0;

function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

while (amount < bankBalance) {
    amount += PHONE_PRICE;
    
    if (amount < SPENDING_THRESHOLD) {
        amount += ACCESSORY_PRICE;
    }
}

amount += amount + calculateTax(amount);

console.log(
    "Your purchase price is " + formatAmount(amount);
    );

if ( amount > bankBalance ) {
    console.log("You can't afford this purchase")
} else {
    
}