Array.prototype.uniq = function() {
  let uniqArray = [];
  for (let i = 0; i < this.length; i++) {
    if (!uniqArray.includes(this[i])) {
      uniqArray.push(this[i]);
    }
  }
  return uniqArray;
}
// console.log([1,2,4,4,3,2,1].uniq())

Array.prototype.twoSum = function() {
  let sumsArray = [];
  // debugger
  for (let i = 0; i < this.length-1; i++) {
    for(let j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        sumsArray.push([i,j]);
      }
    }
  }
  return sumsArray;
}

// console.log([1,2,-2,-1].twoSum())

Array.prototype.transpose = function() {

  let transposed = [];
  for (let i = 0; i < this[0].length; i++) {
    transposed.push([]);
    for(let j = 0; j < this.length; j++) {
      transposed[i].push(this[j][i]);
    }
  }
  return transposed;
}

// console.log([[0,1],[4,5],[2,3]].transpose());
