//global state
const gridSideSquares = 16;
let totalSquares = Math.pow( gridSideSquares, 2 );

// reference nodes
const container = document.querySelector('.container');

//create divs in memory
while (totalSquares) {
  const squareDiv = document.createElement('div');
  //set individual inline styles without overwriting via CSSStyleDeclaration object
  //set flexbasis to a percentage with 3 decimal places without rounding up
  squareDiv.style.flexBasis = `${ Math.floor( 1 / gridSideSquares * 100000 ) / 1000 }%`;
  //classList property returns a DOMTokenList collection for manipulating element's classes with methods
  squareDiv.classList.add('square');
  container.append(squareDiv);
  totalSquares--;
}


