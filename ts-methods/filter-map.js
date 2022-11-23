var myArray = [
    { key: 0 },
    { key: 1 },
    { key: 2 },
    { key: 3 },
    { key: 4 }
];
var newArray = myArray.filter(function (item) {
    return item.key > 2;
}).map(function (item) { return ({
    key: item.key * 2
}); });
console.log('myArray :', myArray);
console.log('newArray :', newArray);
