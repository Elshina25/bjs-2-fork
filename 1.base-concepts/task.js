'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  let x, x1;
  
  if (d < 0) {
    arr;
 
  } else if (d === 0) {
      x = -b/(2*a);
      arr.push(x);
      
  } else if (d > 0) {
     x = (-b + Math.sqrt(d) )/(2*a);
     x1 = (-b - Math.sqrt(d) )/(2*a);
     arr.push(x, x1);
  }
    return arr;
}





function calculateTotalMortgage(percent, contribution, amount, date) {


  if (isNaN(percent)) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }
    percent = parseInt(percent);
  

  if (isNaN(contribution)) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  }
    contribution = parseInt(contribution);
  

  if (isNaN(amount)) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  } 
    amount = parseInt(amount);
  


  let creditBody = amount - contribution;
  let percent1 = percent / 100;
  let percentRatio = percent1 / 12;
  let currentDate = new Date();
  let differenceInDate = date.getTime() - currentDate.getTime(); //разница между датами в миллисекундах
  let month = 1000 * 60 * 60* 24 * 30; //месяц в миллисекундах 
  let differenceInMonth = differenceInDate / month; //нахождение количества месяцев между датами 
  let creditPeriod = Math.trunc(differenceInMonth); 
  let mounthlyPayment = creditBody * (percentRatio + (percentRatio / (((1 + percentRatio) **creditPeriod) - 1)));
  let totalAmount = mounthlyPayment * creditPeriod;

  return +totalAmount.toFixed(2);

}