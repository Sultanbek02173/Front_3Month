let posts = document.getElementById("posts");

let item_serch = document.getElementById("item_serch");
let searchItem = document.getElementById("input");
let btn = document.getElementById("btn");

const getPosts = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await responce.json();


    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        console.log(item);

        let post = document.createElement("div");
        post.className = "post";

        post.innerHTML = `<h1>${item.id}</h1> <p><b>name:</b> ${item.name}</p> <p><b>username:</b> ${item.username}</p> <p><b>email:</b> ${item.email}</p> <p><b>phone:</b> ${item.phone}</p> <p><b>website:</b> ${item.website}</p>`;

        posts.append(post);

    }
};


let post = document.createElement("div");
post.className = "post";

btn.onclick = async () => {
    const id = searchItem.value;

    const responce = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await responce.json();

    post.innerHTML = "";

    if (id >= 1 && id <= data.length) {

        const item = data[id - 1];

        post.innerHTML = `<h1>${item.id}</h1> <p><b>name:</b> ${item.name}</p> <p><b>username:</b> ${item.username}</p> <p><b>email:</b> ${item.email}</p> <p><b>phone:</b> ${item.phone}</p> <p><b>website:</b> ${item.website}</p>`;

        item_serch.append(post);

    } else if (id == "") {
        post.innerHTML = '';
        item_serch.append(post);
    } else {
        post.innerHTML = `<h1>Такого пользователя не существует!</h1>`;
        item_serch.append(post);
    }
};


getPosts();