import { LinkedList } from "./models/LinkedList";
import { Sorter } from "./models/Sorter";

const list = new LinkedList();

list.insert(500);
list.insert(-10);
list.insert(-3);
list.insert(4);
list.print();

const sorter = new Sorter(list);
sorter.bubble();
list.print();
