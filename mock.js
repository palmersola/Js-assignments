const users = [
  {
    id: 1,
    name: "Palmer",
    email: "palmer@email.com"
  },
  {
    id: 2,
    name: "Jay",
    email: "jay@email.com"
  }
];

let fetchUserById = userid =>
  new Promise((res, rej) => {
    setTimeout(() => {
      let userCheck = users.filter(user => user.id == userid);
      userCheck.length === 0 ? rej(new Error("user not found")) : res(userCheck[0]);
    }, 1000);
  });
fetchUserById(1).then(user => console.log("User found:", user)).catch(error => console.error("Error:", error));
fetchUserById(2).then(user => console.log("User found:", user)).catch(error => console.error("Error:", error));
//id of 0 to show error working
fetchUserById(0).then(user => console.log("User found:", user)).catch(error => console.error("Error:", error));
