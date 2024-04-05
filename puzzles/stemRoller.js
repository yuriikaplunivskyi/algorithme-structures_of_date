/* [en]
Steamroller

Flatten a nested array. You must account for varying levels of nesting.

*/

function steamrollArray(arr) {
  let flatArr = [];
  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])) {
      let innerArr = steamrollArray(arr[i]);
      flatArr.push(...innerArr);
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));