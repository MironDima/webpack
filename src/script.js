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

// const slider = require('./modules/slider')
// 						//путь к нашему модулю
// const burger = require('./modules/burger')	
// slider()
// burger()


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
// 	"name": "webpackname",
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
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 2 шаг
// npm install webpack webpack-cli --save-dev
// создаст локально папку nodesmodule и 
// !!!!!!!!!!!!БАГ!!!!!!!!!!!!!!!!!!!!!!!!!
// если выдает ошибку 
// npm i webpack@5.58.1
// добавляю npm install --save-dev webpack-cli
// удаляю вручную Dependencies
// и добавлялю devDependencies  webpack
// npm i webpack-cli@4.11.1
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// package-lock.json отвечает за связь разных библиотек
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// .gitignore
// для того чтобы  package-lock.json и nodemodules
// не попоали в гит хаб
// не попадут в отслеживание гитом,
// т е мы же открываем в другом компе

// создаем гитигнор
// в корне папки
// /node_modules
// package-lock.json
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// СОБИРАЕМ НАШ ПРОЭКТ С ПОМОЩЬЮ WEBAPACK

// ПРОПИСЫВАЕМ
// npx webpack
// который возьмет наш скрипт в src/script.js  в качестве
//  точки входа и сгенерирует dist/main.jsв качестве вывода 

//scripts
// scripts": {
//     "build": "webpack",
//     "watch": "webpack --watch"  для постоянного отслеживания
//   },

// npm run watch

//особенности es6
import slider from './modules/slider'
						//путь к нашему модулю
import burger from './modules/burger'


// Баги
// The 'mode' option has not been set, webpack 
// will fallback to 'production' for this value.
// нужно добавить к скриптам mode

// webpack dev serever
// Используйте веб-пакет с сервером разработки, который обеспечивает перезагрузку в реальном времени. 
// Это следует использовать только для разработки
 
//делаем настройку
// чтобы у нас как и лайв сервер просиходили изменения

// devServer: {
// 	hot: true,   //релоуд для перезагрузки
// 	static: {   
// 		directory: './dist',  
// 		watch: true
// 	}
// }
// }
// "start": "webpack serve --mode=development --open"

