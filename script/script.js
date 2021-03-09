const contentInput  = document.querySelector('.content__input');
const searchList = document.querySelector('.search__list');
const listItem = document.querySelector(".search__list-item");
const content = document.querySelector(".main");

contentInput.addEventListener("keyup", (event) => {
    let target = event.target;
    let userData = target.value;
    let emptyArray = [];
    if(userData) {
        emptyArray = hints.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data ='<li class="search__list-item" onclick="select(this)">'+ data +'</li>';
    });
    searchList.classList.add('active');
    } else {
        searchList.classList.remove('active');
    }
    showHints(emptyArray);
});

function select(element) {
    let selectUserData = element.textContent;
    contentInput.value = selectUserData;
}

function showHints(list) {
    let listData;
    if(!list.length) {
        userValue = contentInput.value;
        listData = '<li class="search__list-item">'+ userValue  +'</li>';
    } else {
        listData = list.join('');
    }
    searchList.innerHTML = listData;
}

content.addEventListener("click", (event) => {
    let count = 0;
    let target = event.target;
    if(target.matches('.container') || target.matches('.main')) {
        searchList.classList.remove('active');
    } 
    console.log(count++);
});
content.removeEventListener("click", (event) => {
    let count = 0;
    let target = event.target;
    if(target.matches('.container') || target.matches('.main')) {
        searchList.classList.remove('active');
    } 
    console.log(count++);
});
