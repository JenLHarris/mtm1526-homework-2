/*
	3 ways to get elements in your HTML:
	document.getElementById()
	-document.getElementsByTagName()
	-document.geteElementsByClassName()
*/

var item = document.getElementById('item');
var list = document.getElementById('list');

document.getElementById('add').addEventListener('click', function (ev) {

	var newLi = document.createElement('li');
	
	newLi.innerHTML = item.value;
    list.appendChild(newLi);

	
}, false);	

list.addEventListener('click', function (e) {
  if (e.target.className == 'done') {
    e.target.className = '';
  } else {
    e.target.className = 'done';
  }
}, false);
	