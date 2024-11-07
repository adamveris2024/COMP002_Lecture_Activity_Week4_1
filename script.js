let newArray = [50, 10, 20, 30, 80];

console.log(newArray[0])
console.log(newArray[4])

/* if the pushes are not put here on the stack, they will not appear in the loop.
    the numbers added by push are displayed in sequence after the original numbers */
newArray.push(65)
newArray.push(45)
newArray.push(32)
newArray.push(99)
newArray.push(76)
/***************************************/
newArray.pop(99)
newArray.pop(76)
newArray.pop(32)

/***************************************/

iterate(newArray)

function iterate(array) {
    
    for (let i = 0; i < newArray.length; i++){
        console.log(`newArray[${i}]: ${newArray[i]}`)
    }
}

/***************************************/

let myString = "Hello World!"
console.log(myString.length)