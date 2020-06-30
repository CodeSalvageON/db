var ship_name = '';
var ship_type = '';
var char_type = '';

function getAccountAttributes() {
   ship_name = document.getElementById('shipname').value;
   localStorage.setItem('name', ship_name);
}
