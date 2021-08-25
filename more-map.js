
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


