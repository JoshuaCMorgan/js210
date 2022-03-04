/*
-- Process: 
  - Input: numeric number
    -indicates the grid size n rows  and n columns
    - odd integers only
    - smallest odd number is 7
  - Output: string
      - display 8-pointed star in n X n grid
  - Model the problem:
  - Rules
    - grid n  x n
      - total rows of grid size is double numeric value
        - 7 grid size has 14 rows
      - total colums of grid size is equal to numeric value
        - 7 grid size has 7 columns
    - 8 pointed star
      - three star points on top row, three star poits on bottom row
      - two star points on on sides of middle row.
    - placement of stars in relationship to rows
      - stars are placed every other row
      - each row to middle contains 3 
        - start in outer grid
        - outer stars move in one until 3 together
      - stars are always centered 
        - with middle space taken out.
    - Example of 7 grid
      star space space star space space star
      space star space star space star space
      space space star star star space space
    - spacing in relationship to grid size
      - 7 grid
        - 2, 1, 0, 0 1 2
      - 9 grid
        - 3, 2, 1, 0
      - 11 grid
        - 4, 3, 2, 1 0
      - always ceiling (grid size / 2) - 1

-- Examples/Test Cases: (generic/edge)

-- Data structure:

-- Algorithm:
  - create number sequence for spacing for spacing
    [2, 1, 0, 0, 1, 2]
  - iterate through spacing sequence
    - create star line while sequence is greater/equal to zero
      - pad start with spacing
        n - 3 - spacing * 2
    - place middle star line


-- Code:
*/
function star(n) {
  spaceSize = Math.floor(n / 2) - 1;
  spaceNumSequence(spaceSize).forEach(spacing => {
    let padding = n - Math.floor(n / 2) - (spacing + 2);
    if (spacing === 'middle') {
      console.log("*".repeat(n));
    } else {
     console.log(" ".repeat(padding) + "*" +
      " ".repeat(spacing) + "*" + " ".repeat(spacing) + "*");
    }
  })

}
function spaceNumSequence(n) {
  const result = []
  let decrement = 1;

  for (let num = n; num <= n; num -= decrement) {
    if (num === -1) {
      result.push('middle')
      decrement = -1;
      num = 0;
    };
    result.push(num);
  };
  console.log(result)
  return result;
};

star(9);