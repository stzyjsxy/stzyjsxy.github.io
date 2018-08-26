
window.onload=function (){
var dakai=document.getElementById('dakai');
var guanbi=document.getElementById('guanbi');
var neihe=document.getElementById('neihe');


dakai.onclick=function (){
guanbi.style.display='block';
neihe.style.display='block';
dakai.style.display='none';
	};
guanbi.onclick=function (){
dakai.style.display='block';
neihe.style.display='none';
guanbi.style.display='none';
	};


}





