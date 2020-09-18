//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

//this keyword - no longer bound

// const user = {
//     name: 'Aaron',
//     cities: ['Clearwater', 'New York', 'Dublin'],
//     printPlacesLived: function(){
//         console.log(this.name);
//         console.log(this.cities);       //accessable here, but now below :(

//         //Small work around for access to 'this'
//         const that = this;
//         console.log(that + ' is this');

//         /* 'this' has no bound here :( */
//         this.cities.forEach(function(city){
//             console.log(that.name + ' has lived in ' + city);
//         });
//     }
// };

//es6 functions use 'this' in the context they were created in :)
// const user = {
//     name: 'Aaron',
//     cities: ['Clearwater', 'New York', 'Dublin'],
//     printPlacesLived: function(){
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// };

/*Let's take a look at the arrow function for methods within the object*/
const user = {
    name: 'Aaron',
    cities: ['Clearwater', 'New York', 'Dublin'],
    /* right here we'll get an error and will need to the use the es5 method way*/
    // printPlacesLived: () => {    
        //placing it back
        // printPlacesLived: function(){  //getting rid of function word
    printPlacesLived(){  
        // const cityMessages = this.cities.map((city) =>{
        //     return this.name + ' has lived in ' + city;
        // });  
        // return cityMessages;
        //simplifying code
        return this.cities.map((city) => this.name + ' has lived in ' + city);
            
    }
}
// console.log(user.printPlacesLived());

//Challenge area
const multiplier = {
//     //Numbers - array of numbers
//     //multiplyBy - single number
//     //multiply - return a new array where the numbers have been multiplied
    numbers: [1, 2, 3],
    mulipliedBy: 3,
    multiply(){
        return this.numbers.map((numberXBy) => this.mulipliedBy * numberXBy);
    }
};

console.log(multiplier.multiply());   //[1, 2, 3] multiply by 2. array back [2, 4, 6]