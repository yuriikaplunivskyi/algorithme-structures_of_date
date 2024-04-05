/* [en]
Steamroller

Flatten a nested array. You must account for varying levels of nesting.
*/

function truthCheck(collection, pre) {
  
  for ( let obj of collection) {
    if (!obj.hasOwnProperty[pre]){
      return false;
    }
    if (!obj[pre]) {
      return false;
    }
  }
  return true;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
