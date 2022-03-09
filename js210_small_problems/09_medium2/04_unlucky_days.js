/*
-- Process: 
  - Input: integer representing calendar year
    - 2016, 2017, 1753
  - Output: integer
    - count of dates with 13th falling on a Friday. 
  - Model the problem:
  - Rules
    - evaluate all months of a given year
      - jan, feb, march, april...
    - evaluate only the date of 13 of a given month
      - jan 13, feb 13
    - 13th must have day of Friday.
      - friday 13 january
  

-- Examples/Test Cases: (generic/edge)

-- Data structure:

-- Algorithm:
  - create counter and set to 0
  - iterate through each month with supplied year and date
    create string with current month and year, "January 13, 2016"
    get the day
    If day is equal to 5 (Friday) then increase count by 1

  - return count
-- Code:
*/


  function fridayThe13ths(year) {
    let friday13ths = 0;
  
    for (let month = 0; month <= 11; month += 1) {
      let date = new Date(year, month, 13);
      if (date.getDay() === 5) friday13ths += 1;
    }
  
    return friday13ths;
  }

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2