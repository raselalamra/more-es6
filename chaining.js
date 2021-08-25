
// declare variable based on the name of an object proparty
const myObject = { x: 2, y: 65, z: 55, a: 45, b: 78 }
const { x, b, z } = myObject
console.log( x, b ) 

const {color, id} = { color: 'red', mony: 500, id: 45, skey: 'bule' }
console.log(color, id)

const name = { name1: 'rasel', name2: 'alam', name3: 'jubayed', name4: 'programming' }
const { name1, name2, name3 } = name
console.log(name1, name2, name3)


// destructuring array
const [p, q] = [12, 22, 44, 88, 59]
console.log(p, q)

const [my, names] = ['Rasel', 'Alam']
console.log(my, names) 


const company = {
    name: 'gp', 
    ceo : { 
           name: 'rassel', 
           age: 19
          },
    web : { 
           work: 'website delvelopment', 
           employee: 22,
           framework: 'react', 
    tech: {
             frist: 'htnl',
             second: 'css',
             third: 'js'
          }
         }
 };

 console.log(company?.works?.tech?.work)



