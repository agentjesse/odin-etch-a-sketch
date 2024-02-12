//global state & node references
const startSideSquares = 4;
let totalSquares = Math.pow( startSideSquares, 2 );
const container = document.querySelector('.container');
const newGridBtn = document.querySelector('.gridPrompt');
let colorChangesArr = [];

//random rgb color function
const randomRGB = ()=> `rgb(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`;

//fn to create and append square divs. use default for first run
const generateSquares = (sideSquares = startSideSquares)=> {
  for (let i=1 ; i <= totalSquares ; i++){
    const squareDiv = document.createElement('div');
    //set individual inline styles without overwriting via CSSStyleDeclaration object
    //set flexbasis to a percentage with 3 decimal places without rounding up
    squareDiv.style.flexBasis = `${ Math.floor( 1 / sideSquares * 100000 ) / 1000 }%`;
    squareDiv.setAttribute('data-index',i);
    //classList property returns a DOMTokenList collection for manipulating element's classes with methods
    squareDiv.classList.add('square');
    container.append(squareDiv);
    colorChangesArr.push(0);
  }
};
generateSquares();

//event listener on parent container to catch bubbling mouseover events of children.
container.addEventListener('mouseover', e=> {
  e.stopPropagation();
  if (e.target.className === 'square'){
    //check which square based on node list
    console.log(e.target.dataset.index);
    
    //random bg color change when mouse enters
    e.target.style.backgroundColor = randomRGB();
  }
});

//event listener for button to remove and remake grid
newGridBtn.addEventListener('click', e=> {
  e.stopPropagation();
  const newGridSize = +prompt('Enter squares for the sides of the new grid: (max 100)',20);
  if ( newGridSize > 0 && newGridSize < 101 ){ //check input in range
    //remove all children of container, clear color change tracking array
    container.replaceChildren();
    colorChangesArr = [];
    //make new custom size grid
    totalSquares = Math.pow( newGridSize, 2 );
    generateSquares(newGridSize);
  }
  // else { console.log(`invalid entry: ${newGridSize}`); }
});