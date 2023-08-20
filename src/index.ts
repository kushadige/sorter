import { CharactersCollection } from "./models/CharactersCollection";
import { LinkedList } from "./models/LinkedList";
import { NumbersCollection } from "./models/NumbersCollection";

const numbersCollection = new NumbersCollection([234, -123, 423, 0, 17, -3]);
numbersCollection.bubble();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("oguzhan");
charactersCollection.bubble();
console.log(charactersCollection.data);

const list = new LinkedList();
list.insert(500);
list.insert(-10);
list.insert(-3);
list.insert(4);

list.print();
list.bubble();
list.print();
