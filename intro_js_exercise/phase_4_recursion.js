function range(start, end) {
  if (start === end) {
    return [start];
  }
  else {
    return [start].concat(range(start+1, end));
  }
}
// console.log(range(1,5));

function recSum(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  else {
    return arr[0] + recSum(arr.slice(1))
  }
}
// console.log(recSum([1,2,3,4]));

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  else {
    return base * exponent(base, exp-1);
  }
}

// console.log(exponent(3,3))

function fibonacci(n){
  if (n === 1){
    return [1]
  }else if (n===2) {
    return [1,1]
  }else{
    let temp = fibonacci(n-1)
    return temp.concat(temp[temp.length-1] + temp[temp.length-2])
  }
}

console.log(fibonacci(100))
