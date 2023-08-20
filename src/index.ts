import { Sorter } from "./models/Sorter";
import { CharactersCollection } from "./models/CharactersCollection";
import { NumbersCollection } from "./models/NumbersCollection";

const numbersCollection = new NumbersCollection([24, 52, -5, -123, 0]);
const charactersCollection = new CharactersCollection("oguzhan");

const sorter1 = new Sorter(numbersCollection);
console.log(sorter1.collection);

const sorter2 = new Sorter(charactersCollection);
console.log(sorter2.collection);
