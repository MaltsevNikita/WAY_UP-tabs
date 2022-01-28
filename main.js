// Объявляем переменые
const tabs = document.getElementById('tabs'), //массив - заголовки табов
      content = document.querySelectorAll('.content'), //массив -  контент всех табов
      tabsDop = document.getElementById('tabs-dop'),// массив со всхоженными табами
      contentDop = document.querySelectorAll('.content-dop');//массив с контентом вложенных табов


const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
};
//обработчик клика по заголовку таба
tabs.addEventListener('click', (e) => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
});

const changeClassDop = el => {
    for(let i = 0; i < tabsDop.children.length; i++) {
        tabsDop.children[i].classList.remove('active');//удаляем класс active у всех табов
    }
    el.classList.add('active');//добавляем класс active табу, по которомц кликнули
};
//переключение вложенных табов
tabsDop.addEventListener('click', (e) => {
    const currTab = e.target.dataset.btndop;
    changeClassDop(e.target);
    for(let i = 0; i < contentDop.length; i++) {
        contentDop[i].classList.remove('active');
        if(contentDop[i].dataset.contentdop === currTab) {
            contentDop[i].classList.add('active');
        }
    }
});