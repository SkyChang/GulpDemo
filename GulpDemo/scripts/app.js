var computer = require('./m');

var button = document.getElementById('my-button'); // add id="my-button" into html
button.addEventListener('click', clickBtn);

function clickBtn() {
    var c = new computer('sky');
    alert(c.add(5, 5));
}