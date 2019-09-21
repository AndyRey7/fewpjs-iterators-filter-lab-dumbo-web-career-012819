// Code your solution here
const findMatching = (array, drivers) => {
  return array.filter(driver => driver.toLowerCase() === drivers.toLowerCase())
}