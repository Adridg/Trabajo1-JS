
var oDgt = new Dgt();
datosIniciales();

function datosIniciales()
{ //datos para comprobaciones rápidas

	/*var oGuardia1=new Guardia("1", "Adri", "Domínguez", "Paraiso 5", "Teniente");
	var oGuardia2=new Guardia("2", "Manu", "Rivero", "Almendralejo 15", "General");
	var oGuardia3=new Guardia("3", "Javi", "Domínguez", "Gaviota 2", "Cabo");
	var oGuardia4=new Guardia("4", "Isa", "Gil", "Salamandra 4", "Capitán");
	var oGuardia5=new Guardia("5", "Jose", "Gonzalez", "Góndola 1", "Lugarteniente");
 oDgt.altaGuardiaCivil (oGuardia1);
 oDgt.altaGuardiaCivil (oGuardia2);
 oDgt.altaGuardiaCivil (oGuardia3);
 oDgt.altaGuardiaCivil (oGuardia4);
 oDgt.altaGuardiaCivil (oGuardia5);

var oConductor1=new Conductor("2", "Manu", "Rivero", "Almendralejo 15", new Date ("2019/10/25"));
var oConductor2=new Conductor("6", "Loli", "Rivero", "Almendralejo 15", new Date ("2018/08/15"));
var oConductor3=new Conductor("7", "Rocio", "Villar", "Zamora 2", new Date ("2020/02/05"));
var oConductor4=new Conductor("8", "Paquito", "Villar", "Zamora 2", new Date ("2030/06/18"));
var oConductor5=new Conductor("9", "Gema", "Mique", "Almendralejo 15", new Date ("2025/05/23"));
var oConductor6=new Conductor("10", "Diego", "Garcias", "Magnolia 3", new Date ("2020/12/15"));

 oDgt.altaConductor (oConductor1);
 oDgt.altaConductor (oConductor2);
 oDgt.altaConductor (oConductor3);
 oDgt.altaConductor (oConductor4);
 oDgt.altaConductor (oConductor5);
 oDgt.altaConductor (oConductor6);


oDgt.registrarMulta(new Leve("1", oConductor1, oGuardia1, 300, false, "Exceso velocidad", new Date("2017/10/10"), false));
oDgt.registrarMulta(new Leve("2", oConductor2, oGuardia3, 200, false, "Hablar por el móvil", new Date("2016/02/02"), false));
oDgt.registrarMulta(new Leve("3", oConductor3, oGuardia4, 200, false, "Una mano en el volante", new Date("2018/10/15"), false));
oDgt.registrarMulta(new Leve("4", oConductor4, oGuardia4, 1000, false, "Sin carnet de conducir", new Date("2016/12/03"), true));
oDgt.registrarMulta(new Leve("5", oConductor5, oGuardia3, 800, false,  "Imprudencia al volante", new Date("2017/09/08"), true));
oDgt.registrarMulta(new Leve("6", oConductor3, oGuardia2, 100, false, "Sin cinturón de seguridad", new Date("2017/03/20"), true));

oDgt.registrarMulta(new Grave("7", oConductor1, oGuardia4, 700, false, "Saltarse Stop", new Date("2016/12/15"), 4));
oDgt.registrarMulta(new Grave("8", oConductor2, oGuardia2, 400, false, "Saltarse Semáforo", new Date("2018/03/17"), 8));
oDgt.registrarMulta(new Grave("9", oConductor3, oGuardia1, 600, false, "Bajo los efectos del alchol", new Date("2017/08/23"), 10));
oDgt.registrarMulta(new Grave("10", oConductor4, oGuardia3, 800, false, "Temerira al volante", new Date("2017/04/17"), 6));
oDgt.registrarMulta(new Grave("11", oConductor1, oGuardia4, 700, false, "Desacato a la policia", new Date("2017/05/20"), 5));
oDgt.registrarMulta(new Grave("12", oConductor2, oGuardia1, 600, false, "Sin seguro", new Date("2017/12/05"), 4));*/
}

function mensaje(sTexto)
{
	top.frames["formularios"].document.getElementById("pTextoMensaje").innerHTML = sTexto;
	top.frames["formularios"].document.getElementById("panelMensajes").style.display = "block";
}

function altaGuardia()
{
	top.frames["formularios"].document.frmGuardia.style.display = "block";
	top.frames["formularios"].document.frmConductor.style.display = "none";
	top.frames["formularios"].document.frmMulta.style.display = "none";
	top.frames["formularios"].document.frmPagarMulta.style.display = "none";
	top.frames["formularios"].document.frmFechasMulta.style.display = "none";
	top.frames["formularios"].document.frmPestaniaMulta.style.display = "none";
	resetear();
}

function altaConductor()
{
	top.frames["formularios"].document.frmGuardia.style.display = "none";
	top.frames["formularios"].document.frmConductor.style.display = "block";
	top.frames["formularios"].document.frmMulta.style.display = "none";
	top.frames["formularios"].document.frmPagarMulta.style.display = "none";
	top.frames["formularios"].document.frmFechasMulta.style.display = "none";
	top.frames["formularios"].document.frmPestaniaMulta.style.display = "none";

	resetear();
}

function altaMulta()
{
	top.frames["formularios"].document.frmGuardia.style.display = "none";
	top.frames["formularios"].document.frmConductor.style.display = "none";
	top.frames["formularios"].document.frmPagarMulta.style.display = "none";
	top.frames["formularios"].document.frmFechasMulta.style.display = "none";
	top.frames["formularios"].document.frmMulta.style.display = "block";
	top.frames["formularios"].document.frmPestaniaMulta.style.display = "none";
	cargarNif();
	resetear();
	eleccion();
}

function eleccion() //sirve para controlar los campos según el radio
{
	var rEleccion= top.frames["formularios"].document.frmMulta.nivelFalta.value;

	if (rEleccion==1)
	{
		top.frames["formularios"].document.getElementById('descuento').style.display="block";
		top.frames["formularios"].document.getElementById('puntos').style.display="none";
	}
	else
	{
		top.frames["formularios"].document.getElementById('descuento').style.display="none";
		top.frames["formularios"].document.getElementById('puntos').style.display="block";
	}
}






function irFormPagar()
{
	top.frames["formularios"].document.frmGuardia.style.display = "none";
	top.frames["formularios"].document.frmConductor.style.display = "none";
	top.frames["formularios"].document.frmMulta.style.display = "none";	
	top.frames["formularios"].document.frmFechasMulta.style.display = "none";
	top.frames["formularios"].document.frmPagarMulta.style.display = "block";
	top.frames["formularios"].document.frmPestaniaMulta.style.display = "none";	
	cargarMultas(); //iguar que la del nif pero con las multas
	resetear();
}

function irFechaMultas()
{
	top.frames["formularios"].document.frmGuardia.style.display = "none";
	top.frames["formularios"].document.frmConductor.style.display = "none";
	top.frames["formularios"].document.frmMulta.style.display = "none";	
	top.frames["formularios"].document.frmPagarMulta.style.display = "none";	
	top.frames["formularios"].document.frmFechasMulta.style.display = "block";
	top.frames["formularios"].document.frmPestaniaMulta.style.display = "none";
	resetear();

}



function irImpriMulta()
{
	top.frames["formularios"].document.frmGuardia.style.display = "none";
	top.frames["formularios"].document.frmConductor.style.display = "none";
	top.frames["formularios"].document.frmMulta.style.display = "none";	
	top.frames["formularios"].document.frmPagarMulta.style.display = "none";	
	top.frames["formularios"].document.frmFechasMulta.style.display = "none";
	top.frames["formularios"].document.frmPestaniaMulta.style.display = "block";
	cargarMultas();
	resetear();
}



function introCondu()
{
	var nif=top.frames["formularios"].document.frmConductor.nifConductor.value.trim();
	var nombre= top.frames["formularios"].document.frmConductor.nombreConductor.value.trim();
	var apellidos= top.frames["formularios"].document.frmConductor.apellidosConductor.value.trim();
	var direccion= top.frames["formularios"].document.frmConductor.direcciónConductor.value.trim();
	var sCaducidadCarnet= top.frames["formularios"].document.frmConductor.caducidadConductor.value.trim();




if (nif.length !=0 && nombre.length !=0  && apellidos.length !=0 && direccion.length !=0  && sCaducidadCarnet.length !=0  )
 	{
 		
 	   	var dtCaducidadCarnet= new Date(sCaducidadCarnet); //suponemos que el usuario introduce correctamente los campos de la fecha aaaa-mm-dd
 		dtCaducidadCarnet.setHours(0,0,0,0);

 		if (!isNaN(dtCaducidadCarnet))
 		{
		 var bAltaCondu= oDgt.altaConductor(new Conductor(nif, nombre, apellidos, direccion, dtCaducidadCarnet));
		 if (bAltaCondu==true)
		 {
			mensaje("Conductor introducido");
			top.frames["formularios"].document.frmConductor.style.display = "none";
			resetear();
		 }
		 else
		 {
		  mensaje("Error al introducir el conductor");
		 }
	   } 
	   else
	   {
		mensaje("La fecha debe ser numérica, y siguiendo el formato aaaa/mm/dd");
	   }
	}
	else
	{
		mensaje("No puede haber campos en blanco");
	}
}
function introGuardia()
{
	var nif=top.frames["formularios"].document.frmGuardia.nifGuardia.value.trim();
	var nombre= top.frames["formularios"].document.frmGuardia.nombreGuardia.value.trim();
	var apellidos= top.frames["formularios"].document.frmGuardia.apellidosGuardia.value.trim();
	var direccion= top.frames["formularios"].document.frmGuardia.direcciónGuardia.value.trim();
	var puesto= top.frames["formularios"].document.frmGuardia.puestoGuardia.value.trim();

 	if (nif.length !=0 && nombre.length !=0  && apellidos.length !=0 && direccion.length !=0  && puesto.length !=0  )
 	{
		var bAltaGuardia= oDgt.altaGuardiaCivil(new Guardia(nif, nombre, apellidos, direccion, puesto));
		if (bAltaGuardia==true)
		{
			mensaje("Guardia Civil  introducido");
			top.frames["formularios"].document.frmGuardia.style.display = "none";
			resetear();
			
		}
		else
		{
			mensaje("Error al introducir el Guardia Civil");
		}
	}
	else
	{
		mensaje("No puede haber campos en blanco");
	}
}

function introMulta()
{
	var idMulta= parseInt(top.frames["formularios"].document.frmMulta.idMulta.value.trim());
	var oConductor= oDgt.buscarConductor(top.frames["formularios"].document.frmMulta.selectNifConductor.value.trim());
	var oGuardia= oDgt.buscarGuardia(top.frames["formularios"].document.frmMulta.selectNifGuardia.value.trim());
	var fImporte= parseFloat((top.frames["formularios"].document.frmMulta.importe.value.trim()));
	var sDescripcion= top.frames["formularios"].document.frmMulta.descripcionMulta.value.trim();
	var fechaMulta= top.frames["formularios"].document.frmMulta.fechaMulta.value.trim();

	var bPagada=false;


	if (idMulta.length !=0 && fImporte.length !=0  && sDescripcion.length !=0 && fechaMulta.length !=0)
 		{
 		  if (oConductor != null && oGuardia!=null)
 		  {
 		  	var dtFechaMulta= new Date (fechaMulta);
 		  	dtFechaMulta.setHours(0,0,0,0);

 		  	if (!isNaN(idMulta) && !isNaN(fImporte) && !isNaN(dtFechaMulta))
 		  	 {

				if (oConductor.nif!=oGuardia.nif)
				{
				  var nivelFalta = top.frames["formularios"].document.frmMulta.nivelFalta.value.trim();
				  if (nivelFalta ==1)
				  {
					var sEleccion = top.frames["formularios"].document.frmMulta.bonificacion.value.trim();
					if(sEleccion==1)
					{
					  var bBonificada=true;
					}
					else
					{
					  var bBonificada=false;
					}
					  mensaje(oDgt.registrarMulta(new Leve (idMulta, oConductor, oGuardia,
					                                    fImporte, bPagada, sDescripcion, dtFechaMulta, bBonificada)));
					  top.frames["formularios"].document.frmMulta.style.display = "none";
					  resetear();
				   }
				   else 
				   {
					 var iPuntos = parseInt(top.frames["formularios"].document.frmMulta.puntos.value.trim());
					 if (iPuntos >=1 && iPuntos<=15)
					 {
						mensaje(oDgt.registrarMulta(new Grave (idMulta, oConductor, oGuardia, 
														fImporte, bPagada, sDescripcion, dtFechaMulta, iPuntos)));
						top.frames["formularios"].document.frmMulta.style.display = "none";
						resetear();

					 }
					 else
					 {
					 	mensaje("Los puntos deben ser entre 1 y 15");
					 }
				   }
			    }
				else
				{
				mensaje("No puedes elegir el mismo Nif de conductor y Guardia Civil");
				}
		  }
		  else
		  {
			mensaje("No se esperaba un caracter no númerico en uno de los siguientes campos: iD, importe o fecha");
		  }
		}
		else
		{
		mensaje("Debes añadir al menos un conductor y un Guardia Civil");

		}
		
	}
	else
	{
		mensaje("No puede haber campos en blanco");
	}


}

function introPagarMulta()
{
	var idMulta=parseInt(top.frames["formularios"].document.frmPagarMulta.selectIdMulta.value.trim());
	
	if(idMulta!="Introduzca una Multa")
	{
		 mensaje(oDgt.pagarMulta(idMulta));
		 top.frames["formularios"].document.frmPagarMulta.style.display = "none";	
		 resetear();
		
	}
	else
	{
		mensaje("Debes primero registrar una multa");
	}
}

function introimpriMulta()
{

	var idMulta=parseInt(top.frames["formularios"].document.frmPestaniaMulta.selectIdMulta2.value.trim());

	if(idMulta!="Introduzca una Multa")
	{
		sMulta= oDgt.imprimirMulta(idMulta);

		if (sMulta !="")
		{
			abrirVentana = window.open(""); //el segundo parámetro es el name de la pestaña, para ser identificada
			abrirVentana.document.title="Imprimir Multa";
			abrirVentana.document.write(sMulta);
			abrirVentana.document.close();
			top.frames["formularios"].document.frmPestaniaMulta.style.display = "none";
			resetear();
		}
		else
		{
			mensaje("Error al generar la impresión de la multa");
		}

		
	}
	else
	{
		mensaje("Debes primero registrar una multa");
	}



}



function listadoConductores()
{
	var sListado = oDgt.listadoConductores();
	top.frames['listados'].document.getElementById('listado').innerHTML=sListado;
}

function listadoGuardia()
{
	var sListado = oDgt.listadoGuardiaCiviles();
	top.frames['listados'].document.getElementById('listado').innerHTML=sListado;
}


function listadoSaldoConductores()
{
	var sListado = oDgt.listadoSaldoConductor();
	top.frames['listados'].document.getElementById('listado').innerHTML=sListado;
}

function listadoPuntosDeConductor()
{
	var sListado = oDgt.listadoPuntosConductor();
	top.frames['listados'].document.getElementById('listado').innerHTML=sListado;
}

function listadoMulPorGuardia()
{
	var sListado = oDgt.listadoMultasPorGuardia();
	top.frames['listados'].document.getElementById('listado').innerHTML=sListado;
}

function listadoMultaFecha()
{	
 	var sFechaInicial=top.frames["formularios"].document.frmFechasMulta.txtFechaIni.value.trim();
	var sFechaFinal=  top.frames["formularios"].document.frmFechasMulta.txtFechaFin.value.trim();


	if (sFechaInicial.length != 0 && sFechaFinal.length !=0)
	{
		
 		var fechaIni= new Date(sFechaInicial); //suponemos que el usuario introduce correctamente los campos de la fecha aaaa-mm-dd
 		var fechaFin= new Date(sFechaFinal);
 		fechaIni.setHours(0,0,0,0);
		fechaFin.setHours(0,0,0,0);
 		
 	   if (!isNaN(fechaIni) &&  !isNaN(fechaFin))
 	   {
 		if (sFechaInicial <= sFechaFinal)
		{
 			var sListado = oDgt.listadoPorFecha(fechaIni,fechaFin);
			top.frames['listados'].document.getElementById('listado').innerHTML=sListado;
			top.frames["formularios"].document.frmFechasMulta.style.display = "none";
			resetear();
		}
		else
		{
			mensaje("la fecha inicial no puede ser mayor que la fecha final");
		}
	   }
	   else
	   {
	   	 mensaje("las fechas deben ser numérica");
	   }
 	}
 	else
 	{
 		mensaje("No puedes dejar campos sin rellenar");
 	}
}



function cargarNif()
{
	var nifConductores=[];
	var nifConductores= oDgt.dameNifConductor();
	var nifGuardia=[];
	var nifGuardia= oDgt.dameNifGuardia();

	nifConductores.sort();
	nifGuardia.sort();

		var sHTMLOpConductor='<option value="'+nifConductores[0] +'">'+ nifConductores[0]+ "</option> <br>";
		for (var i = 1; i < nifConductores.length; i++) 
		{
		   sHTMLOpConductor= sHTMLOpConductor+'<option value="' +nifConductores[i] +'">'+ nifConductores[i]+ "</option><br>";
		}

		var sHTMLOpGuardia='<option value="'+nifGuardia[0] +'">'+ nifGuardia[0]+ "</option> <br>";
		for (var i = 1; i < nifGuardia.length; i++) 
		{
		   sHTMLOpGuardia= sHTMLOpGuardia+'<option value="' +nifGuardia[i] +'">'+ nifGuardia[i]+ "</option><br>";
		}

		top.frames['formularios'].document.getElementById('selectNifConductor').innerHTML=sHTMLOpConductor;
		top.frames['formularios'].document.getElementById('selectNifGuardia').innerHTML=sHTMLOpGuardia;

}


function cargarMultas()
{
	var idMultas=[];
	var idMultas= oDgt.dameIdMultas();
	idMultas.sort();
	var sHTMLOpMulta='<option value="'+idMultas[0] +'">'+ idMultas[0]+ "</option> <br>";
		for (var i = 1; i < idMultas.length; i++) 
		{
		   sHTMLOpMulta= sHTMLOpMulta+'<option value="' +idMultas[i] +'">'+ idMultas[i]+ "</option><br>";
		}
	top.frames['formularios'].document.getElementById('selectIdMulta').innerHTML=sHTMLOpMulta;
	top.frames['formularios'].document.getElementById('selectIdMulta2').innerHTML=sHTMLOpMulta;
}



function resetear()
{
	top.frames["formularios"].document.frmGuardia.reset();
	top.frames["formularios"].document.frmConductor.reset();
	top.frames["formularios"].document.frmMulta.reset();
	top.frames["formularios"].document.frmFechasMulta.reset();
	top.frames["formularios"].document.frmPagarMulta.reset();
	top.frames["formularios"].document.frmPestaniaMulta.reset();
}





