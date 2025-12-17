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