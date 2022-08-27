// let person1 = {
//     firstName: "Priya",
//     lastName: "Reddy",
//     age:23,

//     fullName: function(){
//         console.log(this.firstName + " " + this.lastName);
//     }

// };
// person1.fullName();

// person1.age=30
//person1.fullName="priyanka"

// console.log(person1.firstName);
// console.log(person1.lastName)
// console.log(person1.age);  



// //let  person1 = {};
// let person1 = new Object();

// person1.sayHi =function(){
//     alert("hi......");
// }
// person1.name="priya reddy",
// console.log(person1);
// person1.sayHi();


// let person2 = {
//         firstName: "priti",
//         lastName: "Reddy",
//         age:21,
    
//         fullName: function(){
//             console.log(this.firstName + " " + this.lastName);
//         }
    
//     };
//     person2.fullName();
    


//constructor function 

function Person(first, last, a){

    this.firstName=first;
    this.lastName=last;
    this.age=a;

    this.sayHi = function(){
        alert("hi priya priti");
    }
    this.changeAge = function(newAge){
        this.age = newAge;
    }
}


let person1 = new Person("priya","reddy", 23);
person1.changeAge(30);

let person2 = new Person("priti", "reddy", 21);

console.log(person1);
console.log(person2);
// sayHi();
