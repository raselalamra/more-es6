// const numbers = [4, 6, 8, 10];
// const output = [];
// for(const number of numbers){
//     const result = number * 2;
//     output.push(result);
// };
// console.log(output);

const numbers = [8, 12, 15, 25, 30];
const output = [];

// function doubleOld (number){
//     return number * 2
// }

const doubleIt = (number) => number * 2

for(const number of numbers){
    const result = doubleIt(number);
    output.push(result);
}
// console.log(output);

// const output2 = numbers.map(doubleIt)
// const output2 = numbers.map(number => number *2)
const output2 = numbers.map(x => x * 2)
// console.log(output2)

const squers = numbers.map(x => x * x)
console.log(squers);