//Add a second option item to the contructor to take
//name and age (default to 0);
//Setup a brand new method
    //getDescription
        //Aaron Graham is 26 year(s) old.
class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, I am ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);                    //calling parent constructor fn
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` There major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasLocation()){
            greeting +=  ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

let me = new Traveler('Mr T', 823, 'Clearwater');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());

