window.addEventListener('load', solve);

function solve() {
    let totalLikes = 0;
    document.getElementById('add-btn').addEventListener('click', addBtn)

    function addBtn(event) {

        let input = {
            genre: document.getElementById('genre').value,
            name: document.getElementById('name').value,
            author: document.getElementById('author').value,
            date: document.getElementById('date').value
        }

        event.preventDefault();
        if (input.genre === "" || input.name === "" || input.author === "" || input.date === "") {
            return;
        }

        let collectionContainer = document.querySelector('#all-hits .all-hits-container');

        let div = document.createElement('div');
        div.classList.add('hits-info');
        div.innerHTML = `<img src='./static/img/img.png'>
<h2>Genre: ${input.genre}</h2>
<h2>Name: ${input.name}</h2>
<h2>Author: ${input.author}</h2>
<h3>Date: ${input.date}</h3>
<button class="save-btn">Save song</button>
<button class="like-btn">Like song</button>
<button class="delete-btn">Delete</button>`

        collectionContainer.appendChild(div);

        document.getElementById('genre').value = '';
        document.getElementById('name').value = "";
        document.getElementById('author').value = "";
        document.getElementById('date').value = "";

        div.querySelector('.like-btn').addEventListener('click', likeBtn);
        div.querySelector('.save-btn').addEventListener('click', saveBtn);
        div.querySelector('.delete-btn').addEventListener('click', deleteBtn);

        function likeBtn(event) {
            event.target.disabled = true;
            totalLikes += 1;
            document.querySelector('#total-likes .likes > p:nth-child(1)').textContent = `Total Likes: ${totalLikes}`;
        }

        function saveBtn(event) {
            let currentSong = event.target.parentElement
            let genre = currentSong.querySelectorAll('h2')[0].textContent;
            let name = currentSong.querySelectorAll('h2')[1].textContent;
            let author = currentSong.querySelectorAll('h2')[2].textContent;
            let date = currentSong.querySelector('h3').textContent;

            let elDiv = document.createElement('div');
            elDiv.classList.add('hits-info');
            elDiv.innerHTML = `<img src='./static/img/img.png'>
<h2>${genre}</h2>
<h2>${name}</h2>
<h2>${author}</h2>
<h3>${date}</h3>
<button class="delete-btn">Delete</button>`

            elDiv.querySelector('.delete-btn').addEventListener('click', deleteBtn)

            document.querySelector('#saved-hits div.saved-container').appendChild(elDiv);
            currentSong.remove();
        }

        function deleteBtn(event) {
            event.target.parentElement.remove();

        }
    }
}