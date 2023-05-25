# aviasales

Небольшой аналог aviasales, в котором можно отфильтровать билеты по скорости, по дешевизне, по пересадкам

## Стек

- core-js 3.8.3
- vue 3.2.13
- vue-router 4.0.3
- vuex 4.0.0

## Структура проекта

assets: хранятся шрифты, стили и иконки

components: компоненты в формате .vue ->

UI:
- button-cheap.vue: кнопка фильтрации дешевых билетов
- button-fast.vue: кнопка фильтрации быстрых билетов

- v-filters-buttons.vue: копонент, включающий в себя UI
- v-logo.vue: компонент логотипа
- v-tickets-details.vue: копонент деталей о билете
- v-ticket.vue: компонент билета
- v-tikets: компонент, включающий в себя v-ticket.vue
- v-transplants.vue: компонент, включащий в себя фильтры пересадок

seeders: включает в себя json, который хранит данные о билетах

store: включает в себя логику приложения по фильтрации

views: главная страница приложения, которая включает в себя компоненты v-transplants.vue, v-filters-buttons.vue, v-tikets

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

## Project setup
