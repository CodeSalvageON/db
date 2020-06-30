var ship_name = '';
var ship_type = '';
var char_type = '';

function getAccountAttributes() {
   ship_name = document.getElementById('shipname').value;
   localStorage.setItem('name', ship_name);
   
   location = 'https://starcrap2--codesalvageon.repl.co/scenes/logged_in.html';
}

function setAccountInName() {
   document.getElementById('item').innerText = 'Ship Name: '+localStorage.getItem('name');
}
