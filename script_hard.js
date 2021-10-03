let num = 266219;

let res = 1;
String(num).split('').forEach(a => {
    res = res * a;
})
console.log(res)

let result = res ** 3;

console.log(String(result).slice(0, 2));
