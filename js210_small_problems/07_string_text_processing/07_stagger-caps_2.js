function staggeredCase(string) {
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    if (index % 2 === 1 || index === 1) {
      result += string[index].toLowerCase();
    } else {
      result += string[index].toUpperCase();
    }
  }
  console.log(result);
}


staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
