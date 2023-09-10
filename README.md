# task_vue3

[Макет](https://clck.ru/35VWkV)

Тестовое задание Frontend разработчик


Необходимо реализовать страницу поиска сотрудников, с предпросмотром профиля.
Приложение состоит из двух страниц, в sidebar осуществляется поиск и отображение результатов, можно искать одного сотрудника или нескольких.
На главной отображается карточка пользователя с личными данными.
Готовый проект выложите на github.

Sidebar
В строке поиска пользователя необходимо реализовать запрос к API для получения необходимых юзеров.
В случае если результат вернул ошибку (параметры запроса неверные, либо ошибка сервера), необходимо отобразить эту ошибку пользователю.
После успешно выполненного запроса, необходимо отобразить полученного пользователя или пользователей в интерфейсе.
Макет
https://www.figma.com/file/xEn4NVa7jVNgJC65Zx509X/Тестовое-задание-JF

Шрифт
В проекте используется шрифт Montserrat https://fonts.google.com/specimen/Montserrat

Обязательно:
1.SPA должно быть реализовано с использованием Vue,Vuex.
2.Необходимо создать основные компоненты.
3.Использовать actions, mutations.
3.Стили должны быть написаны с помощью препроцессора Scss
4.Во время всех запросов нужно сигнализировать пользователю через прелоадер, что происходит запрос.
5.Использовать изоляцию стилей.

Документация API
https://jsonplaceholder.typicode.com


Пример запроса пользователя по id:
https://jsonplaceholder.typicode.com/users/1
method: GET

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).