var nameVar = 'Andrew';
var nameVar = 'Mike';
// console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
// console.log('nameLet', nameLet);

const nameConst = 'Frank';
// nameConst = 'Gunther';  //nope can't do with const
// console.log('nameConst', nameConst);

//Block scoping
const fullName = 'Jen Mead';
let firstName;              //created in global scope

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
