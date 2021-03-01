'use strict';
let productArry = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

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
const clickCounter = 25;

Product.all = [];
function Product( name ,img ) {
  this.name = name;
  this.image = `./img/${img}`;
  this.clicks = 0;
  this.show = 0;

  Product.all.push( this );
}
console.log( Product.all );

Product.counter = 0;


for ( let i = 0; i < productArry.length; i++ ) {
  new Product( getName( productArry[i]) , productArry[i] );

}
function getName ( fileName ){

  return fileName.split( '.' ).slice( 0, -1 ).join( '.' );
}

function renderNewProduct() {
  document.getElementById( 'button1' ).style.visibility = 'hidden';
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

imageSection.addEventListener( 'click', handelClick );
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
  }else { invoker();

  }

}

function invoker (){
  document.getElementById( 'button1' ).style.visibility = 'visible';
}


console.log( Product.all );
renderNewProduct();

function result (){
  const resultElement = document.getElementById( 'list' );
  const ulElement = document.createElement( 'ul' );
  resultElement.appendChild( ulElement );

  for ( let i = 0 ;i < Product.all.length ;i++ ){
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `${Product.all[i].name} had ${Product.all[i].clicks} and was seen ${Product.all[i].show} times `;
  }



}



// document.getElementById( 'imageSection' ).removeEventListener( 'click', handelClick );









