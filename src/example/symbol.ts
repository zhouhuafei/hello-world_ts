{
  console.log('-----------------------')
  const s = Symbol('myFirstSymbol')
  console.log(`Symbol('myFirstSymbol')\n`, s)
  const obj = { [s]: 'hello world', name: 'name' }
  obj[s] = '只能通过方括号的方式修改值，不能通过点的方式修改值'
  console.log(`for in遍历不到obj上的s属性，因为s是symbol类型`)
  console.log('Object.keys(obj)\n', Object.keys(obj)) // 可枚举才能获取到
  console.log('Object.getOwnPropertyNames(obj)\n', Object.getOwnPropertyNames(obj)) // 不可枚举也能获取到
  console.log('JSON.stringify(obj)\n', JSON.stringify(obj))
  console.log('Object.getOwnPropertySymbols(obj)\n', Object.getOwnPropertySymbols(obj))
  console.log('Reflect.ownKeys(obj)\n', Reflect.ownKeys(obj))
  console.log(Symbol('h') === Symbol('h')) // false
  console.log(Symbol.for('h2') === Symbol.for('h2')) // true
  console.log(Symbol.keyFor(Symbol.for('hello'))) // hello 可以拿到用for创建的symbol类型数据的描述
  // console.log(Symbol.for('hello1').description) // hello1 js里可以直接这样用 ts里会报错
  // console.log(Symbol('hello2').description) // hello2 js里可以直接这样用 ts里会报错
  console.log('Symbol的值是唯一的\n', obj, obj[s])
}
