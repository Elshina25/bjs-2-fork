// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
    if (min > arr[i]) {
      min = arr[i];
    } 
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  avg = sum / arr.length;
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

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
   
  for (let i = 0; i < arrOfArr.length; i++) {
   const result = func(arrOfArr[i]);
   if (result > max) {
    max = result;
 }
  } return max;
}
makeWork([[1,2,3], [10, 20, 30],[100, 200, 300]], worker);




// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return Math.abs(max - min);
}
makeWork([[10,10,20],[20,19,10]], worker2);