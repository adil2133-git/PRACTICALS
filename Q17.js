function findDuplicates(arr){
    let duplicates = []
    let nonDuplicates = []

    for(let i=0;i<arr.length;i++){
        if(nonDuplicates.includes(arr[i]) && !duplicates.includes(arr[i])){
            duplicates.push(arr[i])
        }else{
            nonDuplicates.push(arr[i])
        }
    }
    return duplicates
}
console.log(findDuplicates([1,2,3,2,4,5,1,3,6,1]))