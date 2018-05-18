Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++){
      for(let j = i + 1; j < this.length; j++){
        if(this[i] > this[j]){
          sorted = false;
          let temp = this[i];
          this[i] = this[j];
          this[j] = temp;
        }
      }
    }
    if (sorted){
    break;
    }
  }
  return this;
}

let b = [5, 2 , 3 ,4 , 1];

// console.log(b.bubbleSort());

String.prototype.substrings = function() {
  let substrs = []
  for (let i = 0; i < this.length; i++ ) {
    for (let j = i+1; j < this.length+1; j++) {
      substrs.push(this.slice(i, j));
    }
  }
  return substrs;
}
let str = "string"
// console.log(str.substrings());
