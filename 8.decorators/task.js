function cachingDecoratorNew(func) {
  let cache = [];
 
 
  function wrapper (...args) {
    let obj = {hash: args.join(), value: func(...args)};
    const objInCache = cache.find(item => item.hash === obj.hash);
  
    if (objInCache) {
        console.log(`Из кэша: ${obj.value}`);
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

function debounceDecoratorNew(func, delay) {
  let flag = true;
  let timeOut = null;
  wrapper.count = 0;
  wrapper.allCount = 0;
  function wrapper(...args) {
    if (flag) {
      func(...args);
      wrapper.count++;
      flag = false;
    }

    if (timeOut === null) {
      timeOut = setTimeout(() => {
        func(...args);
        wrapper.count++;
      }, delay);
      
    } else {
      clearTimeout(timeOut);
      timeOut = null;
    }
    wrapper.allCount += wrapper.count;
  } return wrapper;
}


