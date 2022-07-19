function compareArrays(arr1, arr2) {
  // let result = JSON.stringify(arr1) === JSON.stringify(arr2);
  let result = arr1.length === arr2.length && arr1.every((items, i) => i === arr2.indexOf(items));
  return result;
}
compareArrays([53, 45, 21],[53, 45, 22]);

function advancedFilter(arr) {
  let resultArr = arr.filter(items => items > 0).filter(items => items % 3 === 0).map(items => items * 10);

  // Ваш код

  return resultArr; // array
}
advancedFilter([3,64,-4,32,5,-98,7])