//1.js
const sayHello = (name) => {
    console.log(`Hello ${name}!
Hello ${name}!`)
}

//sayHello =5
//`` used for interpreted text (~ key)
sayHello('Andrei')
console.log(sayHello('Andrei'))

let sayHello2 = (name)=> `Hello ${name}!`
console.log(sayHello2('ANDREI'))
console.log(process.argv)

if (process.argv.length >2){
    console.log(sayHello2(process.argv[2]))
}else{
    console.log('not enough params')

}
// javascript data type
// simple types number float; string; boolean
// complex types array; objects


//2.js
function concatenate(a){
    return a.join(' ')
}
let sampleArray = ['one', 'two', 'three']
console.log(concatenate(sampleArray))

// in the background function is an object it can be instantiated etc


//3.js
const checkDivisibility = function (n,d){
    if(n%d){
        return false
    }
    else{
        return true
    }
}

console.log(checkDivisibility(7,2))


//4.js
function strDiff(s1,s2){
    if(s1.length !== s2.length){
        // in js !== also checks for implicit type of data
        // exp. "5"!==5 true
        // "5"!=== false (also checks for types)
        return -1;
    }
    let diffCount = 0
    for(let i=0;i<s1.length;i++){
        if(s1[i]!==s2[i]){
            diffCount++
        }
    }
    return diffCount
}

console.log(strDiff('cat','mat'))
console.log(strDiff('cat','one'))
console.log(strDiff('cat','cats'))

//5.js
function add(a,b,c){
    return a+b+c
}

//js can interpret types of data
console.log(add(1,2,3))
console.log(add(1,2,3,4)) // this works
console.log(add(1,2)) // this returns NaN (Not a Number)
console.log(add(1,2,"cat")) // this works

//destructuring
// ...destructuring operator

let sampleArray = [1,2,3]
let [a,b,c]=sampleArray

function buildArray(source, ...args){
    
    //this is similar wiht foreach in other languages
    for (let element of args){
        source.push(element)
    }
    return source
    //a vector is a list(structure) not an actual array
}

console.log(buildArray([1,2,3],4,5,6,7,8))

//6.js
function intersperse(a,b){
    if(a.length!== b.length){
        return null
    }
    const result =[] //its a reference its value its not actual constant (we can write in this vector)

    for (let i=0;i<a.length;i++){
        result.push(a[i])
        result.push(b[i])
    }
    return result

}
console.log(intersperse([1,2,3],['a','b','c']))

//7.js
//in js you can use objects as dictionaries

const sampleString = 'the quick brown fox jumps over the lazy dog'

function countAppearances(s){
    const letters = s.split('')
    const result = {}
    for(let letter of letters){
        if (letter in result){
            result[letter]++
        }
        else{
            result[letter]=1
        }
    }
    return result
}
console.log(countAppearances(sampleString))

