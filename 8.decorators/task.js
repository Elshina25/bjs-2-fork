function cachingDecoratorNew(func) {
  let cache = [];
 
 
  function wrapper (...args) {
    let obj = {hash: args.join(), value: func(...args)};
    const objInCache = cache.find(item => item.hash === obj.hash);
  
    if (objInCache) {
        console.log(`Из кэша: ${obj.value}}`);
        return `Из кэша: ${obj.value}`;
    } 
    
    const result = func.call(this, ...args);
    cache.push(obj);

    if (cache.length > 5) {
      cache.shift();
    }
    console.log(`Вычисляем: ${result}`);
    return `Вычисляем: ${result}`;
  } return wrapper;
} 


addThree = (a, b, c) => a + b + c;
upgradedAddThree = cachingDecoratorNew(addThree);


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
