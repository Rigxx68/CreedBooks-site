//оглавление
// пустой массив, где будет оглавление
const links = [];
// находим все подзаголовки и добавляем им id, который состоит из слова h3- и порядкового номера этого заголовка
[...document.querySelectorAll('h3')].forEach((el, i) => {
    // присваиваем id каждому элементу, добавляя к нему порядковый номер этого элемента
    el.id = `h3-${i}`;
    // отправляем в наш изначально пустой массив новый элемент с уже готовым HTML-кодом для ссылки
    links.push(`<li><a href="#h3-${i}">${el.textContent}</a></li>`);
});
// отправляем наш код в раздел list, который отвечает за оглавление
list.innerHTML = links.join('');

/*При нажатии на оглавление происходит плавное (благодаря transition в css) 
 * переключение между скрытием и отображением раскрывающегося содержимого */
function showList() {
    if (document.getElementById("list").classList.contains('list-content')) {
        document.getElementById("list").style.height = "320px";
        document.getElementById("list").classList.toggle("list-content");
    }
    else {
        document.getElementById("list").style.height = "0px";
        document.getElementById("list").classList.toggle("list-content");
    }

}

