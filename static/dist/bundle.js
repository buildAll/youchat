/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);



/***/ },
/* 1 */
/***/ function(module, exports) {

	var mask = document.createElement('div');
	var input = document.createElement('input');
	var btn = document.createElement('btn');
	var body = document.getElementsByTagName('body')[0];

	mask.setAttribute('class', 'mask');
	input.setAttribute('class', 'login-input');
	input.setAttribute('placeholder', '请输入昵称');

	btn.innerHTML = 'start';

	btn.addEventListener('click', function() {
	    document.getElementById('nickname').value = input.value;
	    body.removeChild(mask);
	});

	mask.appendChild(input);
	mask.appendChild(btn);

	body.appendChild(mask);



/***/ },
/* 2 */
/***/ function(module, exports) {

	var socket = io();

	var input = document.getElementsByClassName('chat-input')[0];
	var btn = document.getElementsByClassName('btn')[0];
	var msgList = document.getElementById('message-list');



	btn.addEventListener('click', function() {
	    var nickname = document.getElementById('nickname').value;

	    socket.emit('chat message', {
	        nickname: nickname,
	        text: input.value
	    });
	    input.value = '';
	});

	socket.on('show message', function(msg) {
	    var li = document.createElement('li');
	    var nickname = msg.nickname || 'unknown';


	    li.innerHTML = nickname + ': ' + msg.text;

	    if (msg.nickname === document.getElementById('nickname').value) {
	        li.style.textAlign = 'right';
	    }

	    msgList.appendChild(li);
	});




/***/ }
/******/ ]);