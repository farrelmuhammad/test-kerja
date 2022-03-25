const arr = [1, 3, 5, 7, 9, 10, 11, 12]

function gapCheck (arr) {
  const gap = []
  for (i = 1; i < arr.length; i++) {
    gap.push(arr[i] - arr[i-1])
  }
  
  return gap
}

console.log(gapCheck(arr))