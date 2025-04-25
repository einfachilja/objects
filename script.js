// 01 - Objects: Basics (Key-Value-Pair)
/*
let myObjects = {
    'name': 'Ilja', 
    'age': 34,
    'job': {
        'name': 'Digital Innovation Manager',
        'company': 'stadtenergie',
        'Probezeit': false,
    },
    'good_guy': true
};

console.log(myObjects); // ganzes object ausgeloggt

console.log(myObjects.job.name); // bessere Variante (Notation) um auf Objetcs zuzugreifen

console.log(myObjects['job']['name']); // weitere Variante um auf Objetcs zuzugreifen

let objKey = 'age';

console.log(myObjects[objKey]); // Vorteil bei der Methode, man kann auch Variablen reingeben
*/

// 02 - Objects: console.table
/*
console.log(myObjects); // ganzes object ausgeloggt

console.table(myObjects); // cooler anzeigen lassen in Tabelle

console.table([123, 4324, 123123, 4234, 123123]); // geht auch mit arrays
*/

// 03 - Objects: methods
/*
// name der function ist vorne definiert
let myObjects = {
    'name': 'Ilja', 
    'age': 34,
    'logJob': function (number) {
        console.log('Dev-Mentor ' + number);  
    },
    'good_guy': true
};

myObjects.logJob(12);

// console.table(myObjects)
*/
// 04 - Objects: keys und entries

let myObjects = {
  name: "Ilja",
  age: 34,
  job: "Dev",
  good_guy: true,
};

// console.log(Object.keys(myObjects)); // Output Array mit den Keys
// console.log(Object.entries(myObjects)); // Output Object mit Key: Value Pair und Arrays

// Praxisbeispiel

let objKeys = Object.keys(myObjects);
console.log(objKeys); // Keys werden in einem Array ausgegeben

let ourArray = [];

for (let i = 0; i < objKeys.length; i++) {
  // durch das Array objKeys gehen
  const element = objKeys[i];
  ourArray.push(myObjects[objKeys[i]]); // in das leere Array ourArray Werte z.B. Ilja pushen
}
console.log(ourArray);
