// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = sum / arr.length;

  for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
    avg = sum / arr.length;
    
    if (min > arr[i]) {
      min = arr[i];
    } 
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return { min: min, max: max, avg: +avg.toFixed(2) };
}




// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func, func2) {
  let max;
  
  for (let k = 0; k < arrOfArr.length; k++) {
    max = func(arrOfArr[k]);
    if (func(arrOfArr[k+1]) > max) {
      max = func(arrOfArr[k+1]);
    } 
  return max;
  }

  for (let j = 0; j < arrOfArr.length; j++) {
    let result = func2(arrOfArr[j]);
    return result;
  }
}
makeWork([[10,10,20],[20,19,10]], worker);




// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let minus;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  minus = max - min;
  Math.abs(minus);
  return minus;
}
makeWork([[10,10,20],[20,19,10]], worker2);