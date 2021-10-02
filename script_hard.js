let num = 266219;

let res = 1;
String(num).split('').forEach(a => {
    res = res * a;
})
console.log(res)
