var shape = {
    'type': 'Triangle',
    getType:function(){
        return this.type;
    }
}

function Triangle(inA,inB,inC){
    this.a = inA;
    this.b = inB;
    this.c = inC;
}
Triangle.prototype = shape;
Triangle.prototype.getPerimiter = function(){
    return +this.a + +this.b + +this.c;
}

var t = new Triangle(1,2,3);

console.log(t.constructor);
console.log(shape.isPrototypeOf(t));
console.log(t.getPerimiter());
console.log(t.getType());
