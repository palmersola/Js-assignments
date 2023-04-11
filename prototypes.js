class Person {
  constructor(
    firstName,
    lastName,
    favoriteColor,
    favoriteNumber,
    favoriteFoods
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
    this.family = [];
  }
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.addToFamily = function(member) {
  let personCheck = member instanceof Person;
  let dupeCheck = this.family;
  if (personCheck) {
    dupeCheck.push(member);
  }
  this.family = [...new Set(dupeCheck)];
  return this.family.length;
};

Person.prototype.toString = function() {
  console.log(
    `Full Name: ${this.fullName()}, Favorite Color: ${this
      .favoriteColor}, Favorite Numer: ${this
      .favoriteNumber}, Favorite Foods: ${this
      .favoriteFoods}, Family Members: ${this.addToFamily()}`
  );
};

let sarah = new Person("Sarah", "Oleary", "Blue", 36, ["bacon", "carrots"]);
let peter = new Person("Peter", "Oleary", "Green", 42, ["pasta", "pizza"]);
let palmer = new Person("Palmer", "Oleary", "Orange", 98, ["beef", "sardines"]);
let jay = "Jay";

sarah.addToFamily(peter);
sarah.addToFamily(palmer);

peter.addToFamily(palmer);
peter.addToFamily(sarah);
peter.addToFamily(sarah); //repeat add to prove it doesnt add dupliacte, will only show 2 family memebers

palmer.addToFamily(peter);
palmer.addToFamily(sarah);
palmer.addToFamily(jay); //checks whether it is a Person obect or not;

sarah.toString();
peter.toString();
palmer.toString();

console.log(peter.family);
