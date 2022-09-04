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
// Verify an Object's Constructor with instanceof
let House = function (numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  let myHouse = new House(14);
  myHouse instanceof House;
// Understanding Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
//   Using Prototype Properties to Reduce Duplicate Code
function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 2;
  
  
  let beagle = new Dog("Snoopy");