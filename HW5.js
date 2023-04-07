// Вот документ с таблицей и формой.
// Как найти?…
// 1. Таблицу с `id="age-table"`.
const table = document.getElementById('age-table');
// 2. Все элементы `label` внутри этой таблицы (их три).
const label = document.querySelectorAll('#age-table label');
// 3. Первый `td` в этой таблице (со словом «Age»).
const td = table.querySelector('td');
// 4. Форму `form` с именем `name="search"`.
let form = document.getElementsByName('search')[0];
// 5. Первый `input` в этой форме.
let first = form.querySelector('input');
// 6. Последний `input` в этой форме.
let input = form.querySelectorAll('input');

//Что выведет этот код?
<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // BODY
</script>
Результат выведет BODY.