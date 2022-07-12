function solveEquation(a, b, c) {
  'use strict';
  
  let arr = [];

  let d = b**2 - 4*a*c;

  
  let x, x1;
  
  if (d < 0) {
    console.log(arr);
  } else if (d === 0) {
      x = -b/(2*a);
      arr.push(x);
      console.log(arr);
  
  } else if (d > 0) {
     x = (-b + Math.sqrt(d) )/(2*a);
     x1 = (-b - Math.sqrt(d) )/(2*a);
     arr.push(x, x1);
     console.log(arr);
    
  }
    return arr;
}





function calculateTotalMortgage(percent, contribution, amount, date) {
  'use strict';
  let totalAmount;
  let currentDate = new Date();
  let creditBody = amount - contribution;
  let creditPeriod = date - currentDate;
  // let percentRatio = 1/12*percent;
  // let mounthlyPayment = creditBody*(percentRatio + (percentRatio / (1 + percentRatio)**))
  
console.log(creditPeriod)


  return totalAmount;
}
