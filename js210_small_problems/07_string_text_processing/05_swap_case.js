function swapCase(string) {
  let result = '';

  string.split('').forEach(char => {
    if (!!char.match(/[a-z]/)) {
      result += char.toUpperCase();
    } else if (!!char.match(/[A-Z]/)) {
	result+= char.toLowerCase();
    } else {
        result += char;
    }
  });

 console.log(result);

}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
