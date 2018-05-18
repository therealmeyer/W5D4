Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}
//
// double_cb = function(el){
//   console.log(el * 2);
// }
//
// console.log([1,2,3].myEach(double_cb));


Array.prototype.myMap = function (callback) {
  let mapArray = []

  inner_cb = el => mapArray.push(callback(el));

  this.myEach(inner_cb)
  return mapArray;
}

// square_cb = function (el) {
//   return el * el;
// }
square_cb_one_liner = el => el * el;
//
let a = [1,2,3];
// console.log(a.myMap(square_cb_one_liner));

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = 0;
  if (initialValue) {
    acc = initialValue;
  }
  inner_cb = (el) => acc = callback(acc, el);
  this.myEach(inner_cb);
  return acc;
}

add_callback = function(acc, el) {
  return acc + el;
}

// console.log(a.myReduce(add_callback, 5));
