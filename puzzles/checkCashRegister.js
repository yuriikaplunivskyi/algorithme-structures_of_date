/* [ua]
Касовий апарат

Розробіть функцію касового апарату checkCashRegister(), яка приймає ціну покупки як перший аргумент (price), оплату як другий аргумент (cash) та суму готівки в касі як третій аргумент (cid).

cid — це 2D масив, який містить список доступного обігу.

Функція checkCashRegister() завжди повинна повертати об’єкт з ключем status та ключем change.

Поверніть {status: "INSUFFICIENT_FUNDS", change: []}, якщо сума готівки в касі менша за здачу, або ви не можете віддати здачу.

Поверніть {status: "CLOSED", change: [...]} з сумою в касі як значення ключа change, якщо воно дорівнює здачі.

В іншому випадку, поверніть {status: "OPEN", change: [...]} зі здачею в монетах і банкнотах, в порядку від найбільшої до найменшої, як значення ключа change.
Грошовий обіг	Сума
Пенні	$0.01 (ПЕННІ)
Нікель	$0.05 (НІКЕЛЬ)
Дайм	$0.1 (ДАЙМ)
Чверть	$0.25 (ЧВЕРТЬ)
Долар	$1 (ОДИН)
П’ять доларів	$5 (П’ЯТЬ)
Десять доларів	$10 (ДЕСЯТЬ)
Двадцять доларів	$20 (ДВАДЦЯТЬ)
Сто доларів	$100 (СТО)

Подивіться нижче на приклад масиву з сумою в касі:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]


*/

function checkCashRegister(price, cash, cid) {
  let currencyUnitValues = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];
  const result = 
    { 
      status: "",
      change: []
    };
  let change = cash - price;
  let totalCid = cid.reduce((total, amount) => total + amount[1], 0);
  if( totalCid < change ) {/* перевіряємо чи вистачає в кассі на решту */
    return  {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  } else if( change === totalCid ) {/* якщо ціна дорівнює сумі в кассі то поветаємо інформацію про те що касса зачинена бо покупець отримав всі номінали з каси на решту */
    return  {
      status: "CLOSED",
      change: [...cid]
    }
  } else {
    for(let i = currencyUnitValues.length -1; i >= 0  ; i--){
      let tempChange = 0;
      while(change >= currencyUnitValues[i][1] && cid[i][1] > 0){
        tempChange += currencyUnitValues[i][1];/* додаємо номінал допоки решта більше чи рівна номіналу в масиві за індексом */
        cid[i][1] -= currencyUnitValues[i][1];
        change -= currencyUnitValues[i][1];/* віднімаємо від решти значення номіналу */
        change = Number(change.toFixed(2));/* обмежуємо точність до двох десятичних знаків */
      }
      if(tempChange > 0){
        result.change.unshift([currencyUnitValues[i][0], tempChange]);
      }
    }
  }
  if(change > 0){
    return  {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }
  result.status = "OPEN";
  return result;
}

// Test Case

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
