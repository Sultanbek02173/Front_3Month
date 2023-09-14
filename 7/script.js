const postsContainerEl = document.getElementById('posts-container');
const loaderEl = document.getElementById('loader');
const filterEl = document.getElementById('filter');

const limit = 10;
let page = 1;
let isLoading = false;
let storage = [];

const renderPost = (post) => {
    const { id, title, body } = post;

    return `
        <div class="post">
            <div class="number">${id}</div>
            <div class="post_info">
                <h2>${title}</h2>
                <p class="post_body">${body}</p>
            </div>
        </div>
    `;   
};

const getTamplate = (posts) =>{
    let template = '';

    for (let element of posts) {
        template += renderPost(element);
    }

    return template;
};

const getData = async () => {
    try {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
        const data = await responce.json();
        storage = [...storage,...data];

        page += 1;

        return data;
    } catch (err) {
        console.log(err);
    }
}

const showPosts = async () => {
    loaderEl.classList.add('show');
    isLoading = true;

    const posts = await getData();
    let template = getTamplate(posts);

    postsContainerEl.innerHTML += template;
    loaderEl.classList.remove('show');
    isLoading = false;
};

const onWindowScroll = () => {
    if (isLoading) {
        return;
    }
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    const endOfScroll = scrollTop + clientHeight + 5;

    if (endOfScroll >= scrollHeight) {
        showPosts();
    }
};

const onSearch = (event) => {
    const term = event.target.value.toLowerCase();

    const filteredPosts = storage.filter((el) => {
        if(el.title.toLowerCase().includes(term) || el.body.toLowerCase().includes(term) || el.id == term){
            return `${el.id}`;
        }
    } );
    const template = getTamplate(filteredPosts);
    postsContainerEl.innerHTML = template;
}

showPosts();

window.addEventListener("scroll", onWindowScroll);
filterEl.addEventListener('input', onSearch);