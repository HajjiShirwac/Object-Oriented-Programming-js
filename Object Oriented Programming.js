// Creating a Basic JavaScript Object

let dog = {
    name: "George",
    numLegs: 4
  
  };

//   Use Dot Notation to Access the Properties of an Object
  let Duck = {
    name: "Aflac",
    numLegs: 2
  };
  console.log(Duck.name);

  // Creating a Method on an Object
  let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck.name + ".";}
  };
  duck.sayName();
//   Make Code More Reusable with the this Keyword
  let Dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return "This dog has " + this.numLegs + " legs.";
    }
  };
  
  Dog.sayLegs();
// Defining a Constructor Function
  function Dogs() {
    (this.name = "Geogre"), (this.color = "White"), (this.numLegs = 4);
  };
// Use a Constructor to Create Objects
  function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
 
  let hound = new Dog();

//   Extending Constructors to Receive Arguments
function Dog(name,color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  
  }
  let terrier = new Dog("loopy","yellow");