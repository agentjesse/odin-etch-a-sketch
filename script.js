//global state & node references
const startSideSquares = 16;
const container = document.querySelector('.container');
const newGridBtn = document.querySelector('.gridPrompt');
let colorChangesArr = [];

//random rgb color func
const randomRGB = ()=> `rgb(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`;
//darken rgb color of square element 10% func
const darken = elem=> {
  //store element's color values into an array as numbers
  let colors = elem.style.backgroundColor.match(/\d+/g).map( level=> +level);
  // Reduce color value about 10% of 255 levels and limit to 0
  for (let i=0; i<colors.length; i++) {
    colors[i] -= 25;
    if (colors[i]<0) colors[i] = 0 ;
  }
  //build color string and use it
  elem.style.backgroundColor = `rgb(` + colors.join(`, `) + `)`;
}


//fn to create and append square divs. use default for first run
const generateSquares = (sideSquares = startSideSquares)=> {
  const totalSquares = Math.pow( sideSquares, 2 );
  for (let i = 0 ; i < totalSquares ; i++){
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
  let elementIndex = e.target.dataset.index; //current elem index to reference
  if (e.target.className === 'square'){
    //random bg color change when mouse enters untouched square, which should be 0 in colorChangesArr
    if ( !colorChangesArr[elementIndex] ){
      e.target.style.backgroundColor = randomRGB();
    } else if ( colorChangesArr[elementIndex]<11 ){ //max 10 darkens of 10%
      darken(e.target);
    }
    colorChangesArr[elementIndex] += 1;
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
    generateSquares(newGridSize);
  }
  // else { console.log(`invalid entry: ${newGridSize}`); }
});