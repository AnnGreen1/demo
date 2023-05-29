let obj = {
    name:'yuan',
    university:'安理工'
}

let obj2 = {
    name:'yuan',
    university:'安理工'
}

console.log(obj===obj2);
console.log(obj==obj2);

console.log(Object.is(obj,obj2));
obj2 = obj;
console.log(Object.is(obj,obj2));