// The Shopping Stock
var veg = { name: veg, price: 10.00, deals: '1for2' };
var meat = { name: meat, price: 30.00, deals: 'None' };
var bleach = { price: 10.00, deals: '2for3' };
var bread = { price: 10.00, deals: '1for2' };
var fruit = { price: 5.00, deals: 'None' };
var alcohol = { price: 5.00, deals: '1for2' };
var tobacco = { price: 10.00, deals: '2for3' };

var shoppingBasket = {

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
