function PowersofTwo(num) { 
  var sqrt = Math.sqrt(num);
  if(sqrt % 1 !== 0){
    console.log(sqrt);
    return false;
  }
  else {
  console.log(sqrt);
  return true;
  }
}

PowersofTwo(61);