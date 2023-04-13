const users = [
  { id: 1232, firstName: "Cam", lastName: "Danvers", logins: 35, isPremiumMember: false },
  { id: 3283, firstName: "Elijah", lastName: "Hawkings", logins: 3, isPremiumMember: true },
  { id: 9283, firstName: "Ragupathy", lastName: "Bodem", logins: 12, isPremiumMember: false },
  { id: 6972, firstName: "Jamilla", lastName: "Johnson", logins: 5, isPremiumMember: true },
  { id: 3998, firstName: "Jose", lastName: "Rivera", logins: 16, isPremiumMember: false },
  { id: 4982, firstName: "Ted", lastName: "Witherspoon", logins: 53, isPremiumMember: true },
  { id: 6929, firstName: "Igor", lastName: "Silenski", logins: 23, isPremiumMember: false },
  { id: 3879, firstName: "Ira", lastName: "Bolislovitz", logins: 9, isPremiumMember: false }
];

const findJose = users.find(user => user.firstName === "Jose");

const isPremium = users.filter(user => {
  if (user.isPremiumMember) return user;
});

const lastNames = users.map(user => user.lastName);

function nameLogged() {
  let loginsArr = [];
  users.filter(user => {
    if (user.logins > 10) loginsArr.push(user);
  });
  return loginsArr.map(user => `${user.firstName} ${user.lastName}`);
}

function totalLogins() {
  logArr = users.map(user => user.logins);
  total = logArr.reduce(function myFunc(total, num) {
    return total + num;
  });
  console.log(total);
}

console.log(findJose);
console.log(isPremium);
console.log(lastNames);
console.log(nameLogged());
totalLogins();
