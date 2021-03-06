var assert = require( 'assert' );
var Bear = require( '../bear');

describe( 'Bear', function(){

  it('should have age', function(){
    var bear1 = new Bear(24, 'black', 550);
    assert.equal( 24, bear1.age );

  })

  it('should have type', function(){
    var bear1 = new Bear(24, 'black', 550);
    assert.equal( 'black', bear1.type );

  })

  it('should have weight', function(){
    var bear1 = new Bear(24, 'black', 550);
    assert.equal( 550, bear1.weight );
  })

  it('should roar', function(){
    var bear1 = new Bear(24, 'black', 550);
    assert.equal("ROOOAAARRRR!!!", bear1.roar())
  })

  it('should gain weight after eating', function(){
    var bear1 = new Bear(24, 'black', 550);
    assert.equal(560, bear1.eat());
  })

})