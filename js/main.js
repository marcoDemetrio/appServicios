// JavaScript Document

var existe_db
var db

function onBodyLoad()
{
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady()
{
	
	if(!detectDevice()){
	  navigator.notification.alert("El sistema operativo de su dispositivo no permite ejecutar esta aplicación");
  	}else{
		
		navigator.notification.alert("si funciona");	
		
	}
}

function detectDevice(){
	var plataforma = device.platform;
	var modelo = device.model;
	var version = device.version;
	mkLog(plataforma + " montado sobre " + modelo + " con SO " + version);
	if(plataforma == "Android"){
		if(version < 2.2){
			return false;
		}
	}else if(plataforma == "iOS"){
		if(version < 4){
			return false;
		}
	}else if(plataforma.indexOf("Win") != -1){
		
	}
	return true;
}


/*
*	Creando la base de datos

function crearDB(){
	db.transaction(crearNuevaDB, errorDB, creaSuccess);
}

function crearNuevaDB(tx){
	tx.executeSql('DROP TABLE IF EXISTS datos_usuario');
	
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
		
	tx.executeSql(sql1);
}

function errorDB(err){
	navigator.notification.alert("Error procesando SQL " + err.code);
}

function creaSuccess(){
	window.localStorage.setItem("existe_db", 1);
	cargarBD();
}


function saveNewForm(){
	tx.executeSql("INSERT INTO datos_usuario (nombre,user,company,country,city,telephone,email,pass) VALUES ('"+$("#ti_name").val()+"','"+$("#ti_user").val()+"','"+$("#ti_company").val()+"','"+$("#ti_country").val()+"','"+$("#ti_city").val()+"','"+$("#ti_phone").val()+"','"+$("#ti_email").val()+"','"+$("#ti_pass").val()+"')", [], newFormSuccess, errorDB);
	
} 

*/