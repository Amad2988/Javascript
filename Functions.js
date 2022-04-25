//function greet(username)

//{
//    console.log(`Hello ${username}`);
//}




/*function countDown( number = 10, username)
    {
        greet(username)
        for(let i= number; i >= 0; i--){
            console.log(i);
        }
    }

    countDown( 'Abraham' , 5)
*/

/*const add = (value1, value2) => {
    if (value1 === 0){
        return `first value was 0`
    }
    console.log(value1 + value2);
    return value1 + value2
}

let result = add(3,3)
console.log(typeof result)
console.log(result + 10)
*/

let addTwo = (num1, num2) =>{
    
    return num1 + num2
}

let output = addTwo(5,2)
console.log(output)
    
const addS = (string) =>{
    return string + 's'
}
console.log(addS('string'))

const sayHello = phrase =>
console.log(`Hi, ${phrase}`)

sayHello('Friend')

let wereAwesome = (classmatename, myname) =>{
    return classmatename + ' and' + myname + ' are awesome!'
}
let result = wereAwesome('Jason',' Amad')
console.log(result)

 


function isOdd(num){
    if (num%2 === 0){
        return false
    }else {
        return true
    }
} 
console.log(isOdd(3))