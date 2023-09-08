const http = require("http");
const fs = require("fs");
 
// данные, с которыми работает клиент
const users = [
    { id:1, name:"Tom", age:24}, 
    { id:2, name:"Bob", age:27},
    { id:3, name:"Alice", age:"23"}
]
// обрабатываем полученные от клиента данные
function getReqData(req) {
    return new Promise(async (resolve, reject) => {
        try {
            const buffers = [];
            for await (const chunk of req) {
                buffers.push(chunk);
            }
            const data = JSON.parse(Buffer.concat(buffers).toString());
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
}
 
http.createServer(async (request, response) => {
      
     // получение всех пользователей
     if (request.url === "/api/users" && request.method === "GET") {
        response.end(JSON.stringify(users));
    }
    // получение одного пользователя по id
     else if (request.url.match(/\/api\/users\/([0-9]+)/) && request.method === "GET") {
        // получаем id из адреса url
        const id = request.url.split("/")[3];
        // получаем пользователя по id
        const user = users.find((u) => u.id === parseInt(id));
        // если пользователь найден, отправляем его
        if(user) 
            response.end(JSON.stringify(user));
        // если не найден, отправляем статусный код и сообщение об ошибке
        else{
            response.writeHead(404, { "Content-Type": "application/json" });
            response.end(JSON.stringify({ message: "Пользователь не найден" }));
        }
    }
    // удаление пользователя по id  
    else if (request.url.match(/\/api\/users\/([0-9]+)/) && request.method === "DELETE") {
        // получаем id из адреса url
        const id = request.url.split("/")[3];
        // получаем индекс пользователя по id
        const userIndex = users.findIndex((u) => u.id === parseInt(id));
        // если пользователь найден, удаляем его из массива и отправляем клиенту
        if(userIndex > -1) {
            const user = users.splice(userIndex, 1)[0];
            response.end(JSON.stringify(user));
        }
        // если не найден, отправляем статусный код и сообщение об ошибке
        else{
            response.writeHead(404, { "Content-Type": "application/json" });
            response.end(JSON.stringify({ message: "Пользователь не найден" }));
        }
    }
    // добавление пользователя
    else if (request.url === "/api/users" && request.method === "POST") {
        try{
            // получаем данные пользователя
            const userData = await getReqData(request);
            // создаем нового пользователя
            const user = {name: userData.name, age: userData.age};
            // находим максимальный id
            const id = users.length === 0 ? 0 : Math.max.apply(Math,users.map(function(u){return u.id;}))
            // увеличиваем его на единицу
            user.id = id + 1;
            // добавляем пользователя в массив
            users.push(user);
            response.end(JSON.stringify(user));
        }
        catch(error){
            response.writeHead(400, { "Content-Type": "application/json" });
            response.end(JSON.stringify({ message: "Некорректный запрос" }));
        }
    }
    // изменение пользователя
    else if (request.url === "/api/users" && request.method === "PUT") {
        try{
            const userData = await getReqData(request);
            // получаем пользователя по id
            const user = users.find((u) => u.id === parseInt(userData.id));
            // если пользователь найден, изменяем его данные и отправляем обратно клиенту
            if(user) {
                user.age = userData.age;
                user.name = userData.name;
                response.end(JSON.stringify(user));
            }
            // если не найден, отправляем статусный код и сообщение об ошибке
            else{
                response.writeHead(404, { "Content-Type": "application/json" });
                response.end(JSON.stringify({ message: "Пользователь не найден" }));
            }
        }
        catch(error){
            response.writeHead(400, { "Content-Type": "application/json" });
            response.end(JSON.stringify({ message: "Некорректный запрос" }));
        }
    }
    else if (request.url === "/" || request.url === "/index.html") {
        fs.readFile("../index.html", (error, data) => response.end(data));
    }
    else{
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Ресурс не найден" }));
    }
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));
