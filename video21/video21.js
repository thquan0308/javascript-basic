console.log(`Hello world from HTML`);

let arr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
  { name: "Alice", age: 25 },
  { name: "Sam", age: 40 },
  { name: "Tom", age: 45 },
  { name: "Jerry", age: 50 },
];

//filter, find

let filter = arr.find((item, index) => {
  return item && item.age === 55;
});
console.log(filter);
