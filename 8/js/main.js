const createUserForm = document.getElementById('create-user');
const userEl = document.getElementById('users');

const usernameEl = createUserForm.username;
const passwordEl = createUserForm.password;
const emailEl = createUserForm.email;

const apiUrl = 'http://localhost:5000';

const renderUser = (user) => {
    const { id, username, email } = user;

    return `
        <li id="${id}">id: ${id}, ${username} (${email}) <a href="javascript:void(0)" data-action="delete">delete</a></li>
    `;
};

const register = async (username, email, password) => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        };
        const response = await fetch(`${apiUrl}/register`, options);
        const data = await response.json();

        alert(`User ${username} is successfuly registered`);
    } catch (err) {
        alert(err.message);
    }
};

const getUsers = async () => {
    const response = await fetch(`${apiUrl}/users`);
    const data = await response.json();

    let temlate = '';

    for (const user of data) {
        temlate += renderUser(user);
    }

    userEl.innerHTML = temlate;
    return data;
};

const deleteUser = async (id) => {
    try{
        const deleteUser = await fetch(`${apiUrl}/users/${id}`,  { method: 'DELETE' } );
        alert(`User deleted`);
        return deleteUser;
    }catch (err){
        alert(err);
    }
    
};

const editUser = async (id, username, email, password) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    };
    const response = await fetch(`${apiUrl}/users/${id}`, options);
    console.log(await response.json());
}

const onRegister = async (event) => {
    event.preventDefault();
    const username = usernameEl.value;
    const email = emailEl.value;
    const password = passwordEl.value;

    await register(username, email, password);
};

const onDelete = async (event) => {
    const { target } = event;

    if (target.dataset.action === 'delete') {
        const userId = target.parentElement.id;
        await deleteUser(userId);
        document.getElementById(userId).remove();
    }
};

getUsers();

// editUser(2, "Sultanbek", "tests32@gamil.com", "dsadsacasasdas");

createUserForm.addEventListener('submit', onRegister);
userEl.addEventListener('click', onDelete);