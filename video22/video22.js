console.log(`Hello world from HTML`);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < 10; i++) {
//   arr[i] = arr[i] * arr[i];
// }

let mapArr = arr.map((item, index) => {
  item = item * item;
  return item;
});

console.log(`check value arr: `, arr);
console.log(`check value mapArr: `, mapArr);
