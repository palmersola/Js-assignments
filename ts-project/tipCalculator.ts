let bill: number = 145;

const calculateTip = (bill:number) => bill * 0.2;


const getBillTotal = (bill: number) => Math.round((bill + calculateTip(bill)) * 100) / 100;


console.log(getBillTotal(bill));
