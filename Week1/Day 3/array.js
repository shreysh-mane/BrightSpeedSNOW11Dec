
// var arr= [1,"2",{a:2,b:"Shreysh"}];
// console.log(arr);
// console.log(arr[0]);


// arr[0]=2;
// console.log(arr[0]);

// console.log(arr.length);

//Normal for loop

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// For Of loop
// for(let ele of arr){
//     console.log(ele);
// }

// For in loop

// for(let ele in arr){
//     console.log(ele);
// }

// For Each loop.

// var arr= [1,2,2];
// arr.forEach(function(ele, index,arr1){
//     console.log(ele+ " "+index);
//     console.log(arr1);
// });

// arr.push(10);
// arr.push(7);
// arr.push(4);
// arr.pop();
// console.log(arr);


// console.log(arr.indexOf(2));
// console.log(arr.lastIndexOf(2));


// console.log(arr.sort((a,b)=> a-b ));

// Filter
// const arr = [1,2,3,4,5,6,7,8];

// let arr2= arr.filter((ele,index, arr)=>{
//     return ele%3==0;
// });

// console.log(arr2);


// Task: Create an array containing 3 objects with prop name, age. Set the age as 10,15,20. and filter out the oubjects containing even age and store them in a new array.


// let arr3=  arr.map((ele)=>{
//     console.log(ele);
//     return ele+1;
// })

// console.log(arr3);

//  Create  a array with name productList and push 3 product objects in it.with prop name and price.  Now decrease the price of every item by 5. and print every item.

// const arr = [1,2,3,4];
// let sum= arr.reduce((acc,ele,ind,arr)=>{
//         console.log("Acc: " +acc+ " ele: "+ ele);

//         return acc+ele;
// });

// console.log(sum);



//  Strings in JS:

let str1 = "abc";
let str2 = 'abc aea e a a   ';

console.log(str2.charAt(2));


// template literal
// let str3 = `abc`;

// var total=10;
// var count=5;
// Item total is 10
// console.log("Item total"+ total + " Count of items "+ count);

// var msgString=`Item total ${total} Count of items ${count}`;

// console.log(msgString);


// Capitalize first letter of each word from following string.
// "hello there how are you"


function a(){
    var b=10;
    function c(){
        console.log(b);
    }
    c();
}
a();