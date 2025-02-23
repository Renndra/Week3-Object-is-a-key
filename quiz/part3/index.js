function changeMe(arr) {
    if (arr.length === 0) {
      console.log(""); // Jika array kosong, cetak string kosong
      return;
    }
  
    let currentYear = new Date().getFullYear(); // Tahun saat ini (2025)
  
    for (let i = 0; i < arr.length; i++) {
      let person = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: arr[i][3] ? currentYear - arr[i][3] : "Invalid Birth Year",
      };
  
      console.log(`${i + 1}. ${person.firstName} ${person.lastName}:`, person);
    }
  }
  
  // TEST CASES
  changeMe([["Christ", "Evans", "Male", 1982], ["Robert", "Downey", "Male"]]);
  changeMe([]);
  
  
  // Soal 2
  function shoppingTime(memberId, money) {
    if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    if (money < 50000) return 'Mohon maaf, uang tidak cukup';
    
    let items = [
      { name: 'Sepatu Stacattu', price: 1500000 },
      { name: 'Baju Zoro', price: 500000 },
      { name: 'Baju H&N', price: 250000 },
      { name: 'Sweater Uniklooh', price: 175000 },
      { name: 'Casing Handphone', price: 50000 }
    ];
    
    let purchased = [];
    for (let item of items) {
      if (money >= item.price) {
        purchased.push(item.name);
        money -= item.price;
      }
    }
    
    return { memberId, money, listPurchased: purchased, changeMoney: money };
  }
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
  
  // Soal 3
  function countProfit(shoppers) {
    let items = [
      { product: 'Sepatu Stacattu', price: 1500000, stock: 10 },
      { product: 'Baju Zoro', price: 500000, stock: 2 },
      { product: 'Sweater Uniklooh', price: 175000, stock: 1 }
    ];
    
    let result = items.map(item => ({
      product: item.product,
      shoppers: [],
      leftOver: item.stock,
      totalProfit: 0
    }));
    
    for (let shopper of shoppers) {
      for (let item of result) {
        if (shopper.product === item.product && shopper.amount <= item.leftOver) {
          item.shoppers.push(shopper.name);
          item.leftOver -= shopper.amount;
          item.totalProfit += shopper.amount * items.find(i => i.product === item.product).price;
          break;
        }
      }
    }
    
    return result;
  }
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]