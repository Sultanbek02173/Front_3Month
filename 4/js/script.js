// #1

// const getPost = async() => {
//     const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await responce.json();

//     for (let index = 0; index < data.length; index++) {
//         const element = data[index];
//         if (index < 10 || index > (data.length - 11)){
//             console.log(element);
//         }
//     }
// }

// getPost();

// #2

// let obect = {};
// let mas = [];

// const getPost = async () => {
//     const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await responce.json();

//     for (let index = 0; index < data.length; index++) {
//         const element = data[index];
//         obect[index] = {"userId": element.userId, "title": element.title}
//     }
//     mas.push(obect)

// }

// getPost();

// console.log(mas);

// #3

// let div = document.getElementById("div");

// const getUsers = async () => {
//     const responce = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await responce.json();

//     for (let index = 0; index < data.length; index++) {

//         const element = data[index];

//         let text = document.createElement("p");
//         text.innerHTML = `<b>Name</b>${element.name} <br> <b>Phone</b>${element.phone} <br> <b>Username</b>${element.username} <br> <b>Website</b>${element.website} <br> <b>Email</b>${element.email} <br>`;
        
//         let number = document.createElement("h2");
//         number.textContent = `${element.id}`;
        
//         let elem = document.createElement("div");
//         elem.className = "item";

//         elem.append(number);
//         elem.append(text);
//         div.append(elem);
//     }
// }

// getUsers();

// #4

// let obect1 = {};
// let obect2 = {};
// let mas1 = [];
// let mas2 = [];

// const getPost = async () => {
//     const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await responce.json();

//     for (let index = 0; index < data.length; index++) {
//         const element = data[index];
//         if (index % 2 == 0){
//             obect1[index] = element;
//         }else if(index % 2 == 1){
//             obect2[index] = element;
//         }
//     }
//     mas1.push(obect1);
//     mas2.push(obect2);

// }

// getPost();

// console.log(mas1);
// console.log(mas2);

// #5

// let obect = {};
// let mas = [];

// const getPost = async () => {
//     const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await responce.json();

//     for (let index = 0; index < data.length; index++) {
//         const element = data[index]; 
//         if ((index + 1) % 10 === 0){
//             obect[index] = element;
//         }
//     }
//     mas.push(obect);

// }

// getPost();

// console.log(mas);