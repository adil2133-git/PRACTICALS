function hasPairSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            let result = arr[i] + arr[j]
            if(result === target){
                return true
            }
        }
    }
    return false
}
console.log(hasPairSum([2,7,11,15], 9))
console.log(hasPairSum([1,3,5,8], 10))