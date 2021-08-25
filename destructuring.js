const fish = {id: 123, name: 'hilsha', price: '9000', addres: 'barisal', phone: 0198575555}
const {price, id} = fish
// console.log(price, id)

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

    const { work, framework } = company.web;
    const { age } = company.ceo;
    const { third } = company.web.tech;
    console.log(work, framework, age, third)
