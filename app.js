'use strict';

// const MyArray = require('./Collection');
// const MyArrayProto = require('./Collection');

let testData = [
  1,
  2,
  1990,
  85,
  24,
  'Vasya',
  'colya@example.com',
  'Rafshan',
  'ashan@example.com',
  true,
  false,
];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
let testData3 = [
  {
    name: 'Vasya',
    email: 'vasya@example.com',
    age: 20,
    skills: {
      php: 0,
      js: -1,
      madness: 10,
      rage: 10,
    },
  },
  {
    name: 'Dima',
    email: 'dima@example.com',
    age: 34,
    skills: {
      php: 5,
      js: 7,
      madness: 3,
      rage: 2,
    },
  },
  {
    name: 'Colya',
    email: 'colya@example.com',
    age: 46,
    skills: {
      php: 8,
      js: -2,
      madness: 1,
      rage: 4,
    },
  },
  {
    name: 'Misha',
    email: 'misha@example.com',
    age: 16,
    skills: {
      php: 6,
      js: 6,
      madness: 5,
      rage: 2,
    },
  },
  {
    name: 'Ashan',
    email: 'ashan@example.com',
    age: 99,
    skills: {
      php: 0,
      js: 10,
      madness: 10,
      rage: 1,
    },
  },
  {
    name: 'Rafshan',
    email: 'rafshan@example.com',
    age: 11,
    skills: {
      php: 0,
      js: 0,
      madness: 0,
      rage: 10,
    },
  },
];
let testData4 = [
  {
    name: 'Vasya',
    email: 'vasya@example.com',
    age: 20,
  },
  {
    name: 'Dima',
    email: 'dima@example.com',
    age: 34,
  },
  {
    name: 'Colya',
    email: 'colya@example.com',
    age: 46,
  },
  {
    name: 'Misha',
    email: 'misha@example.com',
    age: 16,
  },
  {
    name: 'Ashan',
    email: 'ashan@example.com',
    age: 99,
  },
  {
    name: 'Rafshan',
    email: 'rafshan@example.com',
    age: 11,
  },
  1,
  2,
  1990,
  85,
  24,
  'Vasya',
  'colya@example.com',
  'Rafshan',
  'ashan@example.com',
  true,
  false,
  [
    [
      [
        [
          1,
          2,
          1990,
          85,
          24,
          'Vasya',
          'colya@example.com',
          'Rafshan',
          'ashan@example.com',
          true,
          false,
          [
            {
              name: 'Rafshan',
              email: 'rafshan@example.com',
              age: 11,
            },
          ],
        ],
      ],
    ],
  ],
];

//
//
// Сделать функцию поиска значений в массиве.
//
//

function arrayFind(arr, check) {
  const regex = new RegExp(check, 'i');
  let res = [];

  arr.filter((element) => {
    if (typeof element === 'string') {
      if (regex.test(element)) {
        res.push(element);
      }
    }
  });
  return res;
}

//
//
// Сделать функцию подсчета среднего значения, с возможностью исключения не числовых значений
//
//

function arrayAvg(date, bool = false) {
  let count = 0;
  let sum = 0;

  date.forEach((item) => {
    if (typeof item === 'number') {
      sum += item;
      count++;
    }
  });

  return bool ? sum / date.length : sum / count;
}

//
//
// Сделать функцию которая разбивает массив на подмассивы указанной длинны.
//
//

function arrayChunk(arr, size) {
  let res = [];

  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    res[i] = arr.slice(i * size, i * size + size);
  }
  return res;
}

//
//
// Сделать функцию которая обрезает массив до указанного значения.
//
//

function arraySkipUntil(arr, value) {
  res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      res = arr.slice(i, arr.length);
    }
  }
  return res;
}

//
//
// Создать функцию которая создает объект на основании двух представленных массивов используя один как ключи, а другой как значения. Не подходящие ключи массивов должны быть исключены.
//
//

function arrayCombine(keys, value) {
  var res = {};
  for (var i = 0; i < keys.length; i++) {
    res[keys[i]] = value[i];
  }
  Object.keys(res).forEach((key) => res[key] === undefined && delete res[key]);
  return res;
}

//
//
// Создать функцию которая нормализует данные в массиве исключая или преобразуя не подходящие.
//
//

function arrayNormalize(arr, type, bool = false) {
  const res = [];
  arr.forEach((item) => {
    if (typeof item === type) {
      res.push(item);
    }
    if (bool) {
      typeof item === 'number' ? res.push(item) : null;
    }
  });
  return res;
}

//
//
// Сделать функцию которая возвращает уникальные элементы массива.
//
//

function arrayUnique(arr) {
  let result = [];

  for (let elem of arr) {
    if (!result.includes(elem)) {
      result.push(elem);
    }
  }

  return result;
}

//
//
// Сделать функцию которая создает массив указанной длинны и заполняет его переданными значениями.
//
//

function arrayFill(lenght, value) {
  const res = [];

  for (let i = 0; i < lenght; i++) res.push(value);

  return res;
}

//
//
//
//
//
// 13 (2 бала)
// Создать конструктор (без использования классов es6) Collection который позволяет манипулировать массивом. Все функции должны быть преобразованы в модули СommonJS и подключенный из отдельных файлов Методы которые надо реализовать в коллекции: map, filter, reduce - эти методы должны возвращать коллекцию с результатом не меняя старую коллекцию transform, sanitize - преобразует текущую коллекцию (аналоги map, filter) every, indexOf - работают так же как и стандартные методы в массиве values, toArray - возвращает array toJSON, toQueryString, toString - возвращает значение в указанном формате isEmpty - проверяет пустая коллекция или нет Статические методы которые надо реализовать в коллекции: make - создает коллекцию на основании переданного массива. map, filter, reduce - эти методы должны возвращать коллекцию с результатом не меняя старую коллекцию every, indexOf - работают так же как и стандартные методы в массиве toJSON, toQueryString - возвращает значение в указанном формате Свойства массива которые надо реализовать в коллекции: lenght

// Синтаксис статики:
// Collection.make([arr: array = []]): Collection
// Collection.map(arr: array, callback: function): Collection
// Collection.filter(arr: array, callback: function): Collection
// Collection.reduce(arr: array, callback: function [, initial: any]): Collection
// Collection.every(arr: array, callback: function): void
// Collection.indexOf(arr: array, searchElement: string [, fromIndex: number = 0): number
// Collection.toJSON(arr: array): string
// Collection.toQueryString(arr: array): string
// Collection.isEmpty(arr: array): boolean

// Синтаксис методов объекта:
// objCollection.map(callback: function): Collection
// objCollection.filter(callback: function): Collection
// objCollection.reduce(callback: function [, initial: any]): Collection
// objCollection.transform(callback: function): Collection
// objCollection.sanitize(callback: function): Collection
// objCollection.every(callback: function): void
// objCollection.indexOf(searchElement: string [, fromIndex: number = 0): number
// objCollection.toJSON(): string
// objCollection.toQueryString(): string
// objCollection.toString(): string
// objCollection.isEmpty(): boolean
// Пример:
const myArr = new MyArray();
let numbers = [1, 2, 3, 4];
// myArr.forEach((item) => item * 2).filter((item) => item < 2);
// .toJSON(); // "[4,6,8]"

console.log(
  numbers.forEach((item) => {
    console.log(item);
  })
);
