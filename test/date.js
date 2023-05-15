let date = new Date();
console.log(date);
let date2 = date;
console.log(date2);
date.setFullYear(2024);
console.log(date);
console.log(date2);

let date4 = new Date();
let date3 = JSON.parse(JSON.stringify(date4));
console.log(date3);
date4.setFullYear(2024);
console.log(date3);
console.log(typeof date3);
console.log(date4);