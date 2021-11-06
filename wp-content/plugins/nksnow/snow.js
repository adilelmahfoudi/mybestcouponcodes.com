// Definitions
nks.posx = new Array();
nks.posy = new Array();
nks.speedx = Math.random() * nks.maxstepx;
nks.speedy = new Array();
nks.active = new Array();
nks.actives = nks.snowflakes;

nks.maxwidth = window.innerWidth;
nks.maxheight = window.innerHeight;
nks.minheight = -nks.flakesize; // for invert mode
if (!nks.maxwidth) {
	nks.maxwidth = document.documentElement.clientWidth;
	nks.maxheight = document.documentElement.clientHeight;
}
if (!nks.maxwidth) {
	nks.maxwidth = document.body.clientWidth;
	nks.maxheight = document.body.clientHeight;
}

// Create some position + movement data
for (i = 0; i < nks.snowflakes; i++) {
	// starting position
	nks.posy[i] = Math.random() * nks.maxheight;
	nks.posx[i] = nks.maxwidth / nks.snowflakes * i;
	// movement
	nks.speedy[i] = 2 + Math.random() * (nks.maxstepy - 2);
	nks.active[i] = true;
}


if (window.onload) {
	nks.oldonload = window.onload;
}
window.onload=function(){
	currentTime = new Date();
	nks.endtime = currentTime.getTime() + nks.maxtime;
	// http://www.javascriptkit.com/javatutors/navigator.shtml
	if(navigator) {
		if(navigator.userAgent) {
			if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
				var ieversion=new Number(RegExp.$1) 
			}
		}
	}
	for (i = 0; i < nks.snowflakes; i++) {
		if (ieversion && ieversion==6) {
			// ie sucks
			document.getElementById('nksnow' + i).style.position='absolute';
		}
	}
	snow(nks);
	if (nks.oldonload) {
		nks.oldonload();
	}
}

function snow(nks) {
	currentTime = new Date();
	for (i = 0; i < nks.snowflakes; i++) {
		if (nks.active[i] === true) {
			nks.posy[i] = nks.posy[i] + nks.speedy[i] * nks.invert;
			nks.posx[i] = nks.posx[i] + nks.speedx;
			// wind effect
			if (Math.random() > 0.99) {
				if (nks.speedx < 2 && nks.speedx > -2) {
					nks.speedx = - nks.maxstepx +  Math.random() * nks.maxstepx * 2;
				}
			}
			// wind effect diminishes with time
			if (nks.speedx > 0) {
				if (Math.random() > 0.9) {
					nks.speedx = nks.speedx / 1.2;
				}
			}
			else if (nks.speedx < 0) {
				if (Math.random() > 0.9) {
					nks.speedx = nks.speedx / 1.1;
				}
			}
			// move flakes when they reach a limit
			if (nks.invert == 1 && nks.posy[i] > nks.maxheight ) {
				nks.posx[i] = Math.random() * nks.maxwidth;
				nks.posy[i] = - Math.random() * nks.maxheight / 2;
				if (currentTime.getTime() > nks.endtime) {
					nks.active[i] = false;
					nks.posy[i] = -100 - nks.flakesize;
					nks.actives--;
				}
			}
			if (nks.invert == -1 && nks.posy[i] < nks.minheight ) {
				nks.posx[i] = Math.random() * nks.maxwidth;
				nks.posy[i] = nks.maxheight + Math.random() * nks.maxheight * 0.5;
				if (currentTime.getTime() > nks.endtime) {
					nks.active[i] = false;
					nks.posy[i] = -100 - nks.flakesize;
					nks.actives--;
				}
			}
			if (nks.posx[i] > nks.maxwidth + nks.flakesize) {
				nks.posx[i] = -nks.flakesize ;
				//posy[i] = maxheight - Math.random() * maxheight;
			}
			else if (nks.posx[i] < - nks.flakesize ) {
				nks.posx[i] = nks.maxwidth + nks.flakesize;
				//posy[i] = maxheight - Math.random() * maxheight;
			}
			document.getElementById('nksnow' + i).style.top=nks.posy[i] + "px";
			document.getElementById('nksnow' + i).style.left=nks.posx[i] + "px";
		}
	}
	// TODO: don't repeat if time  is over + no flakes are left
	if (nks.actives > 0) {
		window.setTimeout("snow(nks)", nks.timeout);
	}
}