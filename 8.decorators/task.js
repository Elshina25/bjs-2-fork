function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper (...args) {
    let obj = {hash: args.join(), value: ''};
    const objInCache = cache.find(item => item.hash === obj.hash);
    if (objInCache) {
        console.log(`Из кэша: ${objInCache.value}`);
        return `Из кэша: ${objInCache.value}`;
    } 
    const result = func.call(this, ...args);
    obj.value = result;
    cache.push(obj);
    if (cache.length > 5) {
      cache.shift();
    }
    console.log(`Вычисляем: ${result}`);
    return `Вычисляем: ${result}`;
  } 
  return wrapper;
} 

function debounceDecoratorNew(func, delay) {
  let intervalId;
  wrapper.count = 0;
  wrapper.allCount = 0;
  function wrapper(...args) {
    if (!intervalId) {
      func(...args);
      wrapper.count++;
    }
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      func(...args);
      wrapper.count++;
    }, delay);
    wrapper.allCount++;
  } 
  return wrapper;
}


