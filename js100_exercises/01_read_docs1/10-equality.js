// In your JavaScript console, execute the following two lines of code to 
// check whether their return values differ and if so, how. Take a look at
// the MDN documentation on equality comparisons to read about how == and 
// === differ.

'8' == 8;
// this is not strict; meaning, JS will convert and compare operands
// with this operator, JS does more than try to convert.  It
// goes through a list of actions, one of which is converting for 
// comparison if needed. 
'8' === 8;
// strict equality operator will not convert is values are different types.