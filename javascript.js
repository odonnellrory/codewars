function createPhoneNumber(numbers){
  let str = ""
  for (let i = 0; i < 10; i++) {
    if (i === 0) {
      str += `(${numbers[i]}`
    }
    if (i === 1) {
      str += numbers[i]
    }
    if (i === 2) {
      str += `${numbers[i]}) `
    }
    if (i > 2 && i < 6) {
      str += numbers[i]
    }
    if (i === 6) {
      str += `-${numbers[i]}`
    }
    if (i > 6) {
      str += numbers[i]
    }
  }
  return str
}
