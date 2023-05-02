// ########### Variables ################
// This is var
// var a = 10;
// var b = 20;
// var c = (a+b);
// console.log(c);

// This is let 
// let i = 10;
// let c = 20;
// let c = 10;  this is wrong not declare a variable remove let
// let b = i+c;
// console.log(b);

// This is const
//  const a = "bilaalrashid";
//  a = "Rashidkhan";  this is wrong way not declare a variable
//  console.log(a);

// ############# golobal variable And local Variables ####
// this is global vaiable
// var x = 10;
// console.log(x);

// Local Variables
// {
//     var a = "bilaalrashid";
//     console.log(a);
// }

//  This is global variable method
// {
//     window.x = "bilaalrashid";
//     console.log(x);
// }
// console.log(x);

// var temp = "this is a global variable";
// function a(){
//     window.x = "bilaalrashid";
//     // console.log(x);
//     alert(temp);
// }
// a();
// console.log(x);

// ###########3 primitive datatypes #############3333

// var  str1 = "This is Hundread 'rupees'";
// var  str2 = 100;
// console.log(str1+str2);

// ############# non primitive Datatypes ###########3
 
//  Array
// const array = ["Motorcycle","Car","aeroplane"];
// console.log(array);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

// Oject

// var obj = {
//     firstName: "bilaal",
//     age: 18,
//     class: 11
// }
// console.log(" My Name is " + obj.firstName + " And My age is " + obj.age + " And I read in class " + obj.class );


// ############## Arithmetic operator ############3

// var x = 10;

// console.log("increment is:" + (x++));
// console.log("increment is:" + (++x));

// console.log("decrement is:" + (--x));
// console.log("decrement is:" + (x--));
// console.log("decrement is:" + (--x));

// ########## comparison operator ########3

// x = 10;
// y = 20;
// z = 10;

// if (x <= y){
//     console.log("true");
// } else {
//     console.log("false");
// }

// ############# logical operator ###########33

// var a = true;
// var b = false;

// if ( a && a ) {
//     console.log("statement is true");
// } else {
//     console.log("false");
// }

// if (!b){
//     console.log("that is true");
// } else {
//     console.log("That is false");
// }


// #############3 Assignment Operator ################


// var a = 10;
// var b = 20;

// console.log("Value of a = a+b is"+(a+=b));
// console.log(a);

// ############# Special operator ##########

// conditional operator
// var age = 18 ;
// var x = age>=18 ? true : false;
// console.log(x);

// Comma Operator 
// let a = (1,3,2,0);
// console.log(a);

// typeof operator 
// var x = "hello";
// x = Number(x);
// var y = 18;
// y = String(y);
// console.log(typeof x);
// console.log(typeof y);

// ########### if else conditions #############

// var age = 18;
// if(age = 18){
//     console.log("true");
// } else {
//     console.log("false");
// }

// if else if

// var day = 1;
// if(day === 1) {
//     console.log("today is monday")
// } else if (day === 2){
//     console.log("today is tuesday");
// } else if (day === 3) {
//     console.log("today is wednesday");
// }else{
//     console.log("Please enter the day1 to day3");
// }

// ############ switch statement ############

// var grade='C';

// switch(grade){
//     case 'A':
//         console.log("Student is passed");
//         break;
//     case 'B':
//         console.log("Stundent is passed");
//         break;
//     default:
//         console.log("Student is not passed");      
// }

// var day="day";

// switch(new Date().getDay()){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("Sunday");
// }

// Switch statement mehtod
// console.log(new Date().getDate());

// ############## loop in javascript ############
// let arr =["item1","item2","item3","item4","item5"];
// for(let i=0;i<=4; i++){
//     console.log(arr[i]);
// }

// while loop

// var i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }


// do-while loop

// var i =0;
// do{
//     console.log(i);
//     i++;

// }while(i<=5);


// for-in loop
// var temp = "";
// var person = {
//     firstname: "Bilaal",
//     lastname: "Rahid",
//     age: 18
// }
// console.log(person);
// for(value in person){
//     temp = temp+person[value]+ " ";
//     console.log(person[value]);
// }
// console.log(temp);


// for of loop
// var arr =["A","B","C","D"];
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// } simple method use for-of loop not use  for loop

// for (value of arr){
//     console.log(value);
// } this is simple way to execute your program in loop


// ############ functions in javascript ################

// function  button(){
//     alert("Button is clicked");
// }

// function multiply(num){
//     alert(num*num);
// }

// funtions in return

// function giveString(){
//      return "BilaalRashid";
// }
// console.log(giveString());

// function valueplus(num){
//     return num+10;
// }
// console.log(valueplus(100));


// ############### function call() ################

// Create Function Object   Example 1
// var add = new Function("num1","num2","return num1+num2");
// console.log(add(5,9));
// console.log(add(4,10));
// console.log(add(6,50));

// Create Function Object   Example 2

// const Multiply = new Function("num1","num2", "return num1*num2");

// console.log(Multiply(4,5));

// funtions in javascript

// Example Number 1 functions
// function Emp(id,name){
//     this.id=id
//     this.name=name
// }

// function PermanentEmp(id,name){
//     Emp.call(this,id,name);
// }
// function TemporaryEmp(id,name){
//     Emp.call(this,id,name);
// }

// var pEmp = new PermanentEmp(1, "BilaalRashid");
// var tEmp = new PermanentEmp(2, "EhtashamBhai");

// console.log(pEmp.id, + " " + pEmp.name);
// console.log(tEmp.id, + " " + tEmp.name);


// Example Number 2 functions

// function CarCompany(CarsModel,Price){
//     this.CarsModel= CarsModel
//     this.Price = Price
// }

// function Toyota(CarsModel,Price){
//     CarCompany.call(this,CarsModel,Price);
// }
// function Honda(CarsModel,Price){
//     CarCompany.call(this,CarsModel,Price);
// }

// var TCompany = new Toyota ("ToyotaCorolla","40lac");
// var HCompany = new Honda ("HondaCivic","50lac");

// console.log(TCompany.CarsModel + " " + TCompany.Price);
// console.log(HCompany.CarsModel + " " + HCompany.Price);


// apply() method

// var arr = [2,4,6,9,10];
// var max = Math.max.apply(null,arr);
// var min = Math.min.apply(null,arr);
// console.log(arr);
// console.log(max);
// console.log(min);

// concat two arrays
// var arr1 = [1,2,3,4];
// var arr2 = [5,6,7,8];
// arr1.push.apply(arr1,arr2);
// console.log(arr1);

// Bind() method

// var website = {
//     name:"bilaalrashid",
//     getName: function(){
//         return this.name;
//     }
// }

// var unboundgetname = website.getName;
// var boundgetname = unboundgetname.bind(website);
// console.log(boundgetname());

// toString() method

// function add(num1,num2){
//           return num1+num2;
// }
// console.log(add(20,60).toString());

// ######### Objects In Javascript ################

// Literal Method for creating object 
 
// var person = {
//     firstName: "Bilal",
//     lastName: "Rashid",
//     age: 18
// }
// console.log("My Name is:"+person.firstName + " " + "My father's name is:"+person.lastName+" " +"And My age is:"+
// person.age);

// Create object using instance of new keyword

// var Mydata = new Object();
// Mydata.id = "1";
// Mydata.name = "BilaalRashid";
// Mydata.age = 18;

// console.log(Mydata);
// for (value in Mydata){
//     console.log(Mydata[value]);
// }

// Create Object using constructor including this keyword

// function employee(id, name, salary){
//     this.id=id;
//     this.name=name;
//     this.salary=salary;

// }

// var emp = new employee(1,"BilaalRashid",100000000)

// for(value in emp){
//     console.log(emp[value]);
// }

// Example no 2

// function Mydetail(Name,Age,Class){
//     this.Name=Name;
//     this.Age=Age;
//     this.Class=Class;
//     this.updateAge=updateAge;
//     function updateAge(newAge){
//         this.Age=newAge;
//     }
// }

// var Details = new Mydetail("BilaalRashid",18,"11th");
// Details.updateAge(19);
// // console.log(Details);
// for(Value in Details){
//     console.log(Details[Value]);
// }
 
// ########### Object Methods 1 #############


// Assign Method ---1
// var Object1 = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// var Object2 = {
//     d: 1,
//     e: 2,
//     f: 3
// }

// const Object3 = Object.assign({d:4,n:9},Object1);
// console.log(Object3,Object2);

// Values Method --2

// var Bilaal1 = {
//     x:"Bilaal",
//     y:18,
//     z:true
// }
//  console.log(Bilaal1);
// console.log(Object.values(Bilaal1));


// ######### Browser Object Model ############

// Window Alert Method --1
// window.alert("Hello! Bilaal Rashid");
// alert("How Are You Bilaal");

// Window confirm Method --2
// function msg(){
//     var x = confirm("Are you Sure");
//     if(x== true){
//         alert("Value is true");
//     } else {
//         alert("Value is false");
//     }
// }

// Window prompt Method --3
// function msg(){
//     var temp = prompt('Enter your age');
//     alert("user age is:" + temp );
// }

// Window open Method --4
// function msg(){
//     open("https://www.google.com");
// }

// Window setTimeout Method --5
// function msg(){
//     setTimeout( function(){
//         alert("Hello Bilaal");
//     },2000
        
//     )
// }

// Window close Method --6
// function msg(){
//     close();
// }

// ############### Document Object Model ##############

// function myprog(){
//     var name = document.form1.Text.value;
//     alert("Thankyou:"+name);
// }

// function myfunc(){
//     var name = document.bilaal.text.value;
//     console.log(name);
// }

// function myfunc(){
//     var name = document.func.input.value;
//     alert(name);
// }

// ############## getElementByID method #####################

// function myfunction(){
//     var Here = document.getElementById("numberhere").value;
//     alert(Here);
// }

// ################# getElementByClassName ################

// var x = document.getElementsByClassName('bilaal');
// alert(x);
// for(value of x){
//     alert(value.innerText);
// }

// ################# getElementsByName ##################

// function myfunc(){
//     var x = document.getElementsByName('gender');
//     // alert(x[0].innerText);
//     console.log(x);
// }

// ############## getElementsByTagName #############

// function myfunc(){
//     var x = document.getElementsByTagName("p");
//     alert(x.length);
// }

// ###################### javascript Validation ###################

// function validateform(){
//     var name = document.myform.name.value;
//     var password = document.myform.password.value;
//     var confirmpassword = document.myform.confirmpassword.value;
//     if(name == null || name ==""){
//         alert("Enter your name");
//         return false;
//     } else if(password.length < 6){
//         alert("Plear enter password only 6 digits");
//         return false;
//     } else if(password === confirmpassword ){
//         return true;
//     } else{
//         alert("Password not match");
//     }
// }

// program number 2 for javascript Validation

// function validateform(){
//     var telephone = document.myform.Number.value;
    
//     if(isNaN(telephone)){
//         document.getElementById("error").innerHTML = "Entered number does not number";
//         return false;
//     } else {
//         return true;
//     }
// }


// ################## Email validation Example ############

// ################### Object Oriented Programing ###############

// This is class object
// class Employee{
//     constructor(id,name){
//         this.id= id;
//         this.name = name;
//     }
//     details(){
//         console.log(this.id + " " + this.name)
//     }
// }
// var obj1 = new Employee(1,"bilaalrashid");
// var obj2 = new Employee(2,"Abdullah");
// obj1.details();
// obj2.details();


// Example Number 2

// class CarCompanys{
//     constructor(Model,Price){
//         this.Model=Model;
//         this.Price= Price;
//     }
//      Details(){
//         console.log(this.Model + " " + this.Price);
//      }
// }
// var x = new CarCompanys("Honda Civic","2 lac");
// x.Details();

// ############### Class Expression ################

// There are three types of class expression

// 1. unnamed class expresion
// var emp = class{
//     constructor(id,name){
//       this.id= id;
//       this.name = name ;
//     }
// }
// console.log(emp.id,emp.name);

// 2. Re-declaring class expression
// var emp = class{
//     constructor(id,name){
//         this.id = id;
//         this.name = name;
//     }
//     Details(){
//         console.log(this.id + " " + this.name);
//     }
// }
// var empdetails1 = new emp(4,"Bilaalrashid");
// var empdetails2 = new emp(5,"rashidkhan");

// empdetails1.Details();
// empdetails2.Details();


// This is Re-declaring class expression
//  var emp = class{
//     constructor(id,name){
//         this.id =id;
//         this.name = name;
//     }
//     Details(){
//         console.log(this.id,this.name);
//     }
// }
// console.log(emp.Details);

// var object1 = new emp(1,"bilaal");
// var object2 = new  emp(2,"rashid");
// object1.Details();
// object2.Details();


// ################## Prototye in Javascript ##############

//prototype chaining
// function Employee(firstName,lastName){
//     this.firstName= firstName;
//     this.lastName= lastName;
// }

// Employee.prototype.fullName = function(){
//     return this.firstName +" "+ this.lastName;
// }

// var emp1 = new Employee("bilaal","rashid");

// console.log(emp1.fullName());



// property method in prototye ---2
// function Employee(firstName,lastName){
//     this.firstName= firstName;
//     this.lastName= lastName;
    
// }

// Employee.prototype.Company = "Technology";

//     console.log(Employee);

// var emp1 = new Employee("bilaal","rashid");

// console.log(emp1.Company,emp1.firstName);

// Example  ---- This is best example
// function Student(firstName,lastName,age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     Student.prototype.fullname = function(){
//         return this.firstName + " " + this.lastName;
//     }
// }
// Student.prototype.nationality= "Pakistan";
// var Student1 = new Student("Bilaal","Rashid",18);
// var Student2 = new Student ("Abdullah","Rashid",20,);
// console.log(Student1.fullname());
// console.log(Student1.nationality);


// ################# Constructor In Class ####################

// class CompanyName{
//     constructor(){
//         this.CompanyName = "Google";
//     }
// }


// class Employee extends CompanyName{
//     constructor(id,name){
//         super();
//         this.id = id;
//         this.name = name;
//     }
// }

// class Nationality extends CompanyName{
//     constructor(){
//         super();
//         this.Nationality= "Pakistan";
//     }
// }



// var emp = new Employee(1 , "BilaalRashid");
// console.log(emp.id+" "+emp.name+" "+emp.CompanyName);

// ############## Static Method ##################

// class Test{
//     static display1(){
//         return "this is a static method 1";
//     }
//     static display2(){
//         return "this is a static method 2";
//     }
//     static display3(){
//         return "this is a static method 3";
//     }
// }
// console.log(Test.display1(),Test.display2(),Test.display3());


// ################ Oops Encapsulation ################

// class Student{
//     constructor(){
//         var name;
//         var marks;
//     }
//     getName(){
//        return this.name;
//     }
//     setName(name){
//         this.name=name;
//     }
//     getmarks(){
//       return  this.marks;
//     }
//     setmarks(marks){
//         this.marks = marks;
//     }
// }

// var student1 = new Student();
// student1.setName = ("BilaalRashid");
// student1.setmarks = (603);
// console.log(student1.getName()+" "+ student1.getmarks());

// ############# Oops inheritance #######################

// class Dateget extends Date{
//     constructor(){
//         super();
//     }
// }

// let MyDate = new Dateget();
// console.log(MyDate.getDate()+"-"+MyDate.getMonth()+"-"+MyDate.getFullYear());

// Custom inheritace method

// class CompanyName{    // this is parent class
//     constructor(){
//         this.CompanyName = "Honda";
//     }
// }
// class Bike extends CompanyName{  // this is child class of parent class
//     constructor(name,price){
//         super();
//         this.name = name;
//         this.price = price;
//     }
// }

// var Bike1 = new Bike("70",80000);
// console.log(Bike1.CompanyName+" "+Bike1.name+" "+Bike1.price);
// var Bike2 = new Bike("CBR",200000);
// console.log(Bike2.CompanyName+" "+Bike2.name+" "+Bike2.price);

// Prototype based inheritance

// function Bike(CompanyName){
//     this.CompanyName = CompanyName;
// }

// Bike.prototype.getCompany = function (){
//     return this.Company;
// }

// function Vehicle(name,price){
//     this.name = name;
//     this.price = price;
// }

// var bike = new Bike("Honda");
// Vehicle.prototype = bike;

// var v1 = new Vehicle("70",90000);

// console.log(v1.name,v1.price,v1.CompanyName)


// #################### Javascript AddEventsListener ####################



// ####################### Exception Handling ########################

// try{
//     let a = ['a','b','c','d'];
//     console.log(a);
//     console.log('rashid');
//     console.log(b);       //  this is error 
//     console.log("bilaal rashid");
// } catch(e){
//     alert(`Error ${e.message}`);
// }

//  #################### throw statement #######################

//function Validate(){
//   const input = document.getElementById("input1");
//   const message = document.getElementById("message");
//   message.innerHTML = "";
//   const x = document.getElementById("id1").value;
//    try{
//        // const x = document.getElementById("id1").value;
//        if(isNaN(x)) throw "is Not a number";
//        if(x=="") throw "is Empty"
//        if(x > 10) throw "Your Nubmer is greater than 10";
//        if(x < 5 ) throw "Your Number is less than 5";
//    }catch(e){
//        message.innerHTML = "input" +" "+ e;
//    }finally{
//        input.innerHTML = "input value :"+" "+ x;
//    }
//
//}
 
// #################### Promises In Javascript ###############


// let promises = new Promise(function(myResolve,  myReject){
//     let x = 1;
//     if(x == 1){
//         myResolve('true');
//     } else{
//         myReject('Error');
//     }

// });
// promises.then(
//     function(value) {console.log(value)},
//     function(error) {console.log(error)}
// );

//Example no 2 -->

// const Mypromise = new Promise(function(Resolve,Reject){
//     let x = 2;
//     if(x != 0){
//         Resolve("Your value is correct");
//     } else {
//         Reject("YOur value is not correct");
//     };
// });

// Mypromise.then(
//     function(value) {console.log(value)},
//     function(error) {console.log(error)}

// )

//Exmaple Number 3  Callback --->

// setTimeout(function(){myfunction(
//     "Bilaal Rashid is a Progarammer"
// )},4000);
// function myfunction(value){
//     document.getElementById('demo').innerHTML =value;
// }

//  ###################### setTimeout in Promises #################

// let newPromise = new Promise(function(Resolve,Reject){
//     setTimeout(function(){Resolve("bilaalrashid");},4000);
// });

// newPromise.then(
//     function(value){document.getElementById('demo').innerHTML = value;}
// );

// #################### Promises Chanining #####################

// new Promise(function(Resolve,Reject){
//     setTimeout(()=>{Resolve(4)},3000);
// }).then(function(value){
//     alert(value);
//     return value*4;
// }).then(function(value){
//     alert(value);
//     return value*4;
// }).then(function(value){
//     alert(value);
// });

// Example Number 2  with Arrow function--->

// new Promise((Resolve,Reject)=>{
//     setTimeout(()=>{Resolve(5)},4000);
// }).then((value)=>{
//     alert(value);
//     return value*5;
// }).then((value)=>{
//     alert(value);
//     return value*5;
// }).then((value)=>{
//     alert(value);
// });

// ################### Error Handling with Promises ###################

// function getUserId(id){
//     if(typeof id !== 'number' || id<0){
//        throw new Error("Invalid Id");
//     }
//     return new Promise((Resolve,Reject)=>{
//       Resolve({
//         id:id,
//         UserName: "bilaalrashid"
//       });
//     });
// };

// getUserId(4)
// .then((user)=>{
//     console.log(user.UserName);
// })
// .catch(error =>{console.log(error)});


// // Second way to use promise error handling

// let userAuthorized = true;

// function getUserId(id){
//     return new Promise((Resolve,Reject)=>{
//         if(!userAuthorized){
//             throw new Error("User is not authorized");
//         };
//         Resolve({
//             id:id,
//             userName: "bilaalrashid"
//         });
//     });
// }

// try {
//     getUserId(6).then(user => console.log(user.userName)
//    ) .catch(
//     (error) => {console.log(`caught error .catch ${error}`)});
// ;
// } catch (e) {
//     console.log(`caught by try/catch error ${e}`);
// }

// ##################### Promise Api #######################


// Promise.all method

// Promise.all([
//  new Promise(Resovle => setTimeout(Resovle(1),4000)),
//  new Promise(Reject => setTimeout(Reject(new Error("Incorrect")),1000)),
//  new Promise(Resovle => setTimeout(Resovle(4),9000)),
// ]).then(alert);

// Promise.race method

// Promise.race([
//     new Promise(Resovle => setTimeout(Resovle(1),4000)),
//     new Promise(Reject => setTimeout(Reject(new Error("Incorrect")),1000)),
//     new Promise(Resovle => setTimeout(Resovle(4),9000)),
//    ]).then(alert);

//Promise.any method

// Promise.any([
//     new Promise(Resovle => setTimeout(Resovle(1),4000)),
//     new Promise(Reject => setTimeout(Reject(new Error("Incorrect")),1000)),
//     new Promise(Resovle => setTimeout(Resovle(4),9000)),
//    ]).then(alert);

// Example no 2

// Promise.any([
//     new Promise(Reject => setTimeout(Reject(new Error("Incorrect")),1000)),
//     new Promise(Reject => setTimeout(Reject(new Error("Incorrect again")),1000)),
// ]).catch((error)=>{
//  console.log(error.errors[0]);
// });


// ################# Async Await in Promise ####################


    // async function mydisplay(){
    //     let promise = new Promise((Resolve,Reject)=>{
    //     setTimeout(()=>{Resolve("hello bilaalrashid")},4000);
    //     Reject("Any Error");
    //     });
    //     document.getElementById("result").innerHTML = await promise;
    // }
    // mydisplay();

//Example no 2 async await


    // async function myfunction(){
    //     const promise1 = new Promise((Resolve,Reject)=>{
    //         let x = +prompt("Enter your number");
    //         setTimeout(()=>{
    //         if(x == 10){
    //             Resolve("Yes x is equal's to 10 Sucessfull")
    //         } else{
    //             Reject( new Error("x is not equal's to 10"))
    //         }
    //         },2000)  
            
    //     })  
    //     const RunCode = await promise1
    //     console.log(RunCode)
    // }     
    
    // myfunction();  

// ######################## Advanced javascript Typed Array methods ################3


// Method no 1  CopyWithin()

// let arr = [1,4,3,5,8,9,10];

// arr.copyWithin(1,2,4);
// console.log(arr);


// Method no 2 entries()

// let arr = ["html","css","javascript","Tailwind css","bootstraps"];

// let result = arr.entries();
// for(value of result){
//     console.log(value);
// }
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);

// Method no 3 fill()

// let arr = [1,4,3,5,8,9,10];

// let result = arr.fill(11);
// console.log(result);

// Method no 4 find()

// let arr = [1,4,3,5,8,9,10];

// let reuslt = arr.find(searchValue);
// console.log(reuslt);

// function searchValue(value){
//     return value > 8;
// }

// Method no 5 findIndex()

// let arr = [1,4,3,5,8,9,10];

// let reuslt = arr.findIndex(searchValue);
// console.log(reuslt);

// function searchValue(value){
//     return value >= 8;
// }

// ##################### Typed Array Methods Part2 ####################

// Method no 1 forEach()

// let arr = [3,4,9,5];
// let result = [];
// arr.forEach(function(value){
//     result.push(value*2)
// })
// console.log(result);
    

// Method no 2  indexof()

// let arr = [3,4,9,5];

// console.log(`The position of 5 is ${arr.indexOf(5)}`);


// Method no 3  join()

// let arr = ["html","css","javascript","Tailwind css","bootstraps"];
// console.log(arr.join('/'));

// Method no 4 keys()

//  let arr = ["html","css","javascript","Tailwind css","bootstraps"];

//  let result = arr.keys();
//  console.log(result.next().value);
//  console.log(result.next().value);
//  console.log(result.next().value);
//  console.log(result.next().value);
//  console.log(result.next().value);
//  console.log(result.next().value);

// Method no 5 reduce()

// let arr1 = [2,4,5,10];
// let result = arr1.reduce(function(passedItem,Item){
//     return passedItem+Item
// },0)
// console.log(result);

// ################ Sets In Javascript ########################

// Method no 1   add();
// const s = new Set();
// s.add("Bilaal");
// s.add("Abdullah");
// s.add("Rashid");
// s.add("Jannat");
// s.add(10+30);
// for(value of s){
//     console.log(value);
// }

// Method no 2   clear();

// const s = new Set();
// s.add("Bilaal");
// s.add("Abdullah");
// s.add("Rashid");
// s.add("Jannat");
// s.add(10+30);

// for(value of s){
//     console.log(value);
// }

// s.clear();

// console.log(s);


// Method no 3  delete();

// const s = new Set();
// s.add("Bilaal");
// s.add("Abdullah");
// s.add("Rashid");
// s.add("Jannat");
// s.add(10+30);

// for(value of s){
//     console.log(value);
// }

// s.delete("Bilaal");
// s.delete(10+30);

// console.log(s);


// Method no 4   entries();

// const s = new Set();
// s.add("Bilaal");
// s.add("Abdullah");
// s.add("Rashid");
// s.add("Jannat");
// s.add(10+30);

// var iteration = s.entries();
// for(value of iteration){
//     console.log(value);
// }

// Method no 5  forEach();

// const s = new Set();
// s.add("Bilaal");
// s.add("Abdullah");
// s.add("Rashid");
// s.add("Jannat");
// s.add(10+30);

// s.forEach((value1,value2,s)=>{
//     console.log("["+value1+"]"+" " + value2 );
// });

// Method no 6  has();

// const s = new Set();
// s.add("Bilaal");
// s.add("Abdullah");
// s.add("Rashid");
// s.add("Jannat");
// s.add(10+30);

// s.has(10+30);
// console.log(s.has("css"));


// Mehtod no 7  values();

// const s = new Set();
// s.add("Bilaal");
// s.add("Abdullah");
// s.add("Rashid");
// s.add("Jannat");
// s.add(10+30);
// let iterator = s.values();
//  for(value of iterator){
//     console.log(value);
//  }

// ################### Map Object in Javascript #####################

// Method no --1

// let map = new Map();

// map.set(1,"bilaal");
// map.set(2,"abdullah");
// map.set(3,"aiza");
// map.set(4,"jannat");
// map.set(5,"arham");
// map.forEach(value => {
//     console.log(value);
// });
// console.log(map.get(2));  


// Method no  --2

// let map = new Map();

// map.set(1,"bilaal");
// map.set(2,"abdullah");
// map.set(3,"aiza");
// map.set(4,"jannat");
// map.set(5,"Iman");

// var iterator = map.entries();
// for(let i=0; i<map.size; i++){
//     console.log(iterator.next().value);
// }
 
// ################### WeakSet in javascript ##############################

// let WeakSet1 = new WeakSet();
// let obj1 = {name:"bilaal",age:18};
// let obj2 = {name:"abdullah",age:19};
// WeakSet1.add(obj1);
// WeakSet1.add(obj2);
// WeakSet1.delete(obj2);
// console.log(WeakSet1.has(obj1));
// console.log(WeakSet1.has(obj2));

// ################### WeakMap in javascript ##############################

// let WeakMap1 = new WeakMap();
// let obj1 = {};
// let obj2 = {};

// WeakMap1.set(obj1,"bilaal",18);
// WeakMap1.set(obj2,"abdullah",19);
// WeakMap1.delete(obj1);
// console.log(WeakMap1.has(obj1));
// console.log(WeakMap1);



























