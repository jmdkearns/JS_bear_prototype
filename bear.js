var Bear = function(age, type, weight){
  this.age = age;
  
  this.type = type;
  
  this.weight = weight;
}

Bear.prototype = {

  roar: function(){
    console.log("ROOOAAARRRR!!!");
  },

  eat: function(){
    return this.weight += 10;
  }

}

module.exports = Bear;