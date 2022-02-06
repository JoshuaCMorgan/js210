function staggeredCase(string) {
  let needUpper = true;
  
  let result = string.split('').map(char => {
    if (/[0-9]/.test(char)) {
      return char;
    } 

    if (needUpper) {
      needUpper = !needUpper;
      return char.toUpperCase();
    } else {
      needUpper = !needUpper;
      return char.toLowerCase();
    }
  });

  console.log(result.join(''))
}


staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"
