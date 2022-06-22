window.addEventListener("load", solve);

function solve() {
    document.querySelector('#publish-btn').addEventListener('click', publishFunc);
    document.querySelector('#clear-btn').addEventListener('click', clearBtnFunc);
    let inputPostTitle = document.querySelector('#post-title');
    let inputPostCategory = document.querySelector('#post-category');
    let inputPublishTextArea = document.querySelector('#post-content');
    let reviewList = document.querySelector('#review-list');


    function publishFunc(event) {
        event.preventDefault();
        if (inputPostCategory.value === "" || inputPostTitle.value === "" || inputPublishTextArea.value === "") {
            return
        }
        let elementEditBtn = document.createElement('button');
        elementEditBtn.textContent = "Edit";
        let elementCreateBtn = document.createElement('button');
        elementCreateBtn.textContent = 'Approve';
        elementEditBtn.classList.add('action-btn', 'edit');
        elementCreateBtn.classList.add('action-btn', 'approve');

        let elementLi = document.createElement('li');
        elementLi.classList.add('rpost');

        let elementArticle = document.createElement('article');
        let elementH4 = document.createElement('h4');
        elementH4.textContent = inputPostTitle.value;

        elementArticle.appendChild(elementH4);
        elementArticle.appendChild(document.createElement('p'));
        elementArticle.appendChild(document.createElement('p'));
        elementArticle.querySelector('p').textContent = `Category: ${inputPostCategory.value}`;
        elementArticle.querySelector('p:last-child').textContent = `Content: ${inputPublishTextArea.value}`;

        elementLi.appendChild(elementArticle);
        elementLi.appendChild(elementCreateBtn);
        elementLi.appendChild(elementEditBtn);
        reviewList.appendChild(elementLi);


        [inputPostCategory.value, inputPostTitle.value, inputPublishTextArea.value] = ["", '', ''];

        elementLi.querySelector('.edit').addEventListener('click', editBtnAction);
        elementLi.querySelector('.approve').addEventListener("click", approveBtnAction);

        function editBtnAction() {
            [inputPostCategory.value, inputPostTitle.value, inputPublishTextArea.value] = [
                elementArticle.querySelector('p').textContent,
                elementH4.textContent, elementArticle.querySelector('p:last-child').textContent];
            elementLi.remove();

        }

        function approveBtnAction() {
            // if (!(elementArticle.querySelector('p').textContent ||
            //     elementH4.textContent ||
            //     elementArticle.querySelector('p:last-child').textContent)) {
            //     return;
            // }
            document.querySelector('#published-list').appendChild(elementLi);
            elementEditBtn.remove();
            elementCreateBtn.remove();

        }
    }

    function clearBtnFunc() {
        document.querySelector('#published-list').innerHTML = '';

    }


}
