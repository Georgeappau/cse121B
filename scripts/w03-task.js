/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers() {
    const addNumber1 = parseFloat(document.getElementById("add1").value);   
    const addNumber2 = parseFloat(document.getElementById("add2").value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    const sub1 = parseFloat(document.getElementById('subtract1').value);
    const sub2 = parseFloat(document.getElementById('subtract2').value);

    document.querySelector('#difference').value = subtract(sub1, sub2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const multiply1 = parseFloat(document.getElementById('factor1').value);
    const multiply2 = parseFloat(document.getElementById('factor2').value);

    document.querySelector('#product').value = multiply(multiply1, multiply2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

function divideNumbers(){
    const divide1 = parseFloat(document.getElementById('dividend').value);
    const divide2 = parseFloat(document.getElementById('divisor').value);

    document.querySelector('#quotient').value = divide(divide1, divide2);

}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const arrayElement = document.getElementById('array')
arrayElement.innerHTML = numbersArray;
/* Output Odds Only Array */
document.getElementById('odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);

/* Output Evens Only Array */
document.getElementById('evens').innerHTML = numbersArray.filter (number => number % 2 == 0);

/* Output Sum of Org. Array */
document.getElementById('sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.getElementById('multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
const multipliedAndSummed = numbersArray
  .map((number) => number * 2) 
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0); 

document.querySelector('#sumOfMultiplied').textContent = multipliedAndSummed;