let dzien = document.getElementById('a');
let width = dzien.offsetWidth;
let height = dzien.offsetHeight;
let pointer = document.getElementById("pointer");
alert(width, height);
pointer.style.width = width + 'px';
pointer.style.height = height + 'px';