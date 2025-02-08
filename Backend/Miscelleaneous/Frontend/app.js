// let arr=[1,2,3];
// arr.sayHello=()=>{
//     console.log("hello i am a arr");
// }


//05.Factory function:

// function personMaker(name, age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`hi my name is ${this.name}`);
//         },
//     };
//     return person;
// }


// let p1=personMaker("adam",25);
// let p2=personMaker("eve",22); 

// console.log(p1.talk()==p2.talk()); // is true due to ? :since both return undefind;
// p1.talk==p2.talk; //return false :due to diffrence instance of object



//06.new Operator;
// function person(name , age){
//     this.name=name;
//     this.age=age;}

//     person.prototype.talk=function (){
//         console.log(`hi my name is ${this.name}`);
//     }

// let p1=new person("vikash", 22);
// console.log(p1);
// let p2=new person("shyam",24);
// console.log(p1.talk==p2.talk);


//inheritance;

class Mammal{
    constructor(name){
        this.name=name;
        console.log(name);
        this.type="warm-blooded"
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("woff...wofff..");
    }
}
class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    Meow(){
        console.log("Meow...Meow..");
    }
}

let dog1=new Dog("johh");
console.log(dog1)