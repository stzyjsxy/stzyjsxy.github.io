window.onload=function (){
var onew=document.getElementById('new');
var ogone=document.getElementById('gone');
var zzww=document.getElementById('zzww');
var zzww2=document.getElementById('zzww2');
var mymusic=document.getElementById('mymusic'); 
var below=document.getElementById('below'); 
var below2=document.getElementById('below2');
var hide=document.getElementById('hide');
var hide2=document.getElementById('hide2');
var advl=document.getElementById('advl');
var advr=document.getElementById('advr');
var nol=document.getElementById('nol');
var nor=document.getElementById('nor');
var obayi1=document.getElementById('bayi1');
var otr1=document.getElementById('tr1');
var otr11=document.getElementById('tr11');
var obayi2=document.getElementById('bayi2');
var otr2=document.getElementById('tr2');
var otr22=document.getElementById('tr22');
var obayi3=document.getElementById('bayi3');
var otr3=document.getElementById('tr3');
var otr33=document.getElementById('tr33');

var zobayi1=document.getElementById('zbayi1');
var zotr1=document.getElementById('ztr1');
var zotr11=document.getElementById('ztr11');
var zobayi2=document.getElementById('zbayi2');
var zotr2=document.getElementById('ztr2');
var zotr22=document.getElementById('ztr22');
var zobayi3=document.getElementById('zbayi3');
var zotr3=document.getElementById('ztr3');
var zotr33=document.getElementById('ztr33');
var up=document.getElementById('up');
var down=document.getElementById('down');
var nav=document.getElementById('nav');
var nav_top=document.getElementById('nav_top');

onew.onmouseover=function (){
zzww.style.display='block';
zzww2.style.display='none';
	};
ogone.onmouseover=function (){
zzww2.style.display='block';
zzww.style.display='none';
	}
hide.onmouseover=function (){
 below.style.display='block';
};
hide.onmouseout=function (){
 below.style.display='none';
};
hide2.onmouseover=function (){
 below2.style.display='block';
};
hide2.onmouseout=function (){
 below2.style.display='none';
};

nol.onclick=function (){
 advl.style.display='none';
 nol.style.display='none';
};

nor.onclick=function (){
 advr.style.display='none';
 nor.style.display='none';
};

otr1.onmouseover=function (){
obayi1.style.display='block';
otr11.style.display='block';
	};
otr1.onmouseout=function (){
obayi1.style.display='none';
otr11.style.display='none';
	};

otr2.onmouseover=function (){
obayi2.style.display='block';
otr22.style.display='block';
	};
otr2.onmouseout=function (){
obayi2.style.display='none';
otr22.style.display='none';	
};

otr3.onmouseover=function (){
obayi3.style.display='block';
otr33.style.display='block';
	};
otr3.onmouseout=function (){
obayi3.style.display='none';
otr33.style.display='none';	
};




zotr1.onmouseover=function (){
zobayi1.style.display='block';
zotr11.style.display='block';
	};
zotr1.onmouseout=function (){
zobayi1.style.display='none';
zotr11.style.display='none';
	};

zotr2.onmouseover=function (){
zobayi2.style.display='block';
zotr22.style.display='block';
	};
zotr2.onmouseout=function (){
zobayi2.style.display='none';
zotr22.style.display='none';	
};

zotr3.onmouseover=function (){
zobayi3.style.display='block';
zotr33.style.display='block';
	};
zotr3.onmouseout=function (){
zobayi3.style.display='none';
zotr33.style.display='none';	
};

up.onclick=function (){
nav.style.display='block';
nav_top.style.display='none';	
};
down.onclick=function (){
nav.style.display='none';
nav_top.style.display='block';
};



}



