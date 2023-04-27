var bill = 145;
var calculateTip = function (bill) { return bill * 0.2; };
var getBillTotal = function (bill) { return Math.round((bill + calculateTip(bill)) * 100) / 100; };
console.log(getBillTotal(bill));
