/*
Read through the following code. Why will it log 'debugging'?
*/

function debugIt() {
  const status = 'debugging';
  function logger(status) {
    console.log(status);
  }

  logger();
}

debugIt();

/*
We do not have a parameter for the function logger.
Plus, scoping rules allow for inner variables to access outer variables.
*/