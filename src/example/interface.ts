{
  console.log('-----------------------interface')

  interface INameInfo {
    firstName: string,
    lastName: string,
    readonly age?: number,

    [prop: string]: any
  }

  let nameInfo: INameInfo = {
    firstName: 'firstName',
    lastName: 'lastName'
  }
  // nameInfo.age = 10 // 报错 因为设置了只读
  const getName = (obj: INameInfo): string => {
    return `
    firstName: ${obj.firstName}
    lastName: ${obj.lastName}
    age: ${obj.age}
    height: ${obj.height}
    `
  }
  console.log(getName({
    firstName: '周',
    lastName: '华飞',

    1: 'a', // 不会报错，数字键会自动转成字符串
    height: 183
  }))

  interface INameInfo2 {
    firstName: string,
    lastName: string,
    readonly age?: number,

    [prop: number]: any
  }

  let nameInfo2: INameInfo2 = {
    firstName: '',
    lastName: '',

    // height: '', // 报错，键需要是数字
    1: '2'
  }

  interface IArray {
    0: number,
    1: string,
    2: boolean
  }

  let arr: IArray = [0, '1', true]
  console.log(arr)

  // 类型别名
  type IMyFn = (n1: number, n2: number) => number
  const getMyName: IMyFn = (n1, n2) => {
    return n1 + n2
  }
  console.log(getMyName(1, 2))

  // 接口的集成
  interface IParent {
    name: string
  }

  interface IChild extends IParent {
    age: number
  }

  let obj: IChild = {
    name: 'name',
    age: 18
  }
  console.log(obj)

  // 让函数可以有属性
  interface Ifn2 {
    (): void,

    count: number
  }

  const fn = (): Ifn2 => {
    const c = () => {
      c.count++
    }
    c.count = 0
    return c
  }
  const c: Ifn2 = fn()
  c()
  c()
  console.log(c.count)

  // 联合类型（|） 和 交叉类型（&）
  var hello: string | number
  hello = 1
  hello = 'a'
  var world: { a: string } & { b: number }
  world = { a: 'a', b: 2 }
}
