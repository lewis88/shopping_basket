// The Shopping Stock
var veg = { name: veg, price: 10.00, deals: '1for2' };
var meat = { name: meat, price: 30.00, deals: 'None' };
var bleach = { name: bleach, price: 10.00, deals: '2for3' };
var bread = { name: bread, price: 10.00, deals: '1for2' };
var fruit = { name: fruit, price: 5.00, deals: 'None' };
var alcohol = { name: alcohol, price: 5.00, deals: '1for2' };
var tobacco = { name: tobacco, price: 10.00, deals: '2for3' };

var shoppingBasket = {

  stockArray = [ veg, meat, bleach, bread, fruit, alcohol, tobacco ],

  itemArray: [],

  totalCost: 1,

  addItem: function( product, amount ){
    var product = product;
    product['amount'] = amount;

    for ( var item of this.itemArray ){
      if ( item['name'] === product['name'] ){
        item['amount'] += product['amount'];
      } else {
        this.itemArray.push( item );
      }
    }
  }

}


module.exports = shoppingBasket;
