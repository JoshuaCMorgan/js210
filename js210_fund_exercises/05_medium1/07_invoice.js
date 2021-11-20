/*
The invoiceTotal function in the code below computes the total amount for an
invoice containing four "line items". How can you refactor the function so that it
will work with invoices containing any number of line items?
*/

function invoiceTotal() {
  return amount1 + amount2 + amount3 + amount4;
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?

// solutions
/*
function invoiceTotal(...amounts) {
  return amounts.reduce((sum, amt) => sum + amt, 0);
}

function invoiceTotal(...args) {
  let total = 0;

  for (let i = 0; i < args.length; i += 1) {
    total += args[i];
  }

  return total;
}
*/