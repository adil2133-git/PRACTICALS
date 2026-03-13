function secondLargest(arr){
    let largest = arr[0];
    let secLargest = arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i] > largest){
            secLargest = largest
            largest = arr[i]
        }else if(arr[i] > secLargest && arr[i] !== largest){
            secLargest = arr[i]
        }
    }
    return secLargest
}
console.log(secondLargest([3,8,6,9,10]))
console.log(secondLargest([3,8,2,4,1,2,5,3]))