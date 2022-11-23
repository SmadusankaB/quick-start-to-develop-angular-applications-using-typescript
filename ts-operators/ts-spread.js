var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var myArray = [
    { key: 0 },
    { key: 1 },
    { key: 2 },
    { key: 3 },
    { key: 4 }
];
// const myObject = { ...myArray }
// console.log('myArray :', myArray);
// console.log('myObject :', myObject);
var newArray = myArray.map(function (item, i) { return (__assign(__assign({}, item), { new_key: i })); });
console.log('myArray :', myArray);
console.log('newArray :', newArray);
