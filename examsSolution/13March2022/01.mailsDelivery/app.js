function solve() {


    document.getElementById('add').addEventListener('click', addListBtn)
    document.getElementById('reset').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('recipientName').value = '';
        document.getElementById('title').value = '';
        document.getElementById('message').value = '';

    })

    function addListBtn(event) {
        event.preventDefault();

        let input = {
            recipientName: document.getElementById('recipientName').value,
            title: document.getElementById('title').value,
            textarea: document.getElementById('message').value
        }

        if ((input.recipientName === '' || input.title === '' || input.textarea === '')) {
            return
        }
        let liList = document.createElement('li');
        liList.innerHTML = `<h4>Title: ${input.title}</h4>
                    <h4>Recipient Name: ${input.recipientName}</h4>
                    <span>${input.textarea}</span>
                    <div id="list-action">
                        <button type="submit" id="send">Send</button>
                        <button type="submit" id="delete">Delete</button>
                    </div>`;
        document.getElementById('list').appendChild(liList);
        document.getElementById('recipientName').value = '';
        document.getElementById('title').value = '';
        document.getElementById('message').value = '';
        liList.querySelector('#send').addEventListener('click', sendBtn);
        liList.querySelector('#delete').addEventListener('click', deleteBtn);


        function sendBtn(event) {

            let liSentList = document.createElement('li');
            liSentList.innerHTML = `<span>To: ${input.recipientName}</span>
                        <span>Title: ${input.title}</span>
                        <div class="btn">
                            <button type="submit" class="delete">Delete</button>
                        </div>`;
            liSentList.querySelector('.delete').addEventListener('click',deleteBtn)
            document.querySelector('.sent-list').appendChild(liSentList);
            (event.target.parentElement.parentElement).remove();
        }

        function deleteBtn(event) {
            let liDeleteList = document.createElement('li');
            liDeleteList.innerHTML = `<span>To: ${input.recipientName}</span>
                        <span>Title: ${input.title}</span>`;
            document.querySelector('.delete-list').appendChild(liDeleteList);
            event.target.parentElement.parentElement.remove();
        }

    }
}

solve()