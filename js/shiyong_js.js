window.onload = function(){

var first_main=document.getElementById('first_main');
var second_main=document.getElementById('second_main');
var first=document.getElementById('first');
var second=document.getElementById('second');
var into=document.getElementById('into');
var ha=document.getElementById('ha');

first.onclick=function (){
first_main.style.display='block';
second_main.style.display='none';
into.style.display='none';
alert("如无法打开使用，请更换浏览器");
	};
second.onclick=function (){
first_main.style.display='none';
second_main.style.display='block';
into.style.display='none';
	};
ha.onclick=function (){
first_main.style.display='none';
second_main.style.display='none';
into.style.display='block';
	};

	}
