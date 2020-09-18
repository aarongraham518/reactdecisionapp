
// const user = {
//     name: 'Aaron',
//     age: 22,
//     location: 'Clearwater'
// }
// let userName = 'Aaron';
// let userAge = 42;
// let userLocation = 'Clearwater';

// function getLocation(location){
//     if(location){
//         return <p>Location: {location}</p>;
//     }else{
//         return undefined;
//     }
// }
// const templateTwo = 
// <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
// </div>
// ;

{
    // numbers.map((number) =>{
    //     return <p key={number}>Number: {number}</p>
    // })

        /*
        shorhand
        app.options.map((index) => <li key={index}>{index}</li>)   
    */
}


//Create a templateTwo var JSX expression
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//Working with bind()
const obj = {
    name: 'Vikram',
    getName(){
        return this.name;
    }
};

// const getName = obj.getName.bind(obj);
const getName = obj.getName.bind({name: 'Aaron'});
console.log(getName());
