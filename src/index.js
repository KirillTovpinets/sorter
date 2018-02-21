class Sorter {


  constructor() {
    this.array = new Array();
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var sortIndices = false;
    for (var i = 0; i < indices.length-1; i++) {
      for (var j = i + 1; j < indices.length; j++) {
        if (indices[i] > indices[j]) {
          let temp = indices[i];
          indices[i] = indices[j];
          indices[j] = temp;
          sortIndices = true;
        }
      }
    }
    if (this.compareFunction !== undefined) { 
      for (var i = 0; i < indices.length - 1; i++) {
        for (var j = i + 1; j < indices.length; j++) {
          if (this.compareFunction(this.array[indices[i]], this.array[indices[j]])) {
            let temp = this.array[indices[j]];
            this.array[indices[j]] = this.array[indices[i]];
            this.array[indices[i]] = temp;
          }else if(sortIndices){
            let temp = this.array[indices[j]];
            this.array[indices[j]] = this.array[indices[i]];
            this.array[indices[i]] = temp;
          }else{
            continue;
          }
        }
      }
    } else {
      for (var i = 0; i < indices.length-1; i++) {
        for (var j = i + 1; j < indices.length; j++) {
          if (this.array[indices[i]] <= this.array[indices[j]]) {
            continue;
          }else{
            let temp = this.array[indices[j]];
            this.array[indices[j]] = this.array[indices[i]];
            this.array[indices[i]] = temp;
          }
        }
      }
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;