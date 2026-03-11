function capitalizeWords(setences){
    let arr = setences.split(" ")
    let result = []
    
    for(let i=0;i<arr.length;i++){
        let word = arr[i]

        let capitalized = word[0].toUpperCase() + word.slice(1)

        result.push(capitalized)
    }

    return  result.join(" ")
}

console.log(capitalizeWords("node js backend"))