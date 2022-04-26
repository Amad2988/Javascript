//const myArray = [Math.floor(Math.random() * 10),3,4,5]
//console.log(Array.isArray(myArray))

//myArray[2] = 78;

//console.log(myArray)

/*
const netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// ADD CODE HERE
netflixShows.push('Squid Game')

// Write a console.log statement below to check your work!
console.log(netflixShows)

const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

// ADD CODE HERE
const fourthItem = horror[3]

// Write a console.log statement below to check your work!
console.log(fourthItem)

*/

/*const names = ['Johnathan', 'Lorenzo', 'Matthew', 'Tony']

//console.log(names.length);

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}*/

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = []

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE

for (let i = 0; i < synonyms.length; i++){
    greetings.push(`Have a ${synonyms[i]} day`)
    
}

//console.log(greetings)


// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE

//console.log(greetings[0])
//console.log(greetings[1])
//console.log(greetings[2])

const increaseByTwo = [1, 2, 3, 4, 5]





//const numbers = [45, 67, 23, 56, 784, 4, 5,]
//const output = []

//numbers.forEach(num => console.log(num * 2))

//console.log(output)



// ADD CODE HERE
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];

function appendStr(char){

    alphabet += char;

}


function forEach(array, callback){
    for(let i=0; i < array.length; i++){
        callback(array[i])
    }
}
  



forEach(letters, appendStr);

console.log(alphabet)
console.log(typeof forEach); // should log: 'function'
//forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
//console.log(typeof map); // should log: 'function'
//console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]
    

// ADD CODE HERE

let subtractTwo = (num1) =>{
    return num1 - 2  
}

let map = (array, callback)=>{
let array2 = []
    for(let i = 0; i < array.length; i++){
        array2.push(callback(array[i]))
    }
    return array2
}


    



 //map([3,4,5], subtractTwo); //-> [1,2,3]
 //subtractTwo(10); //-> 8
 //subtractTwo(12); //-> 10



// Uncomment these to check your work!
 console.log(typeof subtractTwo); // should log: 'function'
 console.log(typeof map); // should log: 'function'
 console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]










