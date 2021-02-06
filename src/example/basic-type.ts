{
  console.log('-----------------------------------------------')
  let boolean: boolean = false
  console.log('let boolean: boolean\n', boolean)
  let array: number[] = [1, 2, 3]
  console.log('let array: number[]\n', array)
  let array2: Array<string> = ['a', 'b', 'c']
  console.log('let array2: Array<string>\n', array2)
  let array3: (number | string)[] = [1, 2, 3, 'a', 'b', 'c']
  console.log('let array3: (number | string)[]\n', array3)
  let array4: Array<number | string> = [1, 2, 3, 'a', 'b', 'c']
  console.log('let array4: Array<number | string>\n', array4)
  // 元组
  let array5: [string, number, boolean] = ['a', 1, true]
  console.log('let array5: [string, number, boolean]\n', array5)
}
