'use strict';
let productArry = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

const imageSection = document.getElementById( 'imageSection' );
const leftImage = document.getElementById( 'leftImage' );
const centerImage = document.getElementById( 'centerImage' );
const rightImage = document.getElementById( 'rightImage' );
//console.log( productArry,imagesection,leftimage,centerimage,rightimage );
function randomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

let leftProductIndex = 0;
let centerProuductIndex = 0;
let rightProductIndex = 0;
const clickCounter = 26;

Product.all = [];
function Product( name ) {
  this.name = name;
  this.image = `./img/${name}.jpg`;
  this.clicks = 0;
  this.show = 0;

  Product.all.push( this );
}
console.log( Product.all );

Product.counter = 0;

for ( let i = 0; i < productArry.length; i++ ) {
  new Product( productArry[i] );
}

function renderNewProduct() {
  let leftIndex = randomNumber( 0, Product.all.length - 1 );
  leftImage.src = Product.all[leftIndex].image;
  leftImage.alt = Product.all[leftIndex].name;
  leftProductIndex = leftIndex;

  let rightIndex;
  let centerIndex;
  do {
    centerIndex = randomNumber( 0, Product.all.length - 1 );
    rightIndex = randomNumber( 0, Product.all.length - 1 );
  } while ( ( leftIndex === rightIndex ) || ( leftIndex === centerIndex ) || ( centerIndex === rightIndex ) );


  centerImage.src = Product.all[centerIndex].image;
  centerImage.alt = Product.all[centerIndex].name;
  centerProuductIndex = centerIndex;

  rightImage.src = Product.all[rightIndex].image;
  rightImage.alt = Product.all[rightIndex].name;
  rightProductIndex = rightIndex;

  Product.all[leftIndex].show++;
  Product.all[centerIndex].show++;
  Product.all[rightIndex].show++;



}

function handelClick( event ) {
  if ( Product.counter < clickCounter ) {
    const clickedElement = event.target;
    if ( clickedElement.id === 'leftImage' || clickedElement.id === 'centerImage' || clickedElement.id === 'rightImage' ) {
      if ( clickedElement.id === 'leftImage' ) {
        Product.all[leftProductIndex].clicks++;
      }
      if ( clickedElement.id === 'centerImage' ) {
        Product.all[centerProuductIndex].clicks++;
      }
      if ( clickedElement.id === 'rightImage' ) {
        Product.all[rightProductIndex].clicks++;
      }
      Product.counter++;
      renderNewProduct();
      console.log( Product.all );
    }
  }
}

imageSection.addEventListener( 'click', handelClick );

console.log( Product.all );
renderNewProduct();
if ( clickCounter= 26){
  let button1 = document.getElementById( 'bitton' );
  const list = document.getElementById( 'list' );
  if ( window.onclick ) {
  
    const buttonElement = document.createAttribute( 'button' );
    button1.appendChild( buttonElement );
    button1 = 'view result';
    if ( button1.onclick ) {
      const ulElement = document.createAttribute( 'ul' );
      list.appendChild( ulElement );
      for ( let i = 0; i < clickCounter; i++ ) {
        let liElement = document.createAttribute( 'li' );
        ulElement.appendChild( liElement );
        liElement = `volid ${Product.clicks}`;
      }
  
    }
  }
  
  window.onclick = alert( 'ahmad' );
}









