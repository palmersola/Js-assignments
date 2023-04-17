const header = document.getElementsByTagName("header")[0];
const sections = document.getElementsByTagName("section");
const current = document.getElementsByClassName("current")[0];
const afterCurrent = current.nextElementSibling;
const beforeCurrent = current.previousElementSibling.childNodes[1];
const highlight = document.getElementsByClassName("highlight")[0].parentNode.parentNode;
const h2 = document.getElementsByTagName("h2");

console.log(header);
console.log(sections);
console.log(current);
console.log(afterCurrent);
console.log(beforeCurrent);
console.log(highlight);
console.log(h2);
