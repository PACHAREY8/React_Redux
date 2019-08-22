/**
 * @param {Execute Prototype Object examples.}
 */
function Car(model,color){
    this.model = model,
    this.color = color
    }
    Car.prototype.getDetails = function(){
    return "Range Rover "+this.model+"car is"+this.color;
    }
    var Obj1 = new Car("velar "," white");
    console.log(Obj1.getDetails());
    