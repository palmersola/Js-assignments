"use strict";
let books = [
    {
        id: 1,
        title: "Book 1",
        author: "Palmer",
        published: new Date(),
        available: true
    },
    {
        id: 2,
        title: "Book 2",
        author: "Jay",
        published: new Date(),
        available: true
    },
    {
        id: 3,
        title: "Book 3",
        author: "Peter",
        published: new Date(),
        available: true
    },
    {
        id: 4,
        title: "Book 4",
        author: "Sarah",
        published: new Date(),
        available: true
    }
];
const addBook = (book) => { books.push(book); };
addBook({
    id: 5,
    title: "Book 5",
    author: "John",
    published: new Date(),
    available: true
});
function findBookById(id) {
    return books.find(book => book.id === id);
}
console.log(findBookById(2));
function updateBook(book) {
    let update = books.find(item => item.id === book.id);
    update.title = "New Title";
    return update ? true : false;
}
console.log(updateBook(books[2]));
function removeBook(id) {
    let check = books.find(book => book.id === id);
    let remove = books.filter(book => book.id !== id);
    books = remove;
    return check ? true : false;
}
console.log(removeBook(2));
console.log(books);
