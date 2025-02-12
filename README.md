# **Скобки**  |  **Brackets**

![Reverse Int](./public/text.jpg)

Алгоритмическая задача курса [**_"JavaScript/Front-end"_** Stage 0](https://rs.school/js-stage0/)

## Задача

Реализуйте функцию `check(str, bracketsConfig)`, которая для заданной последовательности скобок будет возвращать `true` если она правильная, и `false` в противном случае.

Во втором параметре имеется `bracketsConfig` - - массив пар открывающих-закрывающихся скобок. Каждый подмассив включает в себя всего 2 элемента — открывающую и закрывающую скобку.

```js
check('()', [['(', ')']]) // -> true
check('((()))()', [['(', ')']]) // -> true
check('())(', [['(', ')']]) // -> false
check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
check('[(])', [['(', ')'], ['[', ']']]) // -> false
check('[]()', [['(', ')'], ['[', ']']]) // -> true
check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// special case: opening and closing bracket can be the same :)

check('||', [['|', '|']]) // -> true
check('|()|', [['(', ')'], ['|', '|']]) // -> true
check('|(|)', [['(', ')'], ['|', '|']]) // -> false
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true
```

Реализация задачи в файле `src/index.js`.

## Тестирование решения
1. Установите [Node.js](https://nodejs.org/en/download/)
2. Сделайте форк этого репозитория
3. Склонируйте себе этот репозиторий: https://github.com/<%your_github_username%>/brackets/
4. Перейдите в папку `brackets`
5. Вбейте в командную строку `npm install` для установки зависимостей
6. Выполните `npm test` в командной строке.
7. Вы увидите число ожидающих (pending), проходящих и падающих тестов. 100% проходящие тесты соответствуют максимальному баллу за задание.
