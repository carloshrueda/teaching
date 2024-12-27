const letters = "0123456789ABCDEF";
let a = Array(6).fill("").reduce(
    p => p += letters[Math.floor(Math.random() * 16)]
    , "#")
console.log(a);
