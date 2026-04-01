function oneEditAway(str1,str2){
    if(Math.abs(str1.length - str2.length) > 1){
        return false
    }

    let i = 0;
    let j = 0;
    let edits = 0;

    while(i < str1.length && j < str2.length){

        if(str1[i] === str2[j]){
            i++
            j++
        }else{
            edits++

        if(edits > 1){
            return false
        }

        if(str1.length === str2.length){
            i++
            j++
        }
        else if(str1.length > str2.length){
            i++
        }else{
            j++
        }
    }}
    return true
}
console.log(oneEditAway("pale","ple"))
console.log(oneEditAway("pale","bale"))
console.log(oneEditAway("pale","pales"))
console.log(oneEditAway("pale","bake"))