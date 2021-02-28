module.exports = function check(str, bracketsConfig) {
  let stack = []
  let open = []
  let close= []
  let same = []

  bracketsConfig.forEach((item)=> {
    if (item[0] !== item[1]) {
      open.push(item[0])
      close.push(item[1])
    } else {
      same.push(item[0])
    }
  })

  for (let i =0; i<str.length; i++) {
    let char = str[i]
    if (open.includes(char)) {
      stack.push(char)
    } else if (close.includes(char) && char !== close[open.indexOf(stack.pop())] ) {
      return false
    } else if (same.includes(char) && !(stack.includes(char))) {
            stack.push(char)
    } else if (same.includes(char) && stack.includes(char)) {
      if (stack.pop() !== char) {return false}
    }
  }
  if (stack.length !==0) {
    return false
  }
  return true
}


