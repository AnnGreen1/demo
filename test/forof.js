let obj = {
    name:'袁明月',
    age:18,
    university:'安徽理工大学'
}

// for(key of obj){
//     console.log(key);
// }

console.log(Object.keys(obj));

console.log(Object.getOwnPropertyNames(obj));

let newobj = new Object();
newobj.name = 'yuanminyue';
newobj.age = 23;
newobj.university = '安理工';

console.log(Object.keys(newobj));

console.log(Object.getOwnPropertyNames(newobj));