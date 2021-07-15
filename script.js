//current tempurature
const kelvin = 450;
// convert Kelvin to Celsius
const celsius = kelvin - 293;
//convert celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//Round down the fahrenheit variable
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature ${fahrenheit} degrees fahrenheit.`);