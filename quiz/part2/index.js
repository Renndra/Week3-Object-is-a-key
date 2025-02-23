// Soal 1: digitPerkalianMinimum
function digitPerkalianMinimum(angka) {
    let minDigit = Infinity;
    for (let i = 1; i <= Math.sqrt(angka); i++) {
      if (angka % i === 0) {
        let faktor1 = i;
        let faktor2 = angka / i;
        let totalDigit = (faktor1.toString() + faktor2.toString()).length;
        minDigit = Math.min(minDigit, totalDigit);
      }
    }
    return minDigit;
  }
  
  // Soal 2: urutkanAbjad
  function urutkanAbjad(str) {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr.join('');
  }
  
  // Soal 3: tukarBesarKecil
  function tukarBesarKecil(kalimat) {
    let hasil = '';
    for (let i = 0; i < kalimat.length; i++) {
      let char = kalimat[i];
      if (char === char.toUpperCase()) {
        hasil += char.toLowerCase();
      } else {
        hasil += char.toUpperCase();
      }
    }
    return hasil;
  }
  
  // Soal 4: checkAB
  function checkAB(str) {
    for (let i = 0; i < str.length - 4; i++) {
      if ((str[i] === 'a' && str[i + 4] === 'b') || (str[i] === 'b' && str[i + 4] === 'a')) {
        return true;
      }
    }
    return false;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
  
  console.log(tukarBesarKecil('Hello World')); // 'hELLO wORLD'
  console.log(tukarBesarKecil('I aM aLAY')); // 'i Am Alay'
  console.log(tukarBesarKecil('My Name is Bond!!')); // 'mY nAME IS bOND!!'
  console.log(tukarBesarKecil('IT sHOULD bE me')); // 'it Should Be ME'
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // '001-a-3-5tRDyw'
  
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
  