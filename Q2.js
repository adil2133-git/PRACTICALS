function findLargest(a,b){
    if(a>b){
        return a
    }else if(b>a){
        return b
    }else{
        return "Both are equal"
        
    }
}
console.log(findLargest(3,3))