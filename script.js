//global state
const gridSideSquares = 6;
let totalSquares = Math.pow( gridSideSquares, 2 );

// reference nodes
const container = document.querySelector('.container');

//create divs in memory
while (totalSquares) {
  const squareDiv = document.createElement('div');
  //set individual inline styles without overwriting via CSSStyleDeclaration object
  //Number's toFixed() rounds to an amount of decimals. must be careful if it rounds up as grid may break.
  squareDiv.style.flexBasis = `${ (1/gridSideSquares*100).toFixed(3) }%`;
  //classList property returns a DOMTokenList collection for manipulating element's classes with methods
  squareDiv.classList.add('square');
  container.append(squareDiv);
  totalSquares--;
}


