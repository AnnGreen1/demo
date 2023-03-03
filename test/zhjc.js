function Person(eyes) {
  this.eyes = eyes;
  this.colors = ["white", "yellow", "black"];
}
Person.prototype.getEyes = function () {
  return this.eyes;
};
function YellowRace() {
  Person.call(this, "black"); // 调用构造函数并传参
}
YellowRace.prototype = new Person(); // 再次调用构造函数
const hjy = new YellowRace();
hjy.colors.push("green");
const laowang = new YellowRace();
console.log(hjy.colors); // ['white', 'yellow', 'black', 'green']
console.log(hjy.eyes);
console.log(laowang.colors); // ['white', 'yellow', 'black']
console.log(hjy.getEyes()); // black
