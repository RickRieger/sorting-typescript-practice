interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
export class Sorter {
  constructor(public collection: Sortable) {}
  sort(): void {
    let swapped: boolean;
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

//
// class Sorter{
//     collection:number[];
//     constructor(collection:number[]){
//         this.collection = collection
//     }
// }
