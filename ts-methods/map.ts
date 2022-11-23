const myArray = [
  { key: 0 },
  { key: 1 },
  { key: 2 },
  { key: 3 },
  { key: 4 }
];

// const newArray = myArray.map(item => 
//   item.key * 2
// );

const newArray = myArray.map(item => ({
  key: item.key * 2
}));
console.log('myArray :', myArray);
console.log('newArray :', newArray);
