
//adding two numbers
function add(n1:number,n2:number)
{
    return n1+n2
}

let n1=6;
let n2=6;
let adding=add(n1,n2);
console.log("result of adding " +n1+ "and  "+n2+ "is " + adding);


//check for even and odd
function checkEvenOrOdd(n1:number)
{
    if(n1%2==0)
    {
        console.log("Number is Even")
    }
    else
    {
        console.log("Number is Odd")
    }
}

let number=4;
let checkEvenodd=checkEvenOrOdd(number);
console.log("number is "+checkEvenodd+"\n");



//calculating area
function calculateArea(length:number,width:number)
{
   return length*width; 
}

var length=23;
var width=3;
let area=calculateArea(length,width);
console.log(`The area of the rectangle with width ${width} and height ${length} is: ${area} square units.\n`);


//reverse string
function reverseString(inputstring:string)
{
    return inputstring.split('').reverse().join('');
}
var inputstring:string="Laraib"
var reverse:string=reverseString(inputstring)
console.log("Reverse string " +reverse);
console.log("\n");



//converting celcius to fahrenheit
function convertCelsiusToFahrenheit(celsius:number)
{
    const fahrenheitTemperature: number = (celsius * 9/5) + 32;
    return fahrenheitTemperature;
}
const celsius: number = 25;
const fahrenheitValue: number = convertCelsiusToFahrenheit(celsius);
console.log(`${celsius} degrees Celsius is equal to ${fahrenheitValue.toFixed(2)} degrees Fahrenheit.`);

