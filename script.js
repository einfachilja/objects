// 01 - Objects: Basics (Key-Value-Pair)

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








