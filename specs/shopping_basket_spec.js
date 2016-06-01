var basket = require( '../shopping_basket' );
var assert = require( 'chai' ).assert;

describe( 'Basket', function(){

  it('Checking Basket is Empty', function(){
    assert.equal(0, basket.itemArray.length);
  });

  it('Checking initial Total Cost is £1', function(){
    assert.equal(1, basket.totalCost);
  })

  it('Checking items can be added to the basket', function(){
    basket.addItem( veg, 2);
    assert.equal(1, basket.itemArray.length);
  })
})
