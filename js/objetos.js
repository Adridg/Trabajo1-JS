/*******************************************************************************************************************************/
// Clase Persona - constructor
function Persona(sNif, sNombre, sApellidos, sDireccion)
{
	this.nif = sNif;
	this.nombre = sNombre;
	this.apellidos =sApellidos;
	this.direccion =sDireccion;
}
//método de la clase persona
Persona.prototype.toHTMLRow = function()
{
	var sHTMLRow = "";
	sHTMLRow = "<tr><td>" + this.nif+ "</td><td>" + this.nombre  + "</td><td>" + this.apellidos + "</td><td>"+ this.direccion + "</td></tr>"
	return sHTMLRow;
}
/*******************************************************************************************************************************/
										//Clase Conductor - constructor
function Conductor(sNif, sNombre, sApellidos, sDireccion, dtFechaCad)
{
	Persona.call(this, sNif, sNombre, sApellidos, sDireccion);
	this.fechaCadu = dtFechaCad;
}


								// Aqui es donde heredamos propiedades y metodos
Conductor.prototype = Object.create(Persona.prototype);
Conductor.prototype.constructor = Conductor;

Conductor.prototype.toHTMLRow = function()
{

	var sHTMLRow = "";
	sHTMLRow = "<tr><td>" + this.nif+ "</td><td>" + this.nombre  + "</td><td>" + this.apellidos + "</td><td>"+ this.direccion + "</td><td>"+ this.fechaCadu.toLocaleDateString()+ "</td></tr>";
	return sHTMLRow;
}

/*******************************************************************************************************************************/
											//Clase guardia - constructor
function Guardia (sNif, sNombre, sApellidos, sDireccion, sPuesto)
{
 	Persona.call(this, sNif, sNombre, sApellidos, sDireccion);
	this.puesto = sPuesto;
}

									// Aqui es donde heredamos propiedades y metodos
Guardia.prototype = Object.create(Persona.prototype);
Guardia.prototype.constructor = Guardia;

Guardia.prototype.toHTMLRow = function()
{
	var sHTMLRow = "";
	sHTMLRow = "<tr><td>" + this.nif+ "</td><td>" + this.nombre  + "</td><td>" + this.apellidos + "</td><td>"+ this.direccion + "</td><td>"+ this.puesto+ "</td></tr>";
	return sHTMLRow;
}
/*******************************************************************************************************************************/
												// Clase Multa
function Multa( iIdMulta, oConductor, oGuardia, fImporte, bPagada, sDescripcion, dtFechaMulta )
{
	this.idMulta = iIdMulta;
	this.oConductor = oConductor;
	this.oGuardia =oGuardia;
	this.importe =fImporte;
	this.bPagada =bPagada;
	this.descripcion =sDescripcion;
	this.fechaMulta =dtFechaMulta;
}

//método de la clase Multa
Multa.prototype.toHTMLRow = function()
{// puede que falle el oConductor.nif y el de guardia, buscar como hacer que se cojan esas propiedades
	var sHTMLRow = "";
	sHTMLRow = "<tr><td>" + this.idMulta + "</td><td>" + oConductor.nif +  "</td><td>"+  oGuardia.nif + "</td><td>"+ 
	         this.importe +  "</td><td>"+ this.bPagada+  "</td><td>"+this.descripcion+ this.fechaMulta+"</td></tr>";
	return sHTMLRow;
}
/*******************************************************************************************************************************/
										//Clase Leve 
// constructor
function Leve(iIdMulta, oConductor, oGuardia, fImporte, bPagada, sDescripcion, dtFechaMulta, bBonificada )
{
	Multa.call(this, iIdMulta, oConductor, oGuardia, fImporte, bPagada, sDescripcion, dtFechaMulta);
	this.bonificada = bBonificada;
}

								// Aqui es donde heredamos propiedades y metodos
Leve.prototype = Object.create(Multa.prototype);
Leve.prototype.constructor = Leve;

Leve.prototype.toHTMLRow = function()
{
		var sHTMLRow = "";
	sHTMLRow = "<tr><td>" + this.idMulta + "</td><td>" + this.oConductor.nif +  "</td><td>"+ this.oGuardia.nif + 
	          "</td><td>"+ this.importe +  "</td><td>"+ this.bPagada+  "</td><td>"+this.descripcion+ 
	          "</td><td>"+ this.fechaMulta+ "</td><td>"+ this.bonificada+ "</td></tr>";
	return sHTMLRow;
}

Leve.prototype.toPrint = function()
{
	var sPagada="";
	var sBonificada="";
	if (this.bPagada==true)
	{
		sPagada="si";
	}
	else
	{
		sPagada="no";
	}

	if (this.bonificada==true)
	{
		sBonificada="si";
	}
	else
	{
		sBonificada="no";
	}


	return htmlString='<!DOCTYPE html><html><head>'+
	'<meta charset="utf-8">'+
	'<title> </title>'+
	'<link rel="stylesheet" href="css/bootstrap.min.css" />'+
	 '</head>'+
	'<body>'+
	'<div class="container">'+
  '<div class="row">'+
	'<div class="col-lg-2" style="border: 2px solid black;">'+
	   '<p> Ministerio del interior</p>'+
	   '<p> Denuncias automatizadas </p>'+
	'</div>'+
	'<div class="col-lg-4 col-lg-offset-1 " style="border: 2px solid black;">'+
	   '<table class="table table-bordered">'+
    	'<thead>'+
         '<tr>'+
          '<th>FECHA DENUNCIA</th>'+
         ' <th>N EXPEDIENTE</th>'+
        ' </tr>'+
       ' </thead>'+
       ' <tbody>'+
        ' <tr>'+
       	 '<td>'+this.fechaMulta.toLocaleDateString() +'</td>'+
         "<td>"+this.idMulta+"</td>"+
       	' </tr>'+
       ' </tbody>'+
   	   '</table>'+
	 '</div>'+
 '<div class="col-lg-4 col-lg-offset-1 " style="border: 2px solid black;">'+
	   '<table class="table table-bordered">'+
    	'<thead>'+
         '<tr>'+
          '<th colspan="2">Precepto infringido</th>'+
         '</tr>'+
        '</thead>'+
        '<tbody>'+
         '<tr>'+
       	  '<td>Articulo 52.1</td>'+
       	  '<td>Reglamento general de circulaci&oacuten</td>'+
       	' </tr>'+
        '</tbody>'+
   	   '</table>'+
	 '</div>'+
  '</div>'+
  '<div class="row">'+
	'<div class="col-lg-7" style="border: 2px solid black;">'+
	   '<table class="table table-bordered">'+
    	'<thead>'+
         '<tr>'+
          '<th>Lugar denuncia</th>'+
         '</tr>'+
        '</thead>'+
        '<tbody>'+
         '<tr>'+
       	  '<td>lugar en la que se ha cometido la infracci&oacuten</td>'+
       	 '</tr>'+
        '</tbody>'+
   	   '</table>'+
	' </div>'+
	 '<div class="col-lg-4 col-lg-offset-1" style="border: 2px solid black;">'+
	  ' <table class="table table-bordered">'+
    	'<thead>'+
        ' <tr>'+
          '<th>Importe total multa</th>'+
          '<th>Descuento aplicable</th>'+
          '<th>Pagada</th>'+
         '</tr>'+
       ' </thead>'+
        '<tbody>'+
         '<tr>'+
       	  '<td>'+this.importe+'</td>'+
       	 ' <td>'+sBonificada+'</td>'+
       	 ' <td>'+sPagada+'</td>'+
       	 '</tr>'+
        '</tbody>'+
   	   '</table>'+
	' </div>'+
 ' </div>'+
	'<div class="row">'+
  '<div class="col-lg-12" style="border: 2px solid black;">'+
	   '<table class="table table-bordered">'+
    	'<thead>'+
        ' <tr>'+
         ' <th>hecho que se notifica</th>'+
        ' </tr>'+
       ' </thead>'+
        '<tbody>'+
         '<tr>'+
       	  '<td>'+this.descripcion+'</td>'+
       	' </tr>'+
       ' </tbody>'+
   	   '</table>'+
	 '</div>'+
	'</div>'+
	'<div class="row">'+
	'<div class="col-lg-5" style="border: 2px solid black;">'+
	  ' <table class="table">'+
    	'<thead>'+
        ' <tr>'+
          '<th>Datos Guardia Civil</th>'+
        ' </tr>'+
       ' </thead>'+
        '<tbody>'+
         '<tr><td>NIF:</td><td>'+this.oGuardia.nif+'</td></tr>'+
       	 ' <tr><td>Nombre:</td><td>'+this.oGuardia.nombre +'</td></tr>'+
       	  '<tr><td>Apellidos:</td><td>'+this.oGuardia.apellidos +'</td></tr>'+
       	 ' <tr><td>Puesto:</td><td>'+ this.oGuardia.puesto +'</td></tr>'+
       	' </tr>'+
       ' </tbody>'+
   	  ' </table>'+
	' </div>'+
	' <div class="col-lg-5 col-lg-offset-2 " style="border: 2px solid black;">'+
	   '<table class="table">'+
    	'<thead>'+
         '<tr>'+
         ' <th>Datos Conductor</th>'+
        ' </tr>'+
       ' </thead>'+
       ' <tbody>'+
        ' <tr><td>NIF:</td><td>'+ this.oConductor.nif +'</td></tr>'+
       	'  <tr><td>Nombre:</td><td>'+this.oConductor.nombre+'</td></tr>'+
       	'  <tr><td>Apellidos:</td><td>'+this.oConductor.apellidos+'</td></tr>'+
       	'  <tr><td>Direcci&oacuten:</td><td>'+this.oConductor.direccion +'</td></tr>'+
       ' </tbody>'+
   	  ' </table>'+
	' </div>'+
  '</div>'+
'</div>'+
'</body>'+
'</html>';




	// return htmlString aqui es donde debe estar el método para que te haga el formato imprimible
}

/*******************************************************************************************************************************/
										//Clase Grave
// constructor
function Grave(iIdMulta, oConductor, oGuardia, fImporte, bPagada, sDescripcion, dtFechaMulta, iPuntos )
{
	Multa.call(this, iIdMulta, oConductor, oGuardia, fImporte, bPagada, sDescripcion, dtFechaMulta);
	this.puntos = iPuntos;
}

								// Aqui es donde heredamos propiedades y metodos
Grave.prototype = Object.create(Multa.prototype);
Grave.prototype.constructor = Grave;

Grave.prototype.toHTMLRow = function()
{
		var sHTMLRow = "";
	sHTMLRow = "<tr><td>" + this.idMulta + "</td><td>" + this.oConductor.nif +  "</td><td>"+  this.oGuardia.nif + 
	          "</td><td>"+ this.importe +  "</td><td>"+ this.bPagada+  "</td><td>"+this.descripcion+ 
	          "</td><td>"+ this.fechaMulta+ "</td><td>"+ this.puntos +"</td></tr>";
	return sHTMLRow;
}

Grave.prototype.toPrint = function()
{
		var sPagada="";
	var sBonificada="";
	if (this.bPagada==true)
	{
		sPagada="si";
	}
	else
	{
		sPagada="no";
	}

	return htmlString='<!DOCTYPE html><html><head>'+
	'<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> '+
	'<title> </title>'+
	'<link rel="stylesheet" href="css/bootstrap.min.css" />'+
	 '</head>'+
	'<body>'+
	'<div class="container">'+
  '<div class="row">'+
	'<div class="col-lg-2" style="border: 2px solid black;">'+
	   '<p> Ministerio del interior</p>'+
	   '<p> Denuncias automatizadas </p>'+
	'</div>'+
	'<div class="col-lg-4 col-lg-offset-1 " style="border: 2px solid black;">'+
	   '<table class="table table-bordered">'+
    	'<thead>'+
         '<tr>'+
          '<th>FECHA DENUNCIA</th>'+
         ' <th>N EXPEDIENTE</th>'+
        ' </tr>'+
       ' </thead>'+
       ' <tbody>'+
        ' <tr>'+
       	 '<td>'+this.fechaMulta.toLocaleDateString() +'</td>'+
         "<td>"+this.idMulta+"</td>"+
       	' </tr>'+
       ' </tbody>'+
   	   '</table>'+
	 '</div>'+
 '<div class="col-lg-4 col-lg-offset-1 " style="border: 2px solid black;">'+
	   '<table class="table table-bordered">'+
    	'<thead>'+
         '<tr>'+
          '<th colspan="2">Precepto infringido</th>'+
         '</tr>'+
        '</thead>'+
        '<tbody>'+
         '<tr>'+
       	  '<td>Articulo 52.1</td>'+
       	  '<td>Reglamento general de circulaci&oacuten</td>'+
       	' </tr>'+
        '</tbody>'+
   	   '</table>'+
	 '</div>'+
  '</div>'+
  '<div class="row">'+
	'<div class="col-lg-7" style="border: 2px solid black;">'+
	   '<table class="table table-bordered">'+
    	'<thead>'+
         '<tr>'+
          '<th>Lugar denuncia</th>'+
         '</tr>'+
        '</thead>'+
        '<tbody>'+
         '<tr>'+
       	  '<td>lugar en la que se ha cometido la infracci&oacuten</td>'+
       	 '</tr>'+
        '</tbody>'+
   	   '</table>'+
	' </div>'+
	 '<div class="col-lg-4 col-lg-offset-1" style="border: 2px solid black;">'+
	  ' <table class="table table-bordered">'+
    	'<thead>'+
        ' <tr>'+
          '<th>Importe total multa</th>'+
          '<th>Puntos a descontar</th>'+
          '<th>Pagada</th>'+
         '</tr>'+
       ' </thead>'+
        '<tbody>'+
         '<tr>'+
       	  '<td>'+this.importe+'</td>'+
       	 ' <td>'+ this.puntos +'</td>'+
       	 ' <td>'+sPagada+'</td>'+
       	 '</tr>'+
        '</tbody>'+
   	   '</table>'+
	' </div>'+
 ' </div>'+
	'<div class="row">'+
  '<div class="col-lg-12" style="border: 2px solid black;">'+
	   '<table class="table table-bordered">'+
    	'<thead>'+
        ' <tr>'+
         ' <th>hecho que se notifica</th>'+
        ' </tr>'+
       ' </thead>'+
        '<tbody>'+
         '<tr>'+
       	  '<td>'+this.descripcion+'</td>'+
       	' </tr>'+
       ' </tbody>'+
   	   '</table>'+
	 '</div>'+
	'</div>'+
	'<div class="row">'+
	'<div class="col-lg-5" style="border: 2px solid black;">'+
	  ' <table class="table">'+
    	'<thead>'+
        ' <tr>'+
          '<th>Datos Guardia Civil</th>'+
        ' </tr>'+
       ' </thead>'+
        '<tbody>'+
         '<tr><td>NIF:</td><td>'+this.oGuardia.nif+'</td></tr>'+
       	 ' <tr><td>Nombre:</td><td>'+this.oGuardia.nombre +'</td></tr>'+
       	  '<tr><td>Apellidos:</td><td>'+this.oGuardia.apellidos +'</td></tr>'+
       	 ' <tr><td>Puesto:</td><td>'+ this.oGuardia.puesto +'</td></tr>'+
       	' </tr>'+
       ' </tbody>'+
   	  ' </table>'+
	' </div>'+
	' <div class="col-lg-5 col-lg-offset-2 " style="border: 2px solid black;">'+
	   '<table class="table">'+
    	'<thead>'+
         '<tr>'+
         ' <th>Datos Conductor</th>'+
        ' </tr>'+
       ' </thead>'+
       ' <tbody>'+
        ' <tr><td>NIF:</td><td>'+ this.oConductor.nif +'</td></tr>'+
       	'  <tr><td>Nombre:</td><td>'+this.oConductor.nombre+'</td></tr>'+
       	'  <tr><td>Apellidos:</td><td>'+this.oConductor.apellidos+'</td></tr>'+
       	'  <tr><td>Direcci&oacuten:</td><td>'+this.oConductor.direccion +'</td></tr>'+
       ' </tbody>'+
   	  ' </table>'+
	' </div>'+
  '</div>'+
'</div>'+
'</body>'+
'</html>';

}

/*******************************************************************************************************************************/
										//Clase DGT nueva forma de nombrar clases
//constructor
class Dgt
{
	constructor ()
	{
		this._multas=[]; //atributo privado, no puedo acceder a él si no es a través de métodos
		this._personas=[]; //atributo privado, no puedo acceder a él si no es a través de métodos
	}

						
 	altaConductor(oConductor)
	{
		var bInsertado = false;
		var oGuardia= this.buscarGuardia(oConductor.nif);
		// Verificar si ya está registrada
		//var fechaConducir= oConductor.fechaCadu; //mete en una variable la fecha de caducidad

		if (this.buscarConductor(oConductor.nif) == null && oGuardia == null ) //mira si existe el conductor
		{
			bInsertado = true;
			this._personas.push(oConductor);
		}
		else if (this.buscarConductor(oConductor.nif) == null && oGuardia != null)// si no existe el conductor, mira si existe un guardia con el mismo (nif)
		{
			if (oConductor.nif==oGuardia.nif &&  oConductor.nombre ==oGuardia.nombre &&
				oConductor.apellidos==oGuardia.apellidos && oConductor.direccion ==oGuardia.direccion)
			{
				bInsertado = true;
				this._personas.push(oConductor); //si existe la persona, creamos un objeto conductor usando la var fechaConducir
			}
		}
		return bInsertado;
	}
							
		buscarConductor(sNif) //método auxuiliar para  altaConductor y altaGuardiaCivil
	{
		var oConductor = null;
		var i = 0;
		while (i < this._personas.length && oConductor == null)
		{

			if ( this._personas[i] instanceof Conductor && this._personas[i].nif == sNif)
			{
				oConductor = this._personas[i];
			}
			i++;
		}	
		return oConductor;
	}

		altaGuardiaCivil(oGuardia) 
	{
		var oConductor=this.buscarConductor(oGuardia.nif);
		var bInsertado = false;

		if (this.buscarGuardia(oGuardia.nif) == null && oConductor== null)
		{
			bInsertado = true;
			this._personas.push(oGuardia);
		}
		else if(this.buscarGuardia(oGuardia.nif) == null && oConductor != null)
		{
			if (oConductor.nif==oGuardia.nif &&  oConductor.nombre ==oGuardia.nombre &&
			oConductor.apellidos==oGuardia.apellidos && oConductor.direccion ==oGuardia.direccion)	
			{
				bInsertado = true;
				this._personas.push(oGuardia);
			}
		}
		return bInsertado;
	}

	buscarGuardia(sNif) //método auxuiliar para  altaConductor y altaGuardiaCivil
	{
		var oGuardia = null;
		var i = 0;
		while (i < this._personas.length && oGuardia == null)
		{

			if (this._personas[i] instanceof Guardia && this._personas[i].nif == sNif  )
			{
				oGuardia = this._personas[i];
			}
			i++;
		}	
		return oGuardia;
	}

	registrarMulta(oMulta)
	{

		var sMensaje = "Error, la multa ya estaba registrada";
		if (this.buscarMulta(oMulta.idMulta ) == null)
		{
			sMensaje = "Multa registrada";
			this._multas.push(oMulta);
		}
		return sMensaje;
	}

	buscarMulta(idMulta) //método auxiliar para el método registrarMulta
	{
		var oMulta = null;
		var i = 0;
		while (i < this._multas.length && oMulta == null)
		{

			if (this._multas[i].idMulta == idMulta)
			{
				oMulta = this._multas[i];
			}
			i++;
		}	
		return oMulta;
	}

	pagarMulta(idMulta)
	{
		var sMensaje= "Multa no registrada";

		var oMulta = null;
		var i = 0;
		while (i < this._multas.length && oMulta == null)
		{
			if (this._multas[i].idMulta == idMulta)
			{
				if (this._multas[i].bPagada== false)
				{
					this._multas[i].bPagada= true;
					sMensaje="Multa pagada";
				}
				else
				{
					sMensaje="Multa pagada anteriormente";
				}
				oMulta=this._multas[i];
			}
			i++;
		}	
		return sMensaje;
	}


	listadoSaldoConductor()
	{
 	  var sHTMLTable = '<div class="table-responsive"><table class="table table-bordered">';
	  sHTMLTable += "<tr><th>NIF</th><th>Total Saldo Pendiente de Pagar</th></tr>";
	  var iContador=0;
	
		for (var i=0; i < this._personas.length; i++)
		{
			var fCalculador=0;

			if (this._personas[i] instanceof Conductor)
			{
				
				for (var j = 0; j < this._multas.length; j++) 
				{ 
					if ( this._multas[j].bPagada== false && this._personas[i] == this._multas[j].oConductor)
					{

						if (this._multas[j] instanceof Leve && this._multas[j].bonificada== true)
						{

						 var fDescuento= this._multas[j].importe - (this._multas[j].importe*0.25); //halla el descuento del 25%
					 		 fCalculador+=  fDescuento;
					    }
					    else
					    {
					    	fCalculador+= this._multas[j].importe
					    }

					}
				}

				if (fCalculador>0)
				{
					sHTMLTable += "<tr><td>"+this._personas[i].nif+"</td> <td>"+fCalculador+"</td></tr>";
				}
				iContador++;
			}
					
		}
		sHTMLTable += "</table>";
		if (iContador==0)
		{
			sHTMLTable ="No hay multas registrada en el sistema";
		}
		return sHTMLTable;
	}

	listadoPuntosConductor()
	{
	  var sHTMLTable = '<div class="table-responsive"><table class="table table-bordered">';
	  sHTMLTable += "<tr><th>NIF</th><th>Total Puntos Pendiente de quitar</th></tr>";
	  var iContador=0;
	
		for (var i=0; i < this._personas.length; i++)
		{
			if (this._personas[i] instanceof Conductor)
			{
				var fCalculador=0;

				for (var j = 0; j < this._multas.length; j++) 
				{ 
					if ( this._multas[j].bPagada== false && this._personas[i] == this._multas[j].oConductor 
						 && this._multas[j] instanceof Grave)
					{
						fCalculador+= this._multas[j].puntos;
					}
				}

				if (fCalculador>0)
				{
				  sHTMLTable += "<tr><td>"+this._personas[i].nif+"</td> <td>"+fCalculador+"</td></tr>";
				}
			  iContador++;
			}
					
		}
		sHTMLTable += "</table>";
				sHTMLTable += "</table>";
		if (iContador==0)
		{
			sHTMLTable ="No hay multas registrada en el sistema";
		}
		return sHTMLTable;

	}

	listadoMultasPorGuardia()
	{
	
	var sHTMLTable = '<div class="table-responsive"><table class="table table-bordered">';
		sHTMLTable += "<tr><th>NIF</th><th>Nombre</th><th>Apellidos</th><th>Puesto</th><th>Num Multas</th><th>Importe total multas</th></tr>";
	var iContador=0;
	
		for (var i=0; i < this._personas.length; i++)
		{
			if (this._personas[i] instanceof Guardia)
			{

			    sHTMLTable += "<tr><td>" + this._personas[i].nif+ "</td><td>" + this._personas[i].nombre  + 
			  				  "</td><td>" + this._personas[i].apellidos + "</td><td>"+ this._personas[i].puesto+ "</td>";

				var iCuentaMultas=0;
				var fSumaMultas=0;
				for (var j = 0; j < this._multas.length; j++) 
				{ 
					if ( this._personas[i] == this._multas[j].oGuardia && this._multas[j])
					{
						iCuentaMultas++;
						fSumaMultas+= this._multas[j].importe;
						iContador++;
					}
				}
				sHTMLTable += "<th>"+iCuentaMultas +"</th><th>"+fSumaMultas +"</th></tr>";


			}
		}
		sHTMLTable += "</table>";
		if (iContador==0)
		{
			sHTMLTable ="No hay multas registrada en el sistema";
		}
		return sHTMLTable;
	}



		listadoPorFecha(fechaIni, fechaFin)
	{
		var totalImporte=0;
		  var sHTMLTable = '<div class="table-responsive"><table class="table table-bordered">';
	  sHTMLTable += "<tr><th>Id</th><th>Fecha multa</th><th>Importe</th></tr>";
	   var iContador=0; //se encarga de verificar que haya datos para la tabla, sino es así va a sustituir la tabla por un mensaje 
	   //indicando que no hay datos de multas
	
		for (var i=0; i < this._multas.length; i++)
		{
			if (this._multas[i].fechaMulta >= fechaIni && this._multas[i].fechaMulta <= fechaFin )
			{
			    sHTMLTable += "<tr><td>" + this._multas[i].idMulta+ "</td><td>" + this._multas[i].fechaMulta.toLocaleDateString()  + 
			  				  "</td><td>" + this._multas[i].importe + "</td>";
			  				  totalImporte+=this._multas[i].importe;
			  				  iContador++;
			}
		}
		if (iContador!=0)
			sHTMLTable += "</table> <br> Importe total de las multas entre las fechas dadas:"+totalImporte;
		else
			sHTMLTable = "No existen multas en el periodo de fecha seleccionada";

		return sHTMLTable;
	}

		listadoConductores()
	{
		var sHTMLTable = '<div class="table-responsive"><table class="table table-bordered">';
		sHTMLTable += "<tr><th>NIF</th><th>Nombre</th><th>Apellidos</th><th>Direccion</th><th>Fecha Caducidad</th></tr>";
		var iContador=0;
	
		for (var i=0; i < this._personas.length; i++)
		{
			if (this._personas[i] instanceof Conductor)
			{
				sHTMLTable += this._personas[i].toHTMLRow();
				iContador++;
			}
		}
		sHTMLTable += "</table>";

		if (iContador==0)
		{
			sHTMLTable ="No hay datos de conductores en el sistema";
		}
		return sHTMLTable;
	}

		listadoGuardiaCiviles()
	{
		var sHTMLTable = '<div class="table-responsive"><table class="table table-bordered">';
		sHTMLTable += "<tr><th>NIF</th><th>Nombre</th><th>Apellidos</th><th>Direccion</th><th>Puesto</th></tr>";
		var iContador=0;
		for (var i=0; i < this._personas.length; i++)
		{
			if (this._personas[i] instanceof Guardia)
			{
				sHTMLTable += this._personas[i].toHTMLRow();
				iContador++;
			}
		}
		sHTMLTable += "</table>";

		if (iContador==0)
		{
			sHTMLTable ="No hay datos de guardias civiles en el sistema";
		}
		return sHTMLTable;
	}


		imprimirMulta(idMulta)
	{
		var sResul="";
		for (var i=0; i < this._multas.length; i++)
		{
			if (this._multas[i].idMulta==idMulta)
			{
				sResul=this._multas[i].toPrint();
			}
		}


		return sResul;
	}



	dameNifConductor() //métodos auxiliar para la select de nif conductor
	{
		var nifConductores=[];
		nifConductores[0]="Introduzca un Conductor";
		var contador=0;

		for (var i=0; i < this._personas.length; i++)
		{
			if (this._personas[i] instanceof Conductor)
			{
				nifConductores[contador]=this._personas[i].nif;
				contador++;
			}
		}
	 return nifConductores;
	}

		dameNifGuardia() //métodos auxiliar para la select de nif guardia civil
	{
		var nifGuardias=[];
		nifGuardias[0]="Introduzca un Guardia Civil";
		var contador=0;

		for (var i=0; i < this._personas.length; i++)
		{
			if (this._personas[i] instanceof Guardia)
			{
				nifGuardias[contador]=this._personas[i].nif;
				contador++;
			}
		}

	 return nifGuardias;
	}

	dameIdMultas() //métodos auxiliar para la select de id de multas
	{
		var idMultas=[];
		idMultas[0]="Introduzca una Multa";
		var contador=0;

		for (var i=0; i < this._multas.length; i++)
		{
				idMultas[contador]=this._multas[i].idMulta;
				contador++;
		}

	 return idMultas;
	}
	
}










