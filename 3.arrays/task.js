function compareArrays(arr1, arr2) {
  // let result = JSON.stringify(arr1) === JSON.stringify(arr2);
  let result = arr1.length === arr2.length && arr1.every((items, i) => i === arr2.indexOf(items));
  return result;
}
compareArrays([53, 45, 21],[53, 45, 22]);

function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  return resultArr; // array
}
