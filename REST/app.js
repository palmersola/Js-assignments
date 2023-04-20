const renderDiv = document.getElementById("data");

const all = document.getElementById("all");
const post10 = document.getElementById("post10");
const create = document.getElementById("create");
const post12 = document.getElementById("post12");
const up12 = document.getElementById("up12");
const del12 = document.getElementById("del12");

function render(data) {
  renderDiv.innerHTML = "";
  data.map(post => {
    let div = document.createElement("div");
    div.classList.add("post");
    let h3 = document.createElement("h3");
    h3.innerText = post.title;
    let h4 = document.createElement("h4");
    h4.innerText = `Post #${post.id}`;
    let p = document.createElement("p");
    p.innerText = post.body;
    div.append(h3);
    div.append(h4);
    div.append(p);
    renderDiv.append(div);
  });
}

function renderDel() {
  renderDiv.innerHTML = "";

  let div = document.createElement("div");
  div.classList.add("post");
  let h3 = document.createElement("h3");
  h3.innerText = "Post Deleted";
  div.append(h3);
  renderDiv.append(div);
}

let allPosts = () =>
  fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json()).then(json => render(json));

let postId = id =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json()).then(json => render([json]));

let createPost = () =>
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "New Post",
      body:
        "We have created new post! Check console for the post id. The id should be over 100, since the API has 100 posts already.",
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => res.json())
    .then(json => {
      render([json]);
      console.log(json.id);
    });

let replacePost = id =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: `WOOHOO Replaced Post #12`,
      body: "We replaced the post with the id of 12 to say whatever we wanted. I may even replace the title...",
      userId: 2
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => res.json())
    .then(json => render([json]));

let replaceTitle = (id, title) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: title,
      body:
        "API docs says that updates are fake, so it wont return the other information, only fake update what you have changed soooo here is a new body just because."
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => res.json())
    .then(json => render([json]));

let deletePost = id =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(json => renderDel([json]));

all.addEventListener("click", e => {
  e.preventDefault();
  allPosts();
});
post10.addEventListener("click", e => {
  e.preventDefault();
  postId(10);
});
create.addEventListener("click", e => {
  e.preventDefault();
  createPost();
});
post12.addEventListener("click", e => {
  e.preventDefault();
  replacePost(12);
});
up12.addEventListener("click", e => {
  e.preventDefault();
  replaceTitle(12, "I replaced the Title!");
});
del12.addEventListener("click", e => {
  e.preventDefault();
  deletePost(12);
});
