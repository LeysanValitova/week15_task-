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
   console.log(numbers[i] ** 2);
}


// 3.3

const sortNumders = numbers.sort((a, b) => b - a);
console.log(sortNumders)
