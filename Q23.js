function squareArray(arr){
    let squareArr = []
    for(let i=0;i<arr.length;i++){
        let square = arr[i] * arr[i]
        squareArr.push(square)
    }
    return squareArr
}
console.log(squareArray([1,2,4,5]))