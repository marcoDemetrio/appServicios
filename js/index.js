var existe_db
var db


function onBodyLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function  onDeviceReady(){
	db = window.openDatabase("datos_usuario", "1.0", "DB apps", 20000);
	if(existe_db == null){
		creaDB();
	}
}


function logeo(){
	var usuario = $('#login_user').val();
	if(usuario == "Marco"){
		$("#new_salesman").css("display", "block");
	}
}

/*
/	creación de la base de datos
*/

function creaDB(){
	db.transaction(creaNuevaDB, errorDB, creaSuccess);
}

function creaNuevaDB(tx){
	tx.executeSql('DROP TABLE IF EXISTS datos_usuario');
//	tx.executeSql('DROP TABLE IF EXISTS datos_productos');

	var sql1 = "CREATE TABLE IF NOT EXISTS datos_usuario ("+
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"name VARCHAR(50), " +
		"user VARCHAR(30), " +
		"company VARCHAR(50), " +
		"country VARCHAR(10), " +
		"city VARCHAR(20), " +
		"telephone VARCHAR(30), " +
		"email VARCHAR(30), " +
		"pass VARCHAR(30) )";

/*	var sql2 = "CREATE TABLE IF NOT EXISTS datos_productos(" +
		"idProducto INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"numModel VARCHAR(20), " +
		"serial VARCHAR(30), " +
		"quanty INTEGER, " +
		"country VARCHAR(10), " +
		"oldModel VARCHAR(20), " +
		"confirmation INTEGER(2), " +
		"note VARCHAR(50) )";
		*/

	tx.executeSql(sql1);
//	tx.executeSql(sql2);

	tx.executeSql("INSERT INTO datos_usuario (id, name, user, company, country, city, telephone, email, pass) VALUES
	(1,'MARCO','marco','estadistica','Mexico','DF','0445545491420','marco.demetrio@gmail.com','demeterio') ");

}

function creaSuccess(){
	window.localStorage.setItem("existe_db", 1);
	cargarBD();
}

function errorDB(err){
	navigator.notification.alert("Error procesando SQL " + err.code);
}

/*
*	carga datos desde la base de datos
*/
function cargarBD(){
	db.transaction(cargaRegistro, errorDB);
}

function cargaRegistro(tx){
	tx.executeSql('SELECT * FROM datos_usuario', [], cargaDatosSuccess, errorDB);
}

function cargaDatosSuccess(tx, results){
	if(results.rows.length == 0){
		navigator.notification.alert("No hay usuarios en la BD");
	}else{
		$('#registro_usuario').hide();	// oculta mediante id
		$('.login').show();				// muestra mediante clase

	}

	for(var i=0; i < results.rows.length; i++){
		var persona = results.rows.item(i);
	}
} 

