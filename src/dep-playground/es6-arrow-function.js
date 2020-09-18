// const square = function(x){
//     return x * x;
// };

// console.log(square(8));

// const squareArrow = (x) =>{
//     return x * x;
// }

// const squareArrow1 = x => x * x;
// console.log(squareArrow1(2));

//Challenge - Use arrow functions
//getFirstName('Mike Smith') -> "Mike"
//Create a regular arrow function
//Create a second arrow using the shorthand syntax
const getFirstName = (name) => {
    return name.split(' ')[0];
};

console.log(getFirstName('Aaron Graham'));

const getFirstName1 = name => name.split(' ')[0];

console.log(getFirstName1('Mike Smith'));


