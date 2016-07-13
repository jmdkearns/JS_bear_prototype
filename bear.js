var Bear = function(age, type, weight){
  this.age = age;
  
  this.type = type;
  
  this.weight = weight;
}

Bear.prototype = {

  roar: function(){
    return "ROOOAAARRRR!!!";
  },

  eat: function(){
    return this.weight += 10;
  }

}

module.exports = Bear;