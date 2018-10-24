
let knownResult = [
  [2, 3, 7, 8],
  [0, 1, 3],
  [9, 2, 8, 3]
]

let unknownResult = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

let reducer = (acc, currentRow) => {
  return acc + (Math.max(...currentRow) - Math.min(...currentRow))
}

function checkSum(data) {
  return (data.reduce(reducer, 0))
}

checkSum(knownResult)
