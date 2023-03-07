(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const burger = function() {
	console.log('my burger');
}
burger()

module.export = burger
},{}],2:[function(require,module,exports){
const sliderFunc = function (){
	console.log('my slider');
}
sliderFunc()
// таким образом я экспортирую данную фнукцию из файла
module.export = sliderFunc

},{}],3:[function(require,module,exports){
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
console.log('hi');
},{"./modules/burger":1,"./modules/slider":2}]},{},[3]);
