function isValidPalindrome(str){
    let removeSpace = ""
    
    for(let i=0;i<str.length;i++){
        if(str[i] !== " "){
            removeSpace += str[i]
        }
    }

    // let removeSpace = str.split(" ").join("")

    let string = removeSpace.toLowerCase()

    // let reversed = string.split("").reverse().join("")

    let reversed = ""

    for(let i=string.length-1;i>=0;i--){
        reversed += string[i]
    }

    return string === reversed
}
console.log(isValidPalindrome("A man a plan a canal Panama"))