//  QUE 1 =>

// let fun=()=>{

//     let a = prompt("enter a Number")
//     if(a%2==0){
//         alert("given Number is even")
//     }
//     else{
//         alert("given number is odd")
//     }
// }

// fun()



// // QUE 2 =>

// let fun=()=>{

//     let a = prompt("enter first number")
//     let b = prompt("enter second number")
//     if(a>b){
//         alert(a + " is greater than " + b )
//     }
//     else{
//         alert(b + " is greater than " + a)
//     }
// }
// fun()



// QUE 3
// let fun=()=>{

// let a = prompt("enter a number")
// if(a>0){
//     alert("given number " + a + " is positive")
// }
// else if (a==0){
//     alert("given number " + a + " is zero")
// }
// else if (a<0){
//     alert("given number " + a +  " is negative")
// }
// }
// fun()



// QUE 4
// let fun=()=>{

//     let a = prompt("enter your age")
//     if(a>= 18){
//         alert("you are eligible to vote ")
//     }
//     else {
//         alert("you are under age")
//     }
//     }
// fun()



// QUE 5 
// let fun=()=>{

//     let a = prompt("enter a number")
//     for(let i=1;i<=10;i++){
//         console.log(a*i);
        
//     }
// }
// fun()

// QUE 6
// let fun=()=>{

//     let a = prompt("enter a number")
//     count =0
//     for(let i= 1;i<=a;i++){
//         count=count+i
                
//     }
//             console.log(count);

// }
// // fun()
let palindrome=()=>{
    let num=parseInt(prompt("enter a number "))
    let i=1
    let rev=0
    let original=num
    
    while (num>0){
        let digit =num%10
        rev=rev*10+digit
        num=Math.floor(num/10)
    }
    if (rev==original){
        confirm("palindrome")
    }
    else{
        alert("not palindrome")
    }



}
palindrome()