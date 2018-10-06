var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverCerdo);

var xCerdo = 218; //cada vez que se mueva recuerda el punto inicial
var yCerdo = 218;

function moverCerdo(evento)
{
	var movimiento = 64;
	var teclas = {
		UP: 38,
		DOWN: 40,
		LEFT: 37,
		RIGHT: 39
};

switch (evento.keyCode)
{
	case teclas.UP:
	yCerdo = yCerdo - movimiento;
	dibujar();
	break;

	case teclas.DOWN:
	yCerdo = yCerdo + movimiento;
	dibujar();
	break;

	case teclas.RIGHT:
	xCerdo = xCerdo + movimiento;
	dibujar();
	break;

	case teclas.LEFT:
	xCerdo = xCerdo - movimiento;
	dibujar();
	break;

	default:
	console.log("otra tecla");
	}
}

var fondo =
{
	url: "tile.png",
	cargaOK: false
}

var vaca =
{
	url: "vaca.png",
	cargaOK: false
}

var pollo =
{
	url: "pollo.png",
	cargaOK: false
}

var cerdo =
{
	url: "cerdo.png",
	cargaOK: false,
	posX: 225,
	posY: 225
}

var cantidad = aleatorio (5, 25);
console.log(cantidad);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo()
{
	fondo.cargaOK = true;
	dibujar();
}
function cargarVacas()
{
	vaca.cargaOK = true;
	dibujar();
}
function cargarPollos()
{
	pollo.cargaOK = true;
	dibujar();
}
function cargarCerdo()
{
	cerdo.cargaOK = true;
	dibujar();
}
function dibujar()
{
	if (fondo.cargaOK)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}

	if (vaca.cargaOK)
	{
		for(var v = 0; v < cantidad; v++)
		{
			var x = aleatorio(0, 7);
			var y = aleatorio(0, 7);
			var x = x * 60;
			var y = y * 60;
			papel.drawImage(vaca.imagen, x, y);
		}
	}

	if (pollo.cargaOK)
	{
		for(var v = 0; v < cantidad; v++)
		{
			var x = aleatorio(0, 8);
			var y = aleatorio(0, 8);
			var x = x * 30
			var y = y * 30;
			papel.drawImage(pollo.imagen, x, y);
		}
	}
	if (cerdo.cargaOK)
	papel.drawImage(cerdo.imagen, xCerdo, yCerdo);

}


function aleatorio (min, maxi)
{
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return	resultado;
}


//dibujar una cantidad aleatoria cerdos, pollos
//mover cerdo por las flechas del teclado
