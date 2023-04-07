function outer() {
  let a = "orange juice";
  let b = {
    type: "drink",
    flavor: "coffee",
    addIns: "milk"
  };
  console.log(a, b);
  function inner(a, b) {
    a = "water";
    b = {
      type: "drink",
      flavor: "tea",
      addIns: "sugar"
    };
    b.flavor = "soda";
    console.log(a, b);
  }
  inner(a, b);
  console.log(a, b);
}

outer();
