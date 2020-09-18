//arguments object - no longer bound with arrow function

// const add = function(a, b){
//     console.log(arguments);
//     return a + b;
// }
// const add = (a, b) => a + b;
// console.log(add(55,1));
//this keyword - no longer bound

const user = {
    name: 'Aaron',
    cities: ['phlly', 'ny', 'dublin'],
    printPlacesLived(){
        //previous work around for capturing 'this'
        //that = this
    
        //new array with transformed messages
        return this.cities.map((city) => this.name + ' has lived in ' + city);    
    }
};
// console.log(user.printPlacesLived());

//Challenge area
const multiplier = {
    //numbers - array of numbers
    numbers: [1,2,3],
    multipledBy: 2,
    multiply(num){
        return this.numbers.map(newNums => newNums * this.multipledBy);
    }
};

console.log(multiplier.multiply(2)); //[1,2,3] 2 [2,4,6]

// let names = ['Aaron', 'bobby', 'derrick', 'tone'];

// names.forEach(function(name, index){
//     console.log(`from forEach ${index + 1} ${name}`)
// });

// let myNames = names.map(function(name, index){
//     return index;
// });
// console.log(myNames + ' from map');