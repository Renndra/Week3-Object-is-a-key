//soal 1
function deepSum(arr) {
    if (arr.length === 0) return "No number";
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
          sum += arr[i][j][k];
        }
      }
    }
    return sum;
  }
  
  // TEST CASES
  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316
  
  console.log(deepSum([])); // "No number"

  //soal 2
  function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let hasil = [];
  
    for (let i = 0; i < arrPenumpang.length; i++) {
      let naikDari = arrPenumpang[i][1];
      let tujuan = arrPenumpang[i][2];
      let bayar = (rute.indexOf(tujuan) - rute.indexOf(naikDari)) * 2000;
  
      hasil.push({
        penumpang: arrPenumpang[i][0],
        naikDari,
        tujuan,
        bayar
      });
    }
    
    return hasil;
  }
  
  // TEST CASES
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //  { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 }]
  
  console.log(naikAngkot([])); // []

  //soal 3
  function highestScore(students) {
    let result = {};
  
    for (let i = 0; i < students.length; i++) {
      let { name, score, class: kelas } = students[i];
  
      if (!result[kelas] || score > result[kelas].score) {
        result[kelas] = { name, score };
      }
    }
  
    return result;
  }
  
  // TEST CASES
  console.log(highestScore([
    { name: 'Dimitri', score: 90, class: 'foxes' },
    { name: 'Alexei', score: 85, class: 'wolves' },
    { name: 'Sergei', score: 74, class: 'foxes' },
    { name: 'Anastasia', score: 78, class: 'wolves' }
  ]));
  // { foxes: { name: 'Dimitri', score: 90 }, wolves: { name: 'Alexei', score: 85 } }
  
  console.log(highestScore([])); // {}

  //soal 4
  function graduates(students) {
    let result = {};
  
    for (let i = 0; i < students.length; i++) {
      let { name, score, class: kelas } = students[i];
  
      if (score > 75) {
        if (!result[kelas]) result[kelas] = [];
        result[kelas].push({ name, score });
      }
    }
  
    return result;
  }
  
  // TEST CASES
  console.log(graduates([
    { name: 'Dimitri', score: 90, class: 'foxes' },
    { name: 'Alexei', score: 85, class: 'wolves' },
    { name: 'Sergei', score: 74, class: 'foxes' },
    { name: 'Anastasia', score: 78, class: 'wolves' }
  ]));
  // { foxes: [{ name: 'Dimitri', score: 90 }], wolves: [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }] }
  
  console.log(graduates([])); // {}
  