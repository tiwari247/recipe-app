function Human(name, dob){
    this.name = name;
    this.dob = dob;
}
Human.prototype.eatsFootAt = function(time){
    console.log(this.name+" eats food at: "+time)
}

function Employee(name, dob, salary){
    Human.call(this, name, dob);
    this.salary = salary;
}

Employee.prototype.__proto__ = Human.prototype;

// var f1 = new First("Ram", 1982);
var s1 = new Employee("Dave", 1999, 10000);

// console.log(f1);
// console.log(s1);
// s1.eatsFootAt("11AM");
console.log(Human.prototype.constructor);
console.log(s1.__proto__.constructor === Employee.prototype.constructor);
s1.eatsFootAt("12AM");

/*
//Inheritance
function Employee(name){
    this.name = name;
}
Employee.prototype.getName = function(){
    return this.name;
}

function Manager(name, dept){
    this.name = name;
    this.dept = dept;
}


Manager.prototype.getDept = function(){
    return this.dept;
}

Manager.prototype.__proto__ = Employee.prototype;

var emp1 = new Employee("Ram");
console.log(emp1.getName());

var man1 = new Manager("Dave", "IT");
console.log(man1.__proto__.__proto__);

console.log(man1.getName());
console.log(man1.getDept());
*/


























// const fs = require("fs");
// console.log("first");
// setTimeout(function(){console.log("second: setTimeout()")}, 0);
// setTimeout(function(){console.log("second: setTimeout(2000)")}, 2000);
// setImmediate(function(){console.log("second: setImmediate()")});
// process.nextTick(function(){console.log("second: nextTick()");});
// console.log("third");

// console.log(__dirname);
// let fileName = __dirname + "\\angular.json";
// console.log(fileName);
// fs.readFile(fileName, (error, data)=>{
//     setTimeout(()=>{console.log("setTimeOut() : Inside I/O Cycle")},0);
//     setImmediate(()=>{console.log("setImmediate() : Inside I/O Cycle")});
//     console.log("Read!");
//     console.log(data);
// });
