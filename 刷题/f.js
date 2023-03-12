let n =3;
let arr = [1, 1];
let i = 0;
for (i = 0; i >= 0; i++) {
  if (arr.length != n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
}
console.log(arr[arr.length - 1]);
