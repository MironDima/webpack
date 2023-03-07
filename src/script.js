//Нужно создать src папку
//Файл script.js будет точкой входа, 
// т.е он будет примнимать все наши модули 


// методов require()
// это встроенная функция для включения внешних модулей
// которые существуют в отдельных файлах.
// Оператор require() читает файл JavaScript, выполняет его,
//  а затем возвращает экспортированный объект

// 1 require() можно вызвать из любого места
// 2 require() может быть вызван условно

const slider = require('./modules/slider')
						//путь к нашему модулю
const burger = require('./modules/burger')	
slider()
burger()


// и нам нужно сборщик
// СОБЕРИТЕ СВОЙ ПЕРВЫЙ МОДУЛЬ с Browserify
// 1 установка npm install -g browserify
// 2  browserify script.js -o slider.js
// script.js это точка входа 
// slider.js наш модуль 
// в терминале указвем папку dist куда будет создаваться файл
// browserify src/script.js -o dist/slider.js
// тем самым мы создаем файл  slider.js в котором будет
//  находиться и содержимое точки входа и содержимое модуля
// подключаем его к верстке


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Webpack
// как установить?

// документациця ->  гайды -> базаовая настройка
// npm init -y
// -y говорит что мы соглашаемся со всеми настройками,поэтому лучше писать без него
// npm install webpack webpack-cli --save-dev

// description описание проэкт
// entry point: (index.js) script.js - точка входа наш файл
// test command тестовые команды
// git repository: гит репозиторий
// keywords: ключевые слова
// author: dima miron
// license: (ISC) лицензия
// создается фалй пакет json
// {
// 	"name": "webpack",
// 	"version": "1.0.0",
// 	"description": "",
// 	"main": "script.js",
// 	"scripts": {
// 	  "test": "echo \"Error: no test specified\" && exit 1"
// 	},
// 	"author": "dima miron",
// 	"license": "ISC"
//   }
// packege.json - это оснрвой файл описания нашего проэкта

// 2 шаг
// npm install webpack webpack-cli --save-dev
// создаст локально папку nodesmodule и 