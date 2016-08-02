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

