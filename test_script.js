//testscript

// veg = { price: 10.00, deals: '1for2' },
//
// // Here we add the amount to the original veg array in shopping stock
// itemCreator = function( hash, amount ){
//   hash['amount'] = amount
//   return hash
// }
//
// console.log( itemCreator( veg, 5 ) );
// // { price: 10, deals: '1for2', amount: 5 }
//
// console.log( veg );
// { price: 10, deals: '1for2', amount: 5 }

// Now I want to add my item to the

var sStock = {
  veg: { price: 10.00, deals: '1for2' },
  meat: { price: 30.00, deals: 'None' },
  bleach: { price: 10.00, deals: '2for3' },
  bread: { price: 10.00, deals: '1for2' },
  fruit: { price: 5.00, deals: 'None' },
  alcohol: { price: 5.00, deals: '1for2' },
  tobacco: { price: 10.00, deals: '2for3' },
}

  // createItem adds an amount to the item hash
  createItem = function( hash, amount ){
    hash['amount'] = amount
    return hash
  }


console.log( createItem( sStock['veg'], 2 ) );
console.log( createItem( sStock['tobacco'], 3 ) );
console.log( sStock );
