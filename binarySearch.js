/* В бінарному пошуку кожного разу перевіряється середній елемент 

ВАЖЛИВО РОЗУМІТИ ЩО БІНАРНИЙ ПОШУК ПРАЦЮЄ ТІЛЬКИ У ВІДСОРТОВАНОМУ МАСИВІ ДАНИХ.

  O(log n)
*/
function binarySearch (list, item) {

  let sortedList = list.sort((a, b)=> a - b);// сортуємо наш масиив від меншого до більшого, для рядків потрібно перевіряти по toLowerCase().charAt()
  let low = 0;
  let high = sortedList.length-1;//зберігаємо границі тої частини списка в якій перевіряємо

  while ( low <= high) {//поки ця части не скоротиться до одного елемента 
    const mid = Math.floor(low+high/2);//перевіряємо середній елемент
    const guess = sortedList[mid];

    if ( guess == item) {//елемент знайдено
      return mid;
    } else if (guess > item) {//багато
      high = mid - 1;//обновлюються змінні границь пошуку
    } else {//мало
      low = mid + 1;//обновлюються змінні границь пошуку
    }
  }
  return null;// елемаента не існує в масиві
}

let array = [ 4, 9, 1, 2, 3,  8, 12, 32, 51]
let arrayName = [ "Andriy", "Tony", " Yurii", "Alexander", "Oleksiy", "Dmytro", "Artem", "Yaroslasv"]

console.log( binarySearch(array, 4))
console.log( binarySearch(arrayName, "Yaroslasv"))