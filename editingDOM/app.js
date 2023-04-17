const list = document.getElementById("list");

list.childNodes[3].innerHTML = "Granny Smith Apples";

list.childNodes[7].remove();

let li = document.createElement("li");
li.innerText = "Kombucha";
list.append(li);

const newList = ["protein bars", "almonds", "peanut butter"];
list.innerHTML = "";
newList.map(item => {
  let newli = document.createElement("li");
  newli.innerHTML = item;
  list.append(newli);
});

const almonds = list.childNodes[1];
almonds.classList.add("important");
