
	
	
	window.onload = function(){
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




		canvas = document.getElementById('canvas');
		canvas.width = WINDOW_WIDTH;
		canvas.height = WINDOW_HEIGHT;

		context = canvas.getContext('2d');

		addStar();
		setInterval(render,33);
		liuxing();

		// render();
		document.body.addEventListener('mousemove',mouseMove);
	}

	function liuxing(){
		var time = Math.round(Math.random()*3000+33);
		setTimeout(function(){
			rnd = Math.ceil(Math.random()*stars.length)
			liuxing();
		},time)
	}

	function mouseMove(e){
		//因为是整屏背景，这里不做坐标转换
		mouseX = e.clientX;
		mouseY = e.clientY;
	}

	function render(){
		context.fillStyle = 'rgba(0,0,0,0.1)';
		context.fillRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
		// context.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT)
		for(var i =0; i<num ; i++){
			var star = stars[i];
			if(i == rnd){
				star.vx = -5;
				star.vy = 20;
				context.beginPath();
				context.strokeStyle = 'rgba(255,255,255,'+star.alpha+')';
				context.lineWidth = star.r;
				context.moveTo(star.x,star.y);
				context.lineTo(star.x+star.vx,star.y+star.vy);
				context.stroke();
				context.closePath();
			}
			star.alpha += star.ra;
			if(star.alpha<=0){
				star.alpha = 0;
				star.ra = -star.ra;
				star.vx = Math.random()*0.2-0.1;
				star.vy = Math.random()*0.2-0.1;
			}else if(star.alpha>1){
				star.alpha = 1;
				star.ra = -star.ra
			}
			star.x += star.vx;
			if(star.x>=WINDOW_WIDTH){
				star.x = 0;
			}else if(star.x<0){
				star.x = WINDOW_WIDTH;
				star.vx = Math.random()*0.2-0.1;
				star.vy = Math.random()*0.2-0.1;
			}
			star.y += star.vy;
			if(star.y>=WINDOW_HEIGHT){
				star.y = 0;
				star.vy = Math.random()*0.2-0.1;
				star.vx = Math.random()*0.2-0.1;
			}else if(star.y<0){
				star.y = WINDOW_HEIGHT;
			}
			context.beginPath();
			var bg = context.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r);
			bg.addColorStop(0,'rgba(255,255,255,'+star.alpha+')')
			bg.addColorStop(1,'rgba(255,255,255,0)')
			context.fillStyle  = bg;
			context.arc(star.x,star.y, star.r, 0, Math.PI*2, true);
			context.fill();
			context.closePath();
		}
	}

	function addStar(){
		for(var i = 0; i<num ; i++){
			var aStar = {
				x:Math.round(Math.random()*WINDOW_WIDTH),
				y:Math.round(Math.random()*WINDOW_HEIGHT),
				r:Math.random()*3,
				ra:Math.random()*0.05,
				alpha:Math.random(),
				vx:Math.random()*0.2-0.1,
				vy:Math.random()*0.2-0.1
			}
			stars.push(aStar);
		}
	}
