
function fibonacci(num: number): number {
    if (num <= 1) {
        return num
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
}

// @ts-ignore
let number: number = +prompt("nhaapj")
let sum: number = 0;
for (let i = 0; i < number; i++) {
        console.log(fibonacci(i))
        sum += fibonacci(i)
}
console.log("tổng là: " + sum)

