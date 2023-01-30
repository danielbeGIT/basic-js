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
 * sort() used to sort array alpha or number wise
 * can also reverse sort
 * 
 */


/*
// names
const names = ["Johan", "Fredrik", "Peter", "Alicia", "Maja", "Elliot"];
console.log("Names in chaos:", names);

// sort array alphabetically
names.sort();
console.log("Names in proper order:", names);

// reverse order
names.reverse();
console.log("Names in reverse order:", names);
*/

// numbers
const numbers = [47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 7, 5, 33, 52];
console.log("Numbers in chaos:", numbers)

// sort numbers (only the first number)
// numbers turn into strings and then sorted
numbers.sort();
console.log("Numbers in proper? order:", numbers);

// sort number numerically
/*
numbers.sort( (a, b) => {
    // shorthand
    return (a - b);
    
    // if a is less than b (i.e a should be sorted BEFORE b)
    if (a < b) {
        return -1;
    }

    // if a is greatar than b (i.e a should be sorted AFTER b)
    if (a > b) {
        return 1;
    }

    // a must be equal to b
    return 0;
});
*/

// shorter number numerically sorter
numbers.sort( (a, b) => (a - b) );
console.log("Numbers in proper order:", numbers);


const students = [
    {
        name: "Johan",
        points: 1337,
    },
    {
        name: "Peter",
        points: 3,
    },
    {
        name: "Alicia",
        points: 42,
    },
    {
        name: "Elliot",
        points: 88,
    },
    {
        name: "Maja",
        points: 35,
    },
];

students.sort( (a, b) => {
    console.log(a, b);
    return (a.points - b.points);

    // reversed sorted number
    // return (b.points - a.points);

    if (a.points < b.points) {
        return -1;
    }

    if (a.points > b.points) {
        return 1;
    }

    return 0;

    // to sort name alphabetically
    // capital letters comes before small letters and sorted seperately
    // to sort name alphabetically despite capital letters or not
    // const name1 = a.name.toUpperCase();
    // const name2 = b.name.toUpperCase();
    if (a.name < b.name) {
        return -1;
    }

    if (a.name > b.name) {
        return 1;
    }

    return 0;
});

console.log("Sorted students:", students)