/*
-- Process: 
  - Input:  numeric number
    - 'n' is always odd
    - 'n' represents grid size n X n (3 X 3)
  - Output: 
  - Model the problem:
  - Rules
    - diamond grid is odd size equal size grid(up/down)
      - rows and columns will be equal size
      - if n = 3
        - width will always be 3
        - length will always be three
    - diamond shape within grid
      - starts are centered/odd number intervals up to and down from input
        3: 1 3 1
        5: 1 3 5 3 1
        7: 1 3 5 7 3 5 1
      - spacing on left and right
        - of equal porportion 
    - each line is size n
      - each string will be size n 
    - relationship between stars and spacing
      - total space
        - n - current star count
        - left/right side
          - have of total
    - space - star - space
      - 4 1 4
      - 3 3 3
      - 2 5 2
      - 1 7 1
      - 0 9 0
      - 1 7 1
      - 2 5 2
      - 3 3 3 
      - 4 1 4

    - spaces
      start with n / 2 celing ( 9 / 2) ceiling 4
    - stars
      1 add two up to 9 
      n - 2 


  

-- Examples/Test Cases: (generic/edge)

-- Data structure:
  - string concat spacing and star

-- Algorithm:

  - create elements
    star = '*'
    space = ' '

    middle = ceiling of n / 2 ( 9 / 2 => 4)
    build top 
      middle down to 0
      build line
        - space repeated middle times (4, 3, 2, 1)
        - star add 2

    build bottom
      1 up to middle
      build line
        - space repeated middle times
        - star slice (2)
  


-- Code:
*/

function createStarLine(spaces, stars) {
  return spaces + stars + spaces;
}

function diamond(gridSize) {
  let star = '*';
  let space = ' ';
  let middle = Math.floor(gridSize / 2);
  

  for (let num = middle; num >= 0; num -= 1) {
    let spaces = space.repeat(num);
    let stars = star.repeat(gridSize - (spaces.length * 2))
    console.log(createStarLine(spaces, stars));
  }

  for (let num = 1; num <= middle; num += 1) {
    let spaces = space.repeat(num);
    let stars = star.repeat(gridSize - (spaces.length * 2))
    console.log(createStarLine(spaces, stars));
  }
}

diamond(9);