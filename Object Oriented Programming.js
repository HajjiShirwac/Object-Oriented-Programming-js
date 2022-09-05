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
//   Iterating Over All Properties

// function Dog(name) {
    //   this.name = name;
    // }
    
    // Dog.prototype.numLegs = 4;
    
    // let beagle = new Dog("Snoopy");
    
    // let ownProps = [];
    // let prototypeProps = [];
    
    
    // for (let property in beagle) {
    //   if(Dog.hasOwnProperty(property)) {
    //     ownProps.push(property);
    //   } else {
    //     prototypeProps.push(property);
    //   }
    // }

    // Understand the Constructor Property
    function Dog(name) {
        this.name = name;
      }
      
      
      function joinDogFraternity(candidate) {
        if(candidate.constructor === Dog){
          return true
        }else{
          return false
        }
      }

    //   Change the Prototype to a New Object
    function Dog(name) {
        this.name = name;
      }
      
      Dog.prototype = {
        
          numLegs: 2, 
        eat: function() {
          console.log("nom nom nom");
        },
        describe: function() {
          console.log("My name is " + this.name);
        }
      };
    //   Remember to Set the Constructor Property when Changing the Prototype
    function Dog(name) {
        this.name = name;
      }
      
      
      Dog.prototype = {
        constructor: Dog,
        numLegs: 4,
        eat: function() {
          console.log("nom nom nom");
        },
        describe: function() {
          console.log("My name is " + this.name);
        }
      };
    //   Understand Where an Object’s Prototype Comes From
    function Dog(name) {
        this.name = name;
      }
      
      let Beagle = new Dog("Snoopy");
      
      
      Dog.prototype.isPrototypeOf(Beagle);
    //   Understanding the Prototype Chain
    function Dog(name) {
        this.name = name;
      }
      
    //   let beagle = new Dog("Snoopy");
      
      Dog.prototype.isPrototypeOf(beagle);  // yields true
      
      // Fix the code below so that it evaluates to true
      Object.prototype.isPrototypeOf(Dog.prototype);

    //   Using Inheritance So You Don't Repeat Yourself
    function Cat(name) {
        this.name = name;
      }
      
      Cat.prototype = {
        constructor: Cat
      };
      
      function Bear(name) {
        this.name = name;
      }
      
      Bear.prototype = {
        constructor: Bear
      };
      
      function Animal() {}
      
      Animal.prototype = {
        constructor: Animal,
        eat: function() {
          console.log("nom nom nom");
        }
      };

    //   Inherit Behaviors from a Supertype
    function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

// let duck = Object.create(Animal.prototype); // Change this line
// let beagle = Object.create(Animal.prototype); // Change this line

// Setting the Child's Prototype to an Instance of the Parent
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype)
// let eagle = new Dog();
// beagle.eat();
