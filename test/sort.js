let arr = [11, 2,  4, 3, 6, 10, 8, 23, 5];
arr.sort((a, b) => a - b);
console.log(arr);

arr.sort((a, b) => b - a);
console.log(arr);

arr.sort(() => 1);
console.log(arr);

arr.sort(() => -1);
console.log(arr);