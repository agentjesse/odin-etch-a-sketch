//global state & node references
const startSideSquares = 8;
let totalSquares = Math.pow( startSideSquares, 2 );
const container = document.querySelector('.container');
const newGridBtn = document.querySelector('.gridPrompt');

//random rgb color function
const randomRGB = ()=> `rgb(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`;

//fn to create and append square divs. use default for start
const generateSquares = (sideSquares = startSideSquares)=> {
  // console.log(sideSquares);
  while (totalSquares) {
    const squareDiv = document.createElement('div');
    //set individual inline styles without overwriting via CSSStyleDeclaration object
    //set flexbasis to a percentage with 3 decimal places without rounding up
    squareDiv.style.flexBasis = `${ Math.floor( 1 / startSideSquares * 100000 ) / 1000 }%`;
    //classList property returns a DOMTokenList collection for manipulating element's classes with methods
    squareDiv.classList.add('square');
    container.append(squareDiv);
    totalSquares--;
  }
};
generateSquares();

//event listener on parent container to catch bubbling mouseover events of children. no padding on parent, so itwill not affect it.
container.addEventListener('mouseover', e=> {
  e.stopPropagation();
  //random bg color change when mouse enters
  e.target.style.backgroundColor = randomRGB();
});

//event listener for button to remove and remake grid
newGridBtn.addEventListener('click', e=>{
  e.stopPropagation();
  totalSquares= Math.pow( 2, 2 );
  generateSquares(2);
});