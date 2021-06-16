Проблема:

На данный момент в нашем проекте если мы добавляем новый пост, после этого делаем редирект,
что бы увидеть страницу с обновленным списком постов.
Это тяжеловесная операция, которая при слабом интернете может занимать много времени

Гипотеза:

Вот было бы здорово не перезагружать всю страницу, а просто создать в доме новый элемент, куда вставить новые данные

Решение: AJAX

Мы будем пользоваться инструментом под названием Fetch
Его нет в ноде, но его предоставляют браузеры

fetch('/path', {})

1. Создаем клиентский js (в папке public)
   Навешиваем слушатель на событие отправки формы

Собираем данные формы и отправляем в теле запроса

<script>
document.forms.postsForm.addEventListener("submit", async (e) => {
  e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    const response = await fetch("/posts/add", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    });

    const dataFromServer = await response.json();
    console.log(dataFromServer);
    });
</script>
