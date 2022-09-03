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