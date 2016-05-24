var states = [document.getElementById("submenu1"), document.getElementById("submenu2"), 
				document.getElementById("submenu3"), document.getElementById("submenu4")];

var arrows = [document.getElementById("arrow1"), document.getElementById("arrow2"), 
				document.getElementById("arrow3"), document.getElementById("arrow4")];

var count = 0;

var start, end;

if(!sessionStorage.inbox)
{
	sessionStorage.setItem("inbox", 2);
}

if(!sessionStorage.inboxShit)
{
	sessionStorage.setItem("inboxShit", 0);
}

if(!sessionStorage.newNot)
{
	sessionStorage.setItem("newNot", 0);
}

if(!sessionStorage.clearIn)
{
	sessionStorage.setItem("clearIn", 0);
}

if(!sessionStorage.joao)
{
	sessionStorage.setItem("joao", 0);
}

if(!sessionStorage.leonor)
{
	sessionStorage.setItem("leonor", 0);
}

if(!sessionStorage.organization)
{
	sessionStorage.setItem("organization", 0);
}

if(!sessionStorage.day)
{
	sessionStorage.setItem("day", 0);
}

if(!sessionStorage.stage)
{
	sessionStorage.setItem("stage", 1);
}

if(!sessionStorage.contact)
{
	sessionStorage.setItem("contact", 1);
}

if(!sessionStorage.person)
{
	sessionStorage.setItem("person", "101");
}

if(!sessionStorage.forc)/*favourites ou contacts?*/
{
	sessionStorage.setItem("forc", "0");
}

if(!sessionStorage.man)
{
	sessionStorage.setItem("man", "0");
}

if(!sessionStorage.nearest)/*nearest?*/
{
	sessionStorage.setItem("nearest", "1");
}

if(!sessionStorage.gpsreturn)/*return para que menu?*/
{
	sessionStorage.setItem("gpsreturn", "0");
}

if(!sessionStorage.notelineup)/*vem da notificacao do lineup?*/
{
	sessionStorage.setItem("notelineup", "0");
}
if(!sessionStorage.bar)/*bar ou restaurant?*/
{
	sessionStorage.setItem("bar", "0");
}

if(!sessionStorage.returning)/*estamos a dar return ou a fazer load de um novo menu?*/
{
	sessionStorage.setItem("returning", "0");
}

if(!sessionStorage.returns)/*qual o submenu para dar return?*/
{
	sessionStorage.setItem("returns", "");
}
//window.alert(sessionStorage.returns);
if(Number(sessionStorage.returning) == 1 && sessionStorage.returns != "")
{
	count = Number(sessionStorage.returns[sessionStorage.returns.length - 1]);
	sessionStorage.returns = sessionStorage.returns.substring(0, sessionStorage.returns.length-1);
	sessionStorage.returning = 0;
	//window.alert(sessionStorage.returns);
}

states[count].style.backgroundColor = "rgba(50,168,221, 0.8)";
arrows[count].style.visibility = "Visible";
states[count].style.color = "white";
states[count].style.borderColor = "black";

function cliqueParaBaixo(nr)
{
	if (count < nr)
	{

		states[count].style.backgroundColor = "white";
		states[count].style.color = "black";
		arrows[count].style.visibility = "Hidden";

		count++;
		states[count].style.color = "white";
		states[count].style.borderColor = "black";
		states[count].style.backgroundColor = "rgba(50,168,221, 0.8)";
		arrows[count].style.visibility = "Visible";
	}
}

function cliqueParaCima()
{
	if (count > 0)
	{
		states[count].style.backgroundColor = "white";
		states[count].style.color = "black";
		arrows[count].style.visibility = "Hidden";

		count--;
		states[count].style.backgroundColor = "rgba(50,168,221, 0.8)";
		states[count].style.color = "white";
		states[count].style.borderColor = "black";
		arrows[count].style.visibility = "Visible";
	}
}

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	
	m = checkTime(m);

	document.getElementById("horas").innerHTML = h+":"+m;
	var t = setTimeout(function(){startTime()},500);
}
function checkTime(i) {
	if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}

function press()
{
	start = new Date();
}
	
function decision(menu)
{
	sessionStorage.returning = 1;
	end = new Date();
	var diff = end - start;

	if(diff > 750)
	{
		sessionStorage.returning = 0;
		sessionStorage.returns = "";
		window.location.href = "MenuPrincipal.html";
	}
	else
	{
		window.location.href = menu;
	}
}

function changeLed()
{
	if(sessionStorage.inbox > 0)
	{
		setTimeout(function(){changeLed1()},300);
	}
			
}

function changeLed1()
{
	document.getElementById("piscaPisca").style.backgroundColor = "#FFFF00";
	setTimeout(function(){changeLed2()},500);
}

function changeLed2()
{
	document.getElementById("piscaPisca").style.backgroundColor = "black";
	setTimeout(function(){changeLed1()},500);
}