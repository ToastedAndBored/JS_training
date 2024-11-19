//console.log('ЫЫЫЫЫЫЫЫЫ');

//let m = "SSSSSS"

//console.log(m);

//let g = 'ы'
//let a = 'п'

//let message = `${g} рееееееееее ${a}`

//console.log(message)

//console.log(8n + 9n)

//console.log('a'==11)

//let count = 10

////console.log(count+=1)

////if (m>g) {
////  console.log("ыыыыы")
////} else {
////  console.log('аааааа')
////}

////alert('АААААА')

//// let user = prompt('скажи FFFFFF', 'FFFFFF')

//// if (user === 'FFFFFF') {
////   console.log('ЕЕЕЕЕЕЕЕЕ')
//// } else {
////   console.log('УЭЭЭЭЭЭЭЭЭ')
//// }

//// let age = +prompt('Сколько?')

//// switch (true) {
////   case age == 0:{
////     console.log('тебя не существует')
////     break
////   }
////   case (age>=1)&&(age<=17):{
////     console.log("ты существо мелкое")
////     break
////   }
////   case (age>=18)&&(age<=100):{
////     console.log('ты существо живое')
////     break
////   }
////   case age>100:{
////     console.log('ты мертво')
////     break
////   }
////   default:{
////     console.log('УЭЭЭЭЭЭЭЭ')
////   }
//// }
//while (count<=20) {
//  console.log(count)
//  count++
//}

//const demo = () => {
    
//}

//let aa = true

//const mes = aa === true
//  ? 'ы'
//  : 's'

//console.log(mes)

//const user = {
//  age: 28,
//  name: 'Alex'
//}

//console.log(user.name)

//const prom = prompt('ы')
//const pormm = prompt(`sdafas ${prom}`)

//const obj = {
//  [prom]:pormm
//}

//console.log(obj)

//const obj1 = { 
//  name: 'Sanya',
//  idk:{
//    name: 'Sssssanya',
//    age: 30
//  }
//}
//const obj2 = obj1

//console.log(obj1 === obj2)


//obj2.name = 'Max'

//console.log(obj2)

//const ObjEquel = (ob1, ob2) =>{
//  const keys1 = Object.keys(ob1)
//  const keys2 = Object.keys(ob2)

//  for (const key in ob1) {
//    const value1 = ob1[key]
//    const value2 = ob2[key]
//    const areValuesObj = 
//      typeof value1 === 'object' && typeof value2 === 'object'

//    if (areValuesObj){
//      return ObjEquel(value1,value2)
//    }

//    if (value1 !== value2){
//      return false
//    }
//  }
//  return true
//}

//console.log(ObjEquel(obj1,obj2))


//const obj3 = {name: 'Yar'}
//let obj4 ={}
//Object.assign(obj4,obj3)

//console.log(obj4)

//obj4 = {...obj1}

//console.log(obj4)


function add(nom1) {
  function ret(nom2) {
    return nom1+nom2
  }
  return ret
}

console.log(add(2)(3))

function retargs() {
  return () => {
    return arguments
  }
}

console.log(retargs("text")("AAAAAAAAAA"))

const user = {
  name: 'AAAAAA',
  age: 89,
  ThisExemp() {
    console.log("Это this в теле объекта user:", this)
  },
  ArrowThis: () => {
    console.log("А это что-то глобальное:", this)
  }
}

user.ThisExemp()
user.ArrowThis()

// const culc = {
//   read() {
//     this.a = +prompt()
//     this.b = +prompt()
//   },
//   sum() {
//     return this.a + this.b
//   },
//   mul() {
//     return this.a * this.b
//   }
// }


// culc.read()
// console.log(culc.sum())
// console.log(culc.mul())


// const price = 99.999999

// console.log(price.toFixed(1))
// console.log((6.63).toFixed())

// console.log((100.213).toPrecision(3))

// console.log((100).toString(2))

// console.log(
//   Math.random()
// )
// console.log(Math.abs(-1))
// console.log(Math.pow(5, 2))
// console.log(Math.min(1,2,4,-1))

// const nums = [1,2,3,5,76]
// console.log(Math.max(...nums))

// console.log(Math.trunc(3.45))

// const exemp = '100zfsdfsfsfs'

// console.log(parseInt(exemp))


// const string = 'sdfghjkl'

// console.log(string[string.length - 1])
// console.log(string.at(-1))

// console.log(string.toLowerCase())

// console.log("       adffafaf ".trim())

// console.log(string.indexOf("f"))
// console.log(string.includes("f"))

// console.log(string.includes('s', 1)) //false

// console.log(string.substring(1,0))
// console.log(string.slice(2,-2))

// console.log(string.repeat(3))

// console.log(string.replace("s","a"))

// const str = '+8 800 335 35 35'

// console.log(str.replace(/\d/g, "#")) //regular exp for all nums in string

// console.log(("sfafaf").split("f"))

// const val = prompt('Имечко:')

// const clearVal = val.trim().toLowerCase()

// if (clearVal.length === 0) {
//   alert('Нет букоф')
// }

// if (clearVal.includes('админ')) {
//   alert('АДМИН ЗДЕСЬ ТОЛЬКО Я')
// }

// console.log(clearVal)

// const arr = [1,23,4,
//   () => {console.log('SSSSSS')}
// ]

// console.log(arr[1])

// arr[3]()

// arr[1] = 43

// arr[4] = 90


// console.log(arr.at(-1))

// arr.push("6")

// arr.unshift('9')
// console.log(...arr)
// console.log(arr.pop())
// console.log(arr.shift())

// console.log(arr.join(", ").split(", "))

// const arr1 = [1,2,3,4]
// const arr2 =[...arr1]

// console.log(arr2)

// const arr3 = arr2.slice(-1)

// console.log(arr3)

// const arr4 = [...arr1, ...arr2]

// console.log(arr4)

// console.log(Array.isArray(arr4))

// arr4.forEach( (el) => {
//   console.log(el)
// })

// console.log(arr4.indexOf(1,1)
// )

// const arr5 = [
//   {
//     name: 'YA'
//   },
// ]
// console.log(arr5[0].name)
// console.log(
//   arr5.findIndex( (element, i) =>{
//     if(element.name === "YA"){
//       return true
//     }
//   }
//   )
// )


// console.log(
//   arr5.findIndex(( {name} ) => name === 'YA')
// )

// console.log(arr5.includes({name})
// )

// console.log(
//   arr5.some( (el) => el.name === 'YA'
//   )
// )

const arr6 = [
  {
    age: 30
  },
  {
    age:20
  },
  {
    age:19
  },
  {
    age:19
  }
]

console.log(
  arr6.every( (el) => el.age >= 18)
)

console.log(
  arr6.find( (el) => el.age === 19)
)

console.log(
  arr6.filter( (el) => el.age === 19)
)

const aged = arr6.map( (el) => `возраст: ${el.age}`)

console.log(aged)

const ageSum = arr6.reduce((sum, el) => {
  return sum+ el.age
}, 0)

console.log(ageSum)

const notReversedArr6 = [...arr6].reverse() 
const reversedArr6 = arr6.reverse() // arr6 got mutated

const sortedArr6 = [...arr6].sort((a,b) => a.age - b.age)

console.log(sortedArr6)



const obj = {
  name: '21e1dsf',
  age:28
}
const keys = Object.keys(obj)
const vals = Object.values(obj)
const entr = Object.entries(obj)
const frEntr = Object.fromEntries(entr)

console.log(keys,vals,entr)
console.log(frEntr)

const data = new Map()

data.set(1, 23)
data.set(2, 13)

console.log(data.get(1))
console.log(data.has(2))
console.log(data.size)

data.delete(1)
data.clear()

const data1 = new Set([1,1,1,1,1,1,2,3,4])
data1.add(6)
console.log(data1)

const json = {
  name: 'afsgerghs',
  age: 28,
  city: 'dfghjkl;'
}

console.log(JSON.stringify(json))

const a = JSON.stringify(json)

console.log(JSON.parse(a))

class User {
  planet = 'Earth'
  static static = "fsfsfs" 

  constructor(name, age) {
    this.name = name
    this.age = age
  }

  logAge(){
    console.log(this.age)
  }
  set city(value){
    this._city = value
  }
  get city(){
    return this._city
  }

  #secreeeeeeet(){
    //...
  }
}

const user1 = new User("OLEG", 29)

user1.logAge()

user1.city = "fewfwwg"

class Dev extends User {
 constructor(name, age,experience) {
   super(name,age)
   this.experience = experience
 }

  writeCode(){
    console.log("Пишууууууууу....")
  }

}

const user2 = new Dev("ANTON",99.999999,0)

user2.writeCode()

// function bi() {
//   console.log('ы')
// }

// setTimeout(bi, 200)

// const logHello = (name,age) => {
//   console.log(`Hello ${name}, you're ${age} years old`)
// }

// const idTime = setTimeout(logHello, 2000,"ЫNOKENTI", 200)

// clearTimeout(idTime)

// const idInter = setInterval(logHello, 200,"LOX",0)

// setTimeout(() => {
//   clearInterval(idInter)
// }, 2000)

// setTimeout(function log() {
//   alert("alert)
//   console.log(bi())

//   setTimeout(log,1000)
 
// }, 2000)
const bi = "s"
try {

  if (bi === "s") {
    throw new Error("ТАК НАДО")
  }
  bi.forEach(element => {
    console.log(element)
  })
} catch (error) {
  console.log("Ошибка: ",error.name, error.message, error.stack)
}


