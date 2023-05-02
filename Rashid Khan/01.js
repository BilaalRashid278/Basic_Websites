"use strict";
// Simple Program ###########################
// console.log("hello world");

// variables ##############################
// var Myname = "bilaal";
// var Newname = "rashid";
// console.log(Myname, Newname);
// // console.log (Newname);

// Rules for naming variables ###################

// let 1value = "bilaalrashid"; // this is false  '1value'
// let value1 = "rashid khan";  // this is true   'value1'

// var My_name = "bilaalrashid";
// let $value = 12;
// console.log(My_name,$value);

// Keywords  let and var ###################
// let myname = "bilaalrashid";
// let myname = "rashidkhan"; //this is wrong not declare a let in second time
// myname = "rashidkhan";
// console.log(myname,myname);

// constant variables  #########################

// const mypie = "3.14";
// const ypie = "3.15";
// console.log(mypie,ypie);

// String indexing #############################

// let myname = "   bilaalrashid   ";
// console.log(myname[3]);
// console.log(myname.length);
// console.log(myname.length-6);

// useful strings methods ##################

// let myname = "   bilaal   ";
// console.log(myname.length);
// myname = myname.trim();
// console.log(myname.length);

//  toUppercase or toLowercase method

//  var firstName= "BilaalRashid";
 // console.log(name_1.length);
//  firstName = firstName.toUpperCase();
//  console.log(firstName);

// firstName = firstName.toLowerCase();
// console.log(firstName);
//  firstName = firstName.slice(0,5);
//  console.log(firstName);


// typeof Operators ########################

// let age = 18;
// let Myname = "bilaalrashid";
// console.log (typeof age);
// console.log( typeof Myname);

// ################### nested if else ###################

// let winNumber = 20;
// let userGuess =  +prompt("Enter your number");
 
// if (winNumber === userGuess) {
//          console.log("your guess is right");
// } else {
//     if (winNumber > userGuess) {
//         console.log("to low");
//     } else {
//         console.log("to high!!!");
//     }
    
// }

// ################ if else if ######################

// let temInDegree = +prompt("Enter your Number");

// if (temInDegree > 40) {
//     console.log("too hot");
// }else if(temInDegree > 30) {
//     console.log("swim time");
// }else if(temInDegree > 20) {
//     console.log("weather is cold");
// }else if(temInDegree > 10) {
//     console.log("weather is extremly cold");
// } else {
//     console.log("very cold outsite");
// }


// ########################## Nested if else #############################

// let winNum = 20;
// let guessNum = +prompt("Enter your Number");

// if(winNum == guessNum) {
//     console.log("guess right")
// } else {
//     if(winNum > guessNum) {
//         console.log("to low");
//     }  else {
//         console.log("to high");
//     }
// }

// ######################### While loop ####################

// let i = 0;

// while (i<=8) {
//     console.log(i);
//     i++;

// }

// let total = 0;
// let i = 0;

// while(i<=30) {
//     total = total+i;
//     i++;
//     console.log(total);
// }
  
//  ##### fast method for use while loop ########
// let num = 100;

// let total = (num*(num+1))/2 
//     console.log(total);

// ######################## for loop #########################

// for (let i = 0; i<=9; i++) {
//     console.log(i);
   
// }
// ########################## Arrays ###########################

// let array1 = ["item1","item2","item3"];
// array1.push("item4");
// console.log(array1);

// let array2 = array1.slice(2,3);
// console.log(array2);

// ############### Primitive Datatypes in Arrays ##################

// let num1 = 2;
// let num2 = 4;
// num1++;
// num2--;
// console.log(num1,num2);

// ################ Reference Datatypes ####################

// let array1 = ["mango","orange","banana","graps"];
// array1.push("apple");
// let array2 = array1
// console.log(array1);
// console.log(array2);

// ############# while loop ################

// let  i =  0;

// while(i < 9) {
//     console.log(i);
//     i++;
// }

// ############ for loop ###################

// for(let i=0; i < 10; i++) {
//     console.log(i);
// }

// ################# for loop in array #################

// let fruits = ["mango","graps","banana"];
// let fruits2= [];
// for(let i=0; i<fruits.length; i++) {
//     fruits2.push(fruits[i]);
// }
// console.log(fruits2);

// #################### for of loop in array ####################
// let fruits = ["mango","graps","banana"];
// let fruits2 =[];
// for(let fruit of fruits){
//     fruits2.push(fruit);
// }
// console.log(fruits2);


// ############### Array destructuring ####################


// ################## Objects ##################

// const person = {name:"bilaal",age:18,
//             hobbies:["Coding","Gaming","Exploring"]
// }
// console.log(person);
// console.log(person.hobbies);

// const person ={
//     name: "bilaal",
//     age:18,
    
// }
// // console.log(person);
// person.hobbies = ["Games","Coding"];
// console.log(person);

// ################## itreate in object #########################

// const person = {
//     name: "bilaal",
//     age : 18,
//     hobbies:["games","coding"]
// }
// for (let key in person) {
//     console.log(person[key]);
// }

// ########## spread operator in object #############

// const obj1 ={
//     key1 : "value1",
//     key2 :"value2"
// }
// const obj2 ={
//     key3 : "value3",
//     key4 : "value4"
// }

// const newObj = { ...obj1,...obj2}
// console.log(newObj);

// ############## Object Destructuring #################

// const band = {
//     bandName: "ziplin",
//     famousSong: "helven",
//     year : 1947
// }
// console.log(band);
// const {bandName,famousSong} = band;
// console.log(bandName,famousSong);
// console.log(typeof band);

// ################## Object inside Array #####################

// const users = [
//      { userId: 1 ,name :"bilaal",age:"18"},
//     { userId: 2 ,name :"Rashid",age:"42"},
//     { userId: 3 ,name :"Abdullah",age:"19"}
// ]
// // console.log(users);
// for(let user of users){
//     console.log(user);
// }

// ################# functions declaration ###################

// function Myfunction(){
//     console.log("Hello Bilaal Rashid");
// }
// Myfunction();


// ###########################
// function isEven(Number){
//           if(Number % 2 === 0){
//             return "Even";
//           }
//           return "odd";
// }
//  console.log(isEven(5));


// ################
// input : string
// output : firstcharater

// function firstChar(anystring){
//     return anystring[0];
// }
// console.log(firstChar("kgfnbp")

// const Mynumbers = (number) =>{
//     return number % 2 === 0;
// }
// const ans = (Mynumbers(3));
// console.log(ans);


// ################### lexical scope ######################
// const myvar = "value3"; ---1
// function  myapp(){
//     // const myvar = "valure1"; ---2
//     const newapp = ()=>{
//         // const myvar = "vlaue23"; ---3
//         console.log(myvar);

//     }
//     console.log(myvar);
//     newapp();
// }
// console.log(myvar);
// myapp();

// ############## Default parameters ################

// const SumtwoNum = (a,b=8)=>{
//    return a+b;
// }
// const Addtwo =SumtwoNum(2);
// console.log(Addtwo);

// ################ rest parameters #############

// ################ forEach method ################

// const numbers = [1,3,4,42,];

// function myfunction(number, index){
//   console.log(index)
//   console.log(number+5)
// }
// for (let i = 0; i<numbers.length; i++ ){
//     console.log(myfunction(numbers[i]));
// }


// const numbers = [1,3,4,42,];

// numbers.forEach(function(number){
//     console.log(number*4);
// })
// numbers.forEach

// ############### map method ##############33

const numbers =[2,34,42,34];

function square(number){
    return number + number;

}
const newarray = numbers.map(number);
console.log(newarray);