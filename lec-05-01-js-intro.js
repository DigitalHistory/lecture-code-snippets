const neverChange = "Project Key"; // comment
let oftenChanges = 0; // maybe we will change this value later
var oldDeclaration = 0; // we try to avoid using var now; use let instead

let first="Matt";
let last="Price"
console.log(first + last);

let n = 1,
    m=2,
    s="Hello, there! ";
 
console.log(m+n);
console.log(s+n);

let historians= ["Edward Gibbon", "Leopold von Ranke", "Edward Said", "Joan Scott"];

a = [];
a.push("Edward Gibbon");
a.push("Edward Said");
a.push("Joan Scott");

console.log(a[1]);

a.pop();
// a

wardates=[1776, 1792, 1812, 1861, 1870, 1914, 1939, 1994]
console.log("The time between The First and \
Second World Wars was " + (wardates[6] - wardates[5]) + " years");

let i = 0;

while (i < historians.length) {
    console.log(historians[i] + " was a historian.");
    i+=1;
  }

for (let i=0; i < historians.length ; i++){
  console.log(historians[i] + " was a historian.");
  i // this is not required, just here to show you a slight difference
}

for (let i in historians) {
  console.log(historians[i] + " was a historian.");
}

for (let h of historians) {
  console.log(h + " was a historian.");
}


while (i < historians.length) {
  if (historians[i] === "Joan Scott") {
    console.log(historians[i] + " is my favourite.");
  }
  i +=1;
};


while (i < historians.length) {
  if (historians[i] ==="Joan Scott") {
    console.log(historians[i] + " is my favourite.");
  } else {
    console.log(historians[i] + ", meh.");
}
  i +=1;
};

let a=["name", 0, "otherinfo"];
console.log(a[2]);
console.log(a.length);
console.log(a[length]);
a.pop;

function square(number) {
  return number * number;
}

let cube = function(number) { 
      return number * number * number;
  };

console.log(square(2));
console.log(cube(3));

historians= ["Edward Gibbon", "Leopold von Ranke", "Edward Said", "Joan Scott"];
i = 0;

while (i < historians.length) {
    console.log(historians[i] + " was a historian.");
    i+=1;
  }

function makeSentences(historians) {
  let i = 0,
      output = "";

  while (i < historians.length) {
    output += historians[i] + " was a historian.\n";
    i+=1;
  }
  return output;
}

let h1 = ["Edward Gibbon", "Leopold von Ranke", "Edward Said", "Joan Scott"],
    h2 = ["Orlando Patterson", "Michel Foucault", "Natalie Zeemon Davis", "Howard Zinn"];

makeSentences(h1);
//makeSentences(h2);

a = 'just some string';
b= 'some other string';

function scopeExample (anyString) {
  let a = 'I set this value inside the function';

  return ('inside the function, a="' + a + '", not ' + anyString);
}

// a
// scopeExample(a);
//anyString

a = "global scope a";

console.log(a);

for (i=0; i<6; i++) {
  let a = "local scope a on iteration: " + (i + 1) ;
  console.log(a)
}

console.log(a);

function returnArray (first, second, third) {
  // you can define the array using "new Array ()" or just "[ , , ]"
  // don't forget to return it
  // return ; // add the value here!
}

a = returnArray (1, 3,5);
a  // quokka will display the value

function robotCleaner () {
  let output =  "I cleaned your room";
  return output;
}

let r = robotCleaner();
a

function robotCleaner () {
  let output =  `Ha, ha! I have replaced your robot cleaner! 
Now your room is even messier! Bwa ha ha ha ha!`
  return output;
}

a = robotCleaner();
a

function greatWriter (name) {
let output = "Margaret Atwood was a great writer."
return output
}

console.log(greatWriter("Margaret Atwood"))
// console.log(greatWriter("Toni Morrison"))

function evenGreaterWriter (name) {
let output = name + " was a great writer."
return output
}

console.log(evenGreaterWriter("Margaret Atwood"))
// console.log(evenGreaterWriter("Toni Morrison"))

let myFruit="orange",
    mySandwich = "just some bread!",
    myBar="weird vegan bar",
    myCookie="ginger",
    myCandy="pulparindo",
    mySnacks=["cliff bar", "cliff bar", "kind bar"];

function eat (food) {
  console.log("Umm, that was a delicious " + food + ".");
}

eat (myFruit);
//eat (myBar);
//eat (myCookie);
//eat (myCandy);

myLunch = {};


myLunch = {
  fruit: "orange",
  sandwich: mySandwich
};

myLunch["snacks"]=mySnacks;
myLunch;

myLunch = {
  fruit: "orange",
  sandwich: mySandwich
};

myLunch["snacks"]=mySnacks;

function eatLunch (someLunch) {
  let output = "";
  output += "I'll start with my " + someLunch["fruit"] + "\n";
  output += "Next I want to eat " + someLunch.sandwich + "\n";
  for (snack of someLunch.snacks) {
    output += "   I love my " + snack + "\n";
  }
  return output;
}

eatLunch(myLunch);

myLunch = {
  fruit: "orange",
  sandwich: "just some bred!",
  bar: "weird vegan bar",
  snacks: ["cliff bar", "cliff bar", "kind bar"],
  dessert: {cookie: "ginger", candy: "pulparindo"}
};

console.log("I'm finally ready for my " + myLunch.dessert.cookie);

function eatLunch (someLunch) {
  let output = "";
  output += "I'll start with my " + someLunch["fruit"] + "\n";
  output += "Next I want to eat " + someLunch.sandwich + "\n";
  for (snack of someLunch.snacks) {
    output += "   I love my " + snack + "\n";
  }
  return output;
}

myLunch = {
  fruit: "orange",
  sandwich: "just some bred!",
  bar: "weird vegan bar",
  snacks: ["cliff bar", "cliff bar", "kind bar"],
  dessert: {cookie: "ginger", candy: "pulparindo"},
  eatMe: function() {
    let output = "";
    output += "I'll start with my " + this["fruit"] + "\n";
    output += "Next I want to eat " + this.sandwich + "\n";
    for (snack of this.snacks) {
      output += "   I love my " + snack + "\n";
    }
    return output;
  }
};

myLunch.eatMe;

myLunch.eatMe();

let greatWar = {
    name: "The First World War",
    start: 1914,
    end: 1918,
    badGuys: ["Germany", "Austria-Hungary", "Ottoman Empire"],
    goodGuys: ["All our Friends"],
    scale: "Catastrophe"
  }

//  console.log(greatWar["name"] + " lasted for " + (greatWar.end - greatWar.start) + " years.");

greatWar = {
    name: "The First World War",
    start: 1914,
    end: 1918,
    badGuys: ["Germany", "Austria-Hungary", "Ottoman Empire"],
    goodGuys: ["All our Friends"],
    scale: "Catastrophe",
    battles: [
      { name: "The Battle of Vimy Ridge",
        year: 1915,
        casualties: 34000
      }]
  }

console.log(greatWar["name"] + " lasted for " + (greatWar.end - greatWar.start) + " \ years.");
console.log(greatWar.battles[0].name + " was ferocious and horrific. There were " +  greatWar.battles[0].casualties + " casualties.");

goodGuys = ["CA", "UK", "US"];
badGuys=["DE", "AH"];
people = [
  {name: "Kaiser Wilhelm",
   nat: "DE"},
  {name:"Winston Churchill",
   nat: "UK"}];
for (person of people) {
  if (badGuys.includes(person.nat)) {
    //console.log(person.name + ": BOOOOOOOOOOOO!!!");
  }
};


for (person of people) {
  if (badGuys.includes(person.nat)) {
    console.log(person.name + ": BOOOOOOOOOOOO!!!");
  } else {
    console.log(person.name + ": YAAAAYYY!!!");

}
};
