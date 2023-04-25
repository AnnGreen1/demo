let obj = {name:'yuan',age:18};
function shallowClone(obj) {
  const newObj = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }
  return newObj
}

let newobj = shallowClone(obj);
obj.name = 'mingyue';
console.log(newobj);