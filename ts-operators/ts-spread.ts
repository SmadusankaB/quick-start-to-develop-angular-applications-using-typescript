const myArray = [
  { key: 0 },
  { key: 1 },
  { key: 2 },
  { key: 3 },
  { key: 4 }
];

// const myObject = { ...myArray }
// console.log('myArray :', myArray);
// console.log('myObject :', myObject);


const newArray = myArray.map((item, i) => ({
  ...item,
  new_key: i
}));
console.log('myArray :', myArray);
console.log('newArray :', newArray);

