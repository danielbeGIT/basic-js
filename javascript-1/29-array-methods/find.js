/**
 * Array Methods
 * 
 * 
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce()
 * 
 * 
 * find() searching for a certain item
 * 
 */

// numbers
const numbers = [5, 21, 13, 8, 28, 50, 24, 18, 47, 28, 18, 15, 11, 43, 7, 5, 33, 52];

/*
// find first number >= 25
let firstLargeNum;
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] >= 25) {
        firstLargeNum = numbers[i];
        break;
    }
};
*/

// find first number >= 25 but with find()
// const firstLargeNum = numbers.find(num => {
//     // short but same function
//     return (num >= 25)

//     if (num >= 25) {
//         return true;
//     } else {
//         return false;
//     }
// });


// extra short find()
const firstLargeNum = numbers.find(num => num >= 25)

console.log("First number >= 25", firstLargeNum);


const products = [
    {
        sku: "CORR-BWL",
        name: "Corrosive bowl",
        in_stock: 321,
        price: 0.99,
    },
    {
        sku: "CTN-SPCE",
        name: "Cotton spice rack",
        in_stock: 2,
        price: 149.99,
    },
    {
        sku: "GOOD-COOKIES",
        name: "Inside-out Oreo cookies",
        in_stock: 18,
        price: 2.49,
    },
    {
        sku: "BACK-BREAKER",
        name: "The uncomfortable broom",
        in_stock: 1,
        price: 28.65,
    },
];

const nomNomProduct = products.find(product => product.sku === "GOOD-COOKIES")
if (nomNomProduct) {
    console.log("YAY FOUND COOKIES!");
} else {
    console.log("SAD COOKIE MONSTER");
}