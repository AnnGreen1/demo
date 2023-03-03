for (let i = 0; i < 2; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
for (var i = 0; i < 2; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
for (i = 0; i < 2; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
for (var i = 0; i < 2; i++) {
  console.log(i);
}
for (i = 0; i < 2; i++) {
  console.log(i);
}
for (let i = 0; i < 2; i++) {
    console.log(i);
  }
// for (let i = 0; i < 10; i++) {
//     console.log(i)
//   }
//   console.log(i) // 报错：Uncaught ReferenceError: i is not defined
