function cachingDecoratorNew(func) {
  let cache = {};
  return function(...args) {
    const hash = args.join(',');
    if (hash in cache) {
      return cache[hash];
    }

    const result = func.call(cache, ...args);
    cache[hash] = result;
    return result;
  } 
}

add2 = (a, b) => a + b;
upgAdd2 = cachingDecoratorNew(add2);

addThree = (a, b, c) => a + b + c;
upgradedAddThree = cachingDecoratorNew(addThree);


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
