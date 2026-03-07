function countOccurence(arr,num){
    let count = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i] === num){
            count++
        }
    }
    return count
}
console.log(countOccurence([1,2,4,2,1,4,2,2],2))