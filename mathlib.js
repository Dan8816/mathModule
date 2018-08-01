module.exports = function ()
{
    return{
      add: function(num1, num2) { 
        var sum = (num1 + num2);
        console.log(sum);   
        return(sum); 
      },
      multiply: function(num1, num2) {
           var product = (num1 * num2);
           console.log(product);
           return(product); 
      },
      square: function(num) {
           var prodSq = (num*num);
           console.log(prodSq);
           return(prodSq); 
      },
      random: function(num1, num2) {
           min = Math.ceil(num1);
           max = Math.floor(num2);
           var randInt = Math.floor(Math.random()*(max - min)) + min; 
           console.log(randInt);
           return(randInt);
      }
    }
  };