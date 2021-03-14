
exports.min = function min (array) {
  if (array&&array.length!==0){
    return (Math.min.apply(null,array))
  }else{ 
  return 0;
}
}

exports.max = function max (array) {
  if (array&&array.length!==0){
    return (Math.max.apply(null,array))
  }else{
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array&&array.length!==0){
    let sum = array.reduce((a,b)=>a+b)
    return (sum/array.length);
  }else{
    return 0
  }
}