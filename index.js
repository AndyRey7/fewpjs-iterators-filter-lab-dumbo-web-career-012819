// Code your solution here
const findMatching = (array, drivers) => {
  return array.filter(driver => driver.toLowerCase() === drivers.toLowerCase())
}

const fuzzyMatch = (drivers, string) => {
  let lengthOfName = string.length;
  return drivers.filter(driver => driver.slice(0, lengthOfName) === string)
}

