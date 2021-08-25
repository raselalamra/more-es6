
const friends = ['tom', 'jery', 'rasel', 'alam', 'jubayed']
const friednName = friends.map(friend => friend.length)
console.log(friednName)


const products = [
    {name: 'asus laptop', price: '55k', color: 'blue', Ram: '8GB',},
    {name: 'tecno phone', price: 8000, color: 'black', Ram: '1GB',},
    {name: 'laptop bag', price: 500, color: 'black'},
    {name: 'watch', price: 250, color: 'black'},
    {name: 'gamming pc', price: '45k', color: 'black', Ram: '8GB',},

]

const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
console.log(productPrice);

// by forEach
const allProducts = products.forEach(product => console.log(product))



/*
// practice
const friends = ['panda', 'tom', 'jery', 'muto', 'patlu', 'krish', 'hanni banni'];
const friednName = friends.map(friend => friend.length);
// console.log(friednName);

const arryNumber = ['kulumoddi', 'chulomoodi', 'jabbar', 'kasem']
const numbersOfArray = arryNumber.map(arryFriedn => arryFriedn.length)
// console.log(numbersOfArray)


const products = [
    {name: 'techno phone', price: 8500, color: 'black', ram: '1GB'},
    {name: 'realmi phone', price: 18000, color: 'silbar', ram: '6GB'},
    {name: 'asus laptop', price: '55k', color: 'blue', ram: '8GB'},
    {name: 'watch', price: 300, color: 'black'},
    {name: 'glas', price: 3, color: 'white'},
    {name: 'redmi phone', price: 18500, color: 'black', ram: '6GB'}

]

const productName = products.map(product => product.name)
const productPrice = products.map(product => product.price)
const productColor = products.map(product => product.color)
console.log(productColor)
// console.log(productPrice)
// console.log(productName)
*/