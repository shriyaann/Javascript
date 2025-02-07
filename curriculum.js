// 1.0 Intro
// -- What is JavaScript and how does it work?
// -- Install VSCode
// -- Install NodeJS

// 2.0 Node commands in terminal
// -- Running a file - node filename.js
// -- Killing a file - ctrl + c

// 3.0 Variables
// -- Hello world
// -- Console.log()
console.log("hello world")

// -- VARIABLES
// const cannot reassign the value
const mySentence = "hello world" 
// let declaration allows us to reassign a new value
let numberOfEggs = 4 
numberOfEggs = 6
console.log(numberOfEggs + 6, mySentence)

// -- Assignment by reference, refer a prev variables value to a variable
let newNumberOfEggs = numberOfEggs

// 4.0 Data Types (init / read / write)
// -- Strings
let myString = "hello my name is Shriya"
let extendedString = myString + '. And I like the color blue.'
console.log(myString[4])

// -- Numbers
const favoriteNumber = 83

// -- Arrays []
const groceryList = [
    'eggs',
    'bananans',
    'bread',
    83,
]

groceryList[1] = 'kiwi fruit'
console.log(groceryList[1])

// -- Objects {} or dictionary. Can have different data types.
//key: value pair
const dictionary = {
    ocean: 'A body of water between countries',
    sea: 'A different body of water',
    myFavoriteNumber: 83
}

const user = {
    name: 'Shriya',
    password: '*******'
}
console.log(user.name, user['password'])

//write to dict
user.name = 'Ann' //access the dict.key
user['password'] = '****' //access the dict['key']
console.log(user)

// -- Null
const unknownNumber = null

// -- Undefined
const undefinedValue = undefined
console.log(unknownNumber, undefinedValue)

// -- Booleans (true/false)

const isShriyaCool = true
let isBitterGaurdDelicious = false

// 6.0 Logic and Operators
// -- Operators (+ - / %)
const sum = 3 + 9
const division = 12 / 5
const remainder = 12 % 5
const isEven = 12 % 2
console.log('division: ', division)
console.log('remainder: ', remainder)

// -- Type of
const randomNumber = 833
console.log(typeof randomNumber, typeof 'random string')

// 7.0 Conditional Statements and Logical operators (|| &&)
// -- If else
const x = 21
if (x > 10 || x < 20) {
    // Whatever code is written in here, is conditionally executed
    console.log('The value was greater than 10, or less than 20')
} else {
    console.log('The value was not greater than 10, or it was greater than 20')
}

// 8.0 Loops
// -- While loop, has only 1 argument
let i = 0
while (i < 3) {
    console.log('THE VALUE OF I = ', i)
    i = i + 1
}

// -- For loop with Continue & break
const animals = ['duck', 'dog', 'cat', 'piggy'] 
console.log(animals)

for (let j = 0; j < animals.length; j++) { // has 3 arguments
    //const currentAnimal can be updated as its scope is only within the loop and after loop its destroyed
    const currentAnimal = animals[j]
    if (currentAnimal == 'dog') {
        //==  -> checks value
        continue
    }

    if (currentAnimal === 'cat') {
        //=== -> checks value and datatype
        break
    }
    const stringToPrint = 'The animal at index: ' + j + ' And the value at that index is: ' + currentAnimal
    console.log(stringToPrint)
}

// 9.0 Functions
// -- Create a function
function printSquare(y, z) {
    // This function prints out the square of a number
    console.log(y * z)
}
printSquare(4, 6)

// -- Invoke a function
// -- Return
function addStrings(s1 = 'Hello', s2 = 'world') { //default inputs
    const concatString = s1 + s2
    console.log(concatString)
    if (typeof s1 !== 'string' || typeof s2 !== 'string') {
        return

    }
    return concatString
}

const newString = addStrings('Shriya', ' World')
addStrings('Hello ', 'Shriya')
console.log('NEWSTRING: ', newString)

// -- Arrow functions
const arrowFunction = (arg) => {
    console.log('ARG: ', arg)
}

arrowFunction('Hi')