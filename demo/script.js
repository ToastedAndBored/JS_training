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


const price = 99.999999

console.log(price.toFixed(1))
console.log((6.63).toFixed())

console.log((100.213).toPrecision(3))

console.log((100).toString(2))

console.log(
  Math.random()
)
console.log(Math.abs(-1))
console.log(Math.pow(5, 2))
console.log(Math.min(1,2,4,-1))

const nums = [1,2,3,5,76]
console.log(Math.max(...nums))

console.log(Math.trunc(3.45))

const exemp = '100zfsdfsfsfs'

console.log(parseInt(exemp))

