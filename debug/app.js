const storeOwners = [
  {
    name: "charles",
    stores: 1,
    location: null
  },
  {
    name: "sally",
    stores: 1,
    location: null
  },
  {
    name: "cassandra",
    stores: 1,
    location: null
  },
  {
    name: "Danny Shavez",
    stores: 1,
    location: "in NM"
  }
];

let locations = storeOwners.length;

function tellMeMyStores() {
  console.log("Hey, can you tell me how many stores you have?");
  if (locations > 0) {
    console.log(`Of course, we have ${locations} stores`);
  }
}

function hasStore() {
  storeOwners.map(owner => {
    log = !owner.location
      ? `Yes, ${owner.name} has one`
      : `Yes, ${owner.name} that lives ${owner.location} owns one too.`;
    console.log(log);
  });
}

tellMeMyStores();
hasStore();
