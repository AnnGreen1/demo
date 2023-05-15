// class animal {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   run = (name) => {
//     console.log(name, this.name);
//   };
// }

// let a = new animal('ann',18);
// console.log(a.run('runing'));


var something = 'sth';
let fun = () =>{
    // this.thing = this.something;
    // console.log(this.thing+'fun');
    console.log(this);
}
fun();
console.log(global);