/**
 * @param {array function :search}
 */
var array = [10, 20, 30, 40, 50]; 
var found = array.find(function(element) { 
  return element > 20; 
}); 
console.log("searched array ..",found); 