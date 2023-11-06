// Membuat Array Awal
let array1 = [1, 2];

// Membuat 50 Array Tambahan
const arrays = [];
for (let i = 0; i < 50; i++) {
  arrays[i] = [];
}

// Mengisi Array Tambahan dengan Data
for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 1000; j++) {
    arrays[i][j] = (i + 1) * (j + 1);
  }
}

// Metode Pop
Array.prototype.myPop = function() {
  if (this.length > 0) {
    const popped = this[this.length - 1];
    this.length--;
    return popped;
  }
};

// Metode Push
Array.prototype.myPush = function(value) {
  this[this.length] = value;
  this.length++;
  return this.length;
};

// Metode Shift
Array.prototype.myShift = function() {
  if (this.length > 0) {
    const shifted = this[0];
    for (let j = 1; j < this.length; j++) {
      this[j - 1] = this[j];
    }
    this.length--;
    return shifted;
  }
};

// Metode Unshift
Array.prototype.myUnshift = function(value) {
  for (let j = this.length; j > 0; j--) {
    this[j] = this[j - 1];
  }
  this[0] = value;
  this.length++;
  return this.length;
};

// Metode ComplexPop: Menghapus elemen pada indeks yang ditentukan
Array.prototype.complexPop = function(index) {
  if (index >= 0 && index < this.length) {
    const removed = this[index];
    for (let j = index; j < this.length - 1; j++) {
      this[j] = this[j + 1];
    }
    this.length--;
    return removed;
  };
};

// Metode Sum: Menghitung jumlah elemen dalam array
Array.prototype.sum = function() {
  return this.reduce((acc, current) => acc + (isNaN(current) ? 0 : current), 0);
};

// Metode FindIndex: Mencari indeks dari elemen yang cocok dengan nilai yang diberikan
Array.prototype.findIndex = function(value) {
  for (let j = 0; j < this.length; j++) {
    if (this[j] === value) {
      return j;
    }
  }
  return -1;
};

// Metode Filter: Membuat array baru dengan elemen yang memenuhi kondisi tertentu
Array.prototype.myFilter = function(callback) {
  const result = [];
  for (let j = 0; j < this.length; j++) {
    if (callback(this[j], j, this)) {
      result.push(this[j]);
    }
  }
  return result;
};

// Metode Map: Membuat array baru dengan hasil operasi pada setiap elemen
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let j = 0; j < this.length; j++) {
    result.push(callback(this[j], j, this));
  }
  return result;
};

// Metode Sort: Mengurutkan elemen dalam array
Array.prototype.mySort = function(compareFunction) {
  return this.sort(compareFunction);
};

// Tes Metode pada Array
for (let i = 0; i < 50; i++) {
  const currentArray = arrays[i];
  console.log(`Array ${i + 1}:`);
  console.log('Initial Length:', currentArray.length);
  console.log('Pop:', currentArray.myPop());
  console.log('Push:', currentArray.myPush(1001));
  console.log('Shift:', currentArray.myShift());
  console.log('Unshift:', currentArray.myUnshift(0));
  console.log('ComplexPop at index 5:', currentArray.complexPop(5));
  console.log('Sum of Array:', currentArray.sum());
  console.log('FindIndex of 20:', currentArray.findIndex(20));

  // Menambahkan elemen ke setiap elemen array
  currentArray.myMap((element, index) => element + 10);

  // Menyaring elemen dengan nilai ganjil
  const filteredArray = currentArray.myFilter((element) => element % 2 === 1);

  // Mengurutkan elemen secara descending
  const sortedArray = currentArray.mySort((a, b) => b - a);

  console.log('Filtered Array (Odd Values):', filteredArray);
  console.log('Sorted Array (Descending):', sortedArray);

  console.log('\n');
}
