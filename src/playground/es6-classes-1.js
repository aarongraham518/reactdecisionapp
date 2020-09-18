class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi I am ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old. `;
    }
}

class Traveler extends Person {
    constructor(name, homeLocation){
        super(name);
        this.homeLocation = homeLocation;
    }
    hasLocation(){
        // return !!this.major;
        return this.homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();    

        if(this.hasLocation()){
            greeting += `I'm visiting from ${this.homeLocation}.`;
        }
        
        return greeting;
    }
}

const traveler = new Traveler('Aaron Graham', 'Clearwater');
console.log(traveler.getGreeting());

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        //description from parent
        let description = super.getDescription();
        
        if(this.hasMajor()){
            description += `Their major is ${this.major}.`
        }

        return description;
    }
}