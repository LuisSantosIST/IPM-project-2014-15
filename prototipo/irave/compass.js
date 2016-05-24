var counter = 0,
i = 0,
dist = 10,
distInic = 10,
changeDist = 0,
logoImage = new Image(),
TO_RADIANS = Math.PI/180; 
logoImage.src = 'gpsArrow1.png';
var canvas = document.getElementById('canvs');
var context = canvas.getContext('2d');
var vec = [5, 5, 5, -5, -5, -5, -5, -5, 5, 5];

function init(){
	loop();
	var interval = setInterval(loop, 2000); 
	
}

function loop() { 
	if(dist >= 0)
	{
		
		
		context.clearRect(0,0,canvas.width, canvas.height); 
		drawRotatedImage(logoImage,50,25,counter);
		
		if(i > 9)
		{
			i = 0;
		} 
		
		if(dist == 1)
		{
			document.getElementById("distLeft").innerHTML = dist + " meter";
		}
		else
		{
			document.getElementById("distLeft").innerHTML = dist + " meters";
		}
		
		counter += vec[i]
		dist--;
		i++;
		
		if(dist == (distInic/2))
		{
			logoImage.src = 'gpsArrow2.png';
		}
	}
	else
	{
		if(Number(sessionStorage.gpsreturn) == 8)
		{
			sessionStorage.newNot = 0;
		}
		ShowPopup('0%','0%');
		window.clearInterval(interval);
	}
}


function drawRotatedImage(image, x, y, angle) { 

	// save the current co-ordinate system 
	// before we screw with it
	context.save(); 

	// move to the middle of where we want to draw our image
	context.translate(x, y);

	// rotate around that point, converting our 
	// angle from degrees to radians 
	context.rotate(angle * TO_RADIANS);
	
	// draw it up and to the left by half the width
	// and height of the image 
	context.drawImage(image, -(image.width/2)-5, -(image.height/2)-8, 40, 40);

	// and restore the co-ords to how they were when we began
	context.restore(); 
}

function ShowPopup(x,y)
{
	var hp = document.getElementById("hoverpopup");
	hp.style.top = y;
	hp.style.left = x;
	hp.style.visibility = "Visible";
		
	setTimeout(function() {HidePopup()}, 3000);
}

function HidePopup()
{
	hp = document.getElementById("hoverpopup");
	hp.style.visibility = "Hidden";
}