# Kinoshka API

## Передумови

- Git - [Завантажте та встановіть Git](https://git-scm.com/downloads).
- Node.js - [Завантажте та встановіть Node.js](https://nodejs.org/en/download/) і менеджер пакетів npm.

## Завантаження

```bash
git clone
```

## Встановлення NPM модулів

```bash
$ npm install
```

## Змінні проекту

| Ключ            | Коментар                      |
| --------------- | ----------------------------- |
| `PORT`          | Порт API (необов'язковий)     |
| `HOST`          | Хост API (необов'язковий)     |
| `MONGO_URI`     | URI MongoDB                   |
| `ACCESS_SECRET` | Секретний ключ токена доступу |

## Запуск програми

### Компіляція та гаряче перезавантаження для розробки

```bash
npm run dev
```

### Компіляція та мінімізація для виробництва

```bash
npm run build
```

### Перевікра з [ESLint](https://eslint.org/)

```bash
npm run lint
```

### Формат з [Prettier](https://prettier.io/)

```bash
npm run format
```

### Швидкий старт

```bash
npm run start
```

Після запуску програми на порту (3000 за замовчуванням) ви можете відкрити
у вашому веб-переглядачі служба підтримки API, ввівши http://localhost:3000/api
