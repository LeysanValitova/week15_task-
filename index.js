// 1
const numbers = [];

// 2
for(let i = -10; i <= 10; i++) {
    numbers.push(i);
}
console.log(numbers);

// 3.1

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] < 0) {
        numbers.splice(i, 1)
        i--
    }
}

console.log(numbers);

// 3.2

for( let i = 0; i < numbers.length; i++) {
   return numbers[i] ** 2;
}

console.log(numbers)

// 3.3

for(let i = 0; i < numbers.length; i++) {
    
}
