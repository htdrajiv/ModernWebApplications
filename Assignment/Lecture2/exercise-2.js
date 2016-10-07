Array.prototype.even = function(){
    return this.filter((v,i)=> { return v%2==0 })
}

Array.prototype.odd = function(){
    return this.filter((v,i)=> { return v%2!=0 })
}

console.log([1,2,3,6,5].even()); // 2,6
console.log([1,2,3,6,5,3,4,7].odd()); // 1,3,5,3,7