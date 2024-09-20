// 1. Creating a Set with unique numbers from an array
const uniqueNumbers = new Set();
const array = [1, 2, 2, 3, 4, 4, 5];
array.forEach(num => uniqueNumbers.add(num));
console.log("Unique Numbers Set:", uniqueNumbers);

// 2. Creating a Map and adding key-value pairs
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
console.log("Map after adding pairs:", myMap);

// 3. Creating a Map, adding pairs, and deleting one
const anotherMap = new Map();
anotherMap.set('x', 10);
anotherMap.set('y', 20);
anotherMap.delete('x');
console.log("Map after deletion:", anotherMap);

// 4. Creating a Set, adding elements, and clearing all elements
const anotherSet = new Set(['apple', 'banana', 'orange']);
anotherSet.clear();
console.log("Set after clearing:", anotherSet);

// 5. Creating CollectionManager class
class CollectionManager {
    constructor() {
        this.map = new Map();
        this.set = new Set();
    }

    addToMap(key, value) {
        this.map.set(key, value);
    }

    removeFromMap(key) {
        this.map.delete(key);
    }

    addToSet(item) {
        this.set.add(item);
    }

    clearSet() {
        this.set.clear();
    }

    showMap() {
        console.log("Map contents:");
        for (const [key, value] of this.map) {
            console.log(`${key}: ${value}`);
        }
    }

    showSet() {
        console.log("Set contents:", this.set);
    }
}

const manager = new CollectionManager();
manager.addToMap('name', 'Alice');
manager.addToMap('age', 30);
manager.showMap();

manager.addToSet('item1');
manager.addToSet('item2');
manager.showSet();

manager.removeFromMap('name');
manager.showMap();

manager.clearSet();
manager.showSet();
