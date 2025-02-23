// Soal 1: Angka Prima
function angkaPrima(angka) {
    if (angka < 2) return false;
    for (let i = 2; i <= Math.sqrt(angka); i++) {
      if (angka % i === 0) return false;
    }
    return true;
}
// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
  
  // Soal 2: FPB
  function fpb(angka1, angka2) {
    while (angka2) {
      let temp = angka2;
      angka2 = angka1 % angka2;
      angka1 = temp;
    }
    return angka1;
  }
  
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
  // Soal 3: Median
  function cariMedian(arr) {
    arr.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
  }
  
  
  
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
  // Soal 4: Modus
  function cariModus(arr) {
    let frequency = {};
    let maxCount = 0;
    let modus = -1;
    
    for (let num of arr) {
      frequency[num] = (frequency[num] || 0) + 1;
      if (frequency[num] > maxCount) {
          maxCount = frequency[num];
          modus = num;
        }
    }
    
    if (maxCount === 1 || Object.keys(frequency).length === 1) return -1;
    return modus;
}
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
  
  // Soal 5: Ubah Huruf
  function ubahHuruf(kata) {
    let result = '';
    for (let char of kata) {
      result += String.fromCharCode(char.charCodeAt(0) + 1);
    }
    return result;
  }
  
  
  
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
  