const numbers = [1, 5, 8, 6, 41, 55, 33, 69, 78, 88]
const bigNumbers = numbers.filter(number => number > 20)
const smallNumbers = numbers.filter(number => number <20)
// console.log(bigNumbers)
// console.log(smallNumbers)


const products = [
    {name: 'techno phone', price: 8500, color: 'black', ram: '1GB'},
    {name: 'realmi phone', price: 18000, color: 'silbar', ram: '6GB'},
    {name: 'asus laptop', price: '55k', color: 'blue', ram: '8GB'},
    {name: 'watch', price: 300, color: 'black'},
    {name: 'glas', price: 3, color: 'white'},
    {name: 'redmi phone', price: 18500, color: 'black', ram: '6GB'}

]

const productName = products.filter(product => product.name);
// console.log(productName)
const productColor = products.filter(product => product.color == 'black');
// console.log(productColor)
const productPrice = products.filter(product => product.price > 300);
// console.log(productPrice)

const color = products.find(product => product.color == 'black');
console.log(color);
const whiteItem = products.find(product => product.color == 'white');
console.log(whiteItem);


/*
// practice
const numbers = [1, 2, 4, 6, 7, 9, 11, 44, 55, 78, 99, 69, 75]
const bigNumbers = numbers.filter(number => number > 20)
// console.log(bigNumbers)
const smallNumbers = numbers.filter(number => number < 20)
// console.log(smallNumbers)


const products = [
    {name: 'techno phone', price: 8500, color: 'black', ram: '1GB'},
    {name: 'realmi phone', price: 18000, color: 'silbar', ram: '6GB'},
    {name: 'asus laptop', price: '55k', color: 'blue', ram: '8GB'},
    {name: 'watch', price: 300, color: 'black'},
    {name: 'glas', price: 3, color: 'white'},
    {name: 'redmi phone', price: 18500, color: 'black', ram: '6GB'}

]

const productName = products.filter(product => product.name)
// console.log(productName)
const blacks = products.filter(product => product.color == 'black')
// console.log(blacks);

// find
const blackItem = products.find(product => product.color == 'black');
console.log(blackItem)
*/