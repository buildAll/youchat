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


    li.innerHTML = msg.nickname + ': ' + msg.text;

    if (msg.nickname === document.getElementById('nickname').value) {
        li.style.textAlign = 'right';
    }

    msgList.appendChild(li);
});


