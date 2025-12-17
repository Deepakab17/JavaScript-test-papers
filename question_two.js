// Q7
// let length =()=>{
//     let str = prompt("enter your name :");
//     let count = 0;

//     for (let ch of str) {
//         count++;
//     }

//     alert("length of name is "+ count);
// }

// length()



// Q8
// let vowel=()=>{

//  let str =prompt("Enter any string:")
//  n=str.toLowerCase()
//  count=0
//  for( let ch of n){
//     if( ch==="a" || ch==="e" || ch==="i" || ch==="o" || ch==="u"){
//         count++
//     }
    
//  }
// alert("total no of vowels are " + count)

// }
// vowel()



// Q9
// let reverse =()=>{
//     let str =prompt("enter your name");
//     let rev = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//        rev += str[i];
//     }

//    alert("reverse of the string is " + rev);
// }

// reverse()


// Q10
// let upperCase=()=>{
//     let str = prompt("enter anything ");
//     let upperStr = str.toUpperCase();

//     alert(upperStr);
// }

// upperCase()

// // Q11

// let countof=()=>{
//     let str = prompt("enter any name");
//     let count = 0;

//     for (let ch of str) {
//         if (ch === 'a') {
//             count++;
//         }
//     }

//     alert("total no of character a is = " +count);
// }


// countof()
Q12
let num=prompt(parseInt("enter a number "))
let palindrome=()=>{
    let i=1
    let rev=0
    let original=num
    
    while (num>0){
        let digit =num%10
        rev=rev*10+digit
        num=num/10
    }
    if (rev==original){
        console.log("palindrome")
    }
    else{
        ("not palindrome")
    }



}
palindrome()
