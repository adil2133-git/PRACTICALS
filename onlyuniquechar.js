function onlyUnique(str){
    let freq = {}

    for(let i=0;i<str.length;i++){
        let char = str[i]

        if(freq[char]){
            return false
        }else{
            freq[char] = true
        }
    }

    return true
}

console.log(onlyUnique("abcde"))
console.log(onlyUnique("abcdde"))