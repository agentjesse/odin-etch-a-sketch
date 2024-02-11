//global state
const gridSideSquares = 2;
let totalSquares = Math.pow( gridSideSquares, 2 );

// reference nodes
const container = document.querySelector('.container');

//create divs in memory
while (totalSquares) {
  const squareDiv = document.createElement('div');
  //classList property returns a DOMTokenList collection for manipulating element's classes with methods
  squareDiv.classList.add('square');
  container.append(squareDiv);
  totalSquares--;
}
