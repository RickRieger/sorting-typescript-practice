"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        let swapped;
        for (var i = this.collection.length; i > 0; i--) {
            swapped = false;
            for (var j = 0; j < i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                    swapped = true;
                }
            }
            if (!swapped) {
                break;
            }
        }
    }
}
exports.Sorter = Sorter;
//
// class Sorter{
//     collection:number[];
//     constructor(collection:number[]){
//         this.collection = collection
//     }
// }
