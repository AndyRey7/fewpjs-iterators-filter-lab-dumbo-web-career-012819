// Code your solution here
const findMatching = (array, drivers) => {
  return array.filter(driver => driver.toLowerCase() === drivers.toLowerCase())
}

const fuzzyMatch = (drivers, string) => {
  return drivers.filter(driver => driver.indexOf(0) === string)
}