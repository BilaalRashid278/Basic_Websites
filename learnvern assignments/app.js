// Write program to print any string 

// var string = "bilaalrashid";
// alert(string); // This is a string go to browser and show the alert box to show string.

// Question Number 2

// var x = 10;
// var x = "Bilaal";
// var x = true;
// console.log(x);

// Question Number 3

// var arr = ["Orange","Mango","Banana","Watermellon","Grapes"];
//  alert(arr);

// Question Number 4

// var obj ={
//     firstName: "bilaal",
//     lastName: "rashid",
//     age: 18
// }

// console.log("My Name is"+ " " + obj.firstName+" " + "And My father Name is"+ " " +obj.lastName+ " " +"And My age is"+" " +obj.age);

// Question Number 5

// var x = 18;
// var y = 20;
// var z = x+y;
// console.log(z);

// var x = 8;
// var y = "8";
// if(x === y){
//     console.log("true");
// }  else {
//     console.log("false");
// }

// Question Number 6

// var x = true;
// var y = false;
// if (x == y){
//     console.log("true");
// } else {
//     console.log("false");
// }

// Question Number 7

// var day = new Date().getDay();

// if (day == 1){
//     console.log("Monday");
// } else if(day == 2){
//     console.log("Tuesday");
// }else if(day == 3){
//     console.log("Wednesday");
// }else if(day == 4){
//     console.log("Thursday");
// }else if(day == 5 ){
//     console.log("Friday");
// }else if(day == 6){
//     console.log("Saturday");
// }else if(day == 7){
//     console.log("Sunday");
// }else {
//     console.log("your value is false");
// }

// var day = "Day";

// switch(new Date().getDay()){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
// }




// var arr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

// for(var i = 0; i<=arr.length; i++){
//     console.log(arr[i]);
// }
// var i = 0;
// while(i<=arr.length){
//     console.log(arr[i]);
//     i++;
// }

// do{
//     console.log(arr[i])
//         i++;

// }while(i < arr.length)
    
// for( value of arr){
//     console.log(value);
// }

// Question Number 9

// var HloName = "Bilaalrashid";
// function Myname(){
//        alert(HloName);
    
// }
// Myname();

// Question Number 10

// var arr =[2,3,8,9,10];

// var max = Math.max.apply(null,arr);
// var min = Math.min.apply(null,arr);
// console.log("This is maxium Number"+" " + max);
// console.log("This is minimum Number"+" "+min);

// Question Number 11

// var obj = {
//     name: "BilaalRashid",
//     getName: function(){
//         return this.name;
//     }
// }

// var unboundname = obj.getName;
// var boundname = unboundname.bind(obj);
// console.log(boundname());

// ###################### Exception handling ################

// try{
//     const fruits = ['orange','banana','grapes','mangos'];
//     console.log(fruits);
//     console.log(cars);
// }catch(e){
//     alert(`${e}`);
// }

// function Validate(){
//     const x = document.getElementById('text').value;
//     try{
//     if(x == 0) throw "do not enter 0 it is encorrect";
//     }catch(e){ 
//         alert(e);

//     }finally{

//     }
// }


// ######################## Practice Set of javascript ######################

// function myfunction(){
//     new Promise((resolve,reject)=>{
//         let x = prompt("Enter your number");
//         let z = parseInt(x)
//         let y = 10;
//         setTimeout(()=>{
//         if(z === y){
//             resolve("your number is right");
//         } 
//         },4000)
//         setTimeout(()=>{
//             reject(new Error ("your number is wrong"))
//         },4000)
//     }).then((value)=>{
//      console.log(value);
//     }).catch((error)=>{
//      console.log(error);
//     })
// }

// myfunction();

// function Person(id,name,section){
//     this.id = id,
//     this.name = name
//     this.section = section
// };
// Person.prototype.college = "Goverment Graduate College";
// Person.prototype.college = "Goverment Graduate College";

// let student1 = new Person(1,"bilaal","11th C7");
// let student2 = new Person(2,"Abdulrehman","12th C8");
// console.log(student1);
// console.log(student2);
