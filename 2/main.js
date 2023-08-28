console.log("Client request to get data...");
console.log("loading started");

const jsonData = {
    username: "Sultan",
    age: 21,
};

const strData = JSON.stringify(jsonData);


const promise = new Promise((resolve, reject) => {
    const errorIndicator = false;

    setTimeout(() => {
        if (!errorIndicator) {
            const responce = {
                status: 200,
                url: "http://exemple.com",
            };

            console.log('Server get responce', responce);
            console.log('Preparing data...');

            resolve("Hello from previous step");
        } else {
            reject("Oops something has gone wrong");
        }
    }, 2000);
});

promise
    .then((props) => {
        console.log(props);
        setTimeout(() => {
            const perseData = JSON.parse(strData);

            console.log("Server get data", perseData);
        }, 2000);
    })
    .catch(() => {
        console.log("Sorry try again");
    })
    .finally(() => {
        console.log("Loading ended");
    })