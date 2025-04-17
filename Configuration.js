function getConfiguration(config)
{
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.
  
  // Dependiendo del significado de la "dirección del dispositivo" en este 
  // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
  // para hacer referencia a la dirección en la interfaz de usuario.
  // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
  // MAC, es posible que desee utilizar el código siguiente.
  
  // config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints) {
   var e1 = endpoints.addEndpoint("1", "Hora 1c", endpointType.genericSensor);
e1.variableTypeId = 1386;
var e2 = endpoints.addEndpoint("2", "Hora 2c", endpointType.genericSensor);
e2.variableTypeId = 1386;
var e3 = endpoints.addEndpoint("3", "Hora 3c", endpointType.genericSensor);
e3.variableTypeId = 1386;
var e4 = endpoints.addEndpoint("4", "Hora 4c", endpointType.genericSensor);
e4.variableTypeId = 1386;
var e5 = endpoints.addEndpoint("5", "Hora 5c", endpointType.genericSensor);
e5.variableTypeId = 1386;
var e6 = endpoints.addEndpoint("6", "Hora 6c", endpointType.genericSensor);
e6.variableTypeId = 1386;
var e7 = endpoints.addEndpoint("7", "Hora 7c", endpointType.genericSensor);
e7.variableTypeId = 1386;
var e8 = endpoints.addEndpoint("8", "Hora 8c", endpointType.genericSensor);
e8.variableTypeId = 1386;
var e9 = endpoints.addEndpoint("9", "Hora 9c", endpointType.genericSensor);
e9.variableTypeId = 1386;
var e10 = endpoints.addEndpoint("10", "Hora 10c", endpointType.genericSensor);
e10.variableTypeId = 1386;
var e11 = endpoints.addEndpoint("11", "Hora 11c", endpointType.genericSensor);
e11.variableTypeId = 1386;
var e12 = endpoints.addEndpoint("12", "Hora 12c", endpointType.genericSensor);
e12.variableTypeId = 1386;
var e13 = endpoints.addEndpoint("13", "Hora 13c", endpointType.genericSensor);
e13.variableTypeId = 1386;
var e14 = endpoints.addEndpoint("14", "Hora 14c", endpointType.genericSensor);
e14.variableTypeId = 1386;
var e15 = endpoints.addEndpoint("15", "Hora 15c", endpointType.genericSensor);
e15.variableTypeId = 1386;
var e16 = endpoints.addEndpoint("16", "Hora 16c", endpointType.genericSensor);
e16.variableTypeId = 1386;
var e17 = endpoints.addEndpoint("17", "Hora 17c", endpointType.genericSensor);
e17.variableTypeId = 1386;
var e18 = endpoints.addEndpoint("18", "Hora 18c", endpointType.genericSensor);
e18.variableTypeId = 1386;
var e19 = endpoints.addEndpoint("19", "Hora 19c", endpointType.genericSensor);
e19.variableTypeId = 1386;
var e20 = endpoints.addEndpoint("20", "Hora 20c", endpointType.genericSensor);
e20.variableTypeId = 1386;
var e21 = endpoints.addEndpoint("21", "Hora 21c", endpointType.genericSensor);
e21.variableTypeId = 1386;
var e22 = endpoints.addEndpoint("22", "Hora 22c", endpointType.genericSensor);
e22.variableTypeId = 1386;
var e23 = endpoints.addEndpoint("23", "Hora 23c", endpointType.genericSensor);
e23.variableTypeId = 1386;
var e24 = endpoints.addEndpoint("24", "Hora 24c", endpointType.genericSensor);
e24.variableTypeId = 1386;
//Cloro Pozo Escoles Velles
var e25 = endpoints.addEndpoint("25", "Cloro_ini 25", endpointType.genericSensor);
e25.variableTypeId = 1387;
var e26 = endpoints.addEndpoint("26", "Cloro_ini 26", endpointType.genericSensor);
e26.variableTypeId = 1387;
var e27 = endpoints.addEndpoint("27", "Cloro_ini 27", endpointType.genericSensor);
e27.variableTypeId = 1387;
var e28 = endpoints.addEndpoint("28", "Cloro_ini 28", endpointType.genericSensor);
e28.variableTypeId = 1387;
var e29 = endpoints.addEndpoint("29", "Cloro_ini 29", endpointType.genericSensor);
e29.variableTypeId = 1387;
var e30 = endpoints.addEndpoint("30", "Cloro_ini 30", endpointType.genericSensor);
e30.variableTypeId = 1387;
var e31 = endpoints.addEndpoint("31", "Cloro_ini 31", endpointType.genericSensor);
e31.variableTypeId = 1387;
var e32 = endpoints.addEndpoint("32", "Cloro_ini 32", endpointType.genericSensor);
e32.variableTypeId = 1387;
var e33 = endpoints.addEndpoint("33", "Cloro_ini 33", endpointType.genericSensor);
e33.variableTypeId = 1387;
var e34 = endpoints.addEndpoint("34", "Cloro_ini 34", endpointType.genericSensor);
e34.variableTypeId = 1387;
var e35 = endpoints.addEndpoint("35", "Cloro_ini 35", endpointType.genericSensor);
e35.variableTypeId = 1387;
var e36 = endpoints.addEndpoint("36", "Cloro_ini 36", endpointType.genericSensor);
e36.variableTypeId = 1387;
var e37 = endpoints.addEndpoint("37", "Cloro_ini 37", endpointType.genericSensor);
e37.variableTypeId = 1387;
var e38 = endpoints.addEndpoint("38", "Cloro_ini 38", endpointType.genericSensor);
e38.variableTypeId = 1387;
var e39 = endpoints.addEndpoint("39", "Cloro_ini 39", endpointType.genericSensor);
e39.variableTypeId = 1387;
var e40 = endpoints.addEndpoint("40", "Cloro_ini 40", endpointType.genericSensor);
e40.variableTypeId = 1387;
var e41 = endpoints.addEndpoint("41", "Cloro_ini 41", endpointType.genericSensor);
e41.variableTypeId = 1387;
var e42 = endpoints.addEndpoint("42", "Cloro_ini 42", endpointType.genericSensor);
e42.variableTypeId = 1387;
var e43 = endpoints.addEndpoint("43", "Cloro_ini 43", endpointType.genericSensor);
e43.variableTypeId = 1387;
var e44 = endpoints.addEndpoint("44", "Cloro_ini 44", endpointType.genericSensor);
e44.variableTypeId = 1387;
var e45 = endpoints.addEndpoint("45", "Cloro_ini 45", endpointType.genericSensor);
e45.variableTypeId = 1387;
var e46 = endpoints.addEndpoint("46", "Cloro_ini 46", endpointType.genericSensor);
e46.variableTypeId = 1387;
var e47 = endpoints.addEndpoint("47", "Cloro_ini 47", endpointType.genericSensor);
e47.variableTypeId = 1387;
var e48 = endpoints.addEndpoint("48", "Cloro_ini 48", endpointType.genericSensor);
e48.variableTypeId = 1387;
// Cloro Polideportivo Massanassa
var e49 = endpoints.addEndpoint("49", "Cloro_fin 49", endpointType.genericSensor);
e49.variableTypeId = 1387;
var e50 = endpoints.addEndpoint("50", "Cloro_fin 50", endpointType.genericSensor);
e50.variableTypeId = 1387;
var e51 = endpoints.addEndpoint("51", "Cloro_fin 51", endpointType.genericSensor);
e51.variableTypeId = 1387;
var e52 = endpoints.addEndpoint("52", "Cloro_fin 52", endpointType.genericSensor);
e52.variableTypeId = 1387;
var e53 = endpoints.addEndpoint("53", "Cloro_fin 53", endpointType.genericSensor);
e53.variableTypeId = 1387;
var e54 = endpoints.addEndpoint("54", "Cloro_fin 54", endpointType.genericSensor);
e54.variableTypeId = 1387;
var e55 = endpoints.addEndpoint("55", "Cloro_fin 55", endpointType.genericSensor);
e55.variableTypeId = 1387;
var e56 = endpoints.addEndpoint("56", "Cloro_fin 56", endpointType.genericSensor);
e56.variableTypeId = 1387;
var e57 = endpoints.addEndpoint("57", "Cloro_fin 57", endpointType.genericSensor);
e57.variableTypeId = 1387;
var e58 = endpoints.addEndpoint("58", "Cloro_fin 58", endpointType.genericSensor);
e58.variableTypeId = 1387;
var e59 = endpoints.addEndpoint("59", "Cloro_fin 59", endpointType.genericSensor);
e59.variableTypeId = 1387;
var e60 = endpoints.addEndpoint("60", "Cloro_fin 60", endpointType.genericSensor);
e60.variableTypeId = 1387;
var e61 = endpoints.addEndpoint("61", "Cloro_fin 61", endpointType.genericSensor);
e61.variableTypeId = 1387;
var e62 = endpoints.addEndpoint("62", "Cloro_fin 62", endpointType.genericSensor);
e62.variableTypeId = 1387;
var e63 = endpoints.addEndpoint("63", "Cloro_fin 63", endpointType.genericSensor);
e63.variableTypeId = 1387;
var e64 = endpoints.addEndpoint("64", "Cloro_fin 64", endpointType.genericSensor);
e64.variableTypeId = 1387;
var e65 = endpoints.addEndpoint("65", "Cloro_fin 65", endpointType.genericSensor);
e65.variableTypeId = 1387;
var e66 = endpoints.addEndpoint("66", "Cloro_fin 66", endpointType.genericSensor);
e66.variableTypeId = 1387;
var e67 = endpoints.addEndpoint("67", "Cloro_fin 67", endpointType.genericSensor);
e67.variableTypeId = 1387;
var e68 = endpoints.addEndpoint("68", "Cloro_fin 68", endpointType.genericSensor);
e68.variableTypeId = 1387;
var e69 = endpoints.addEndpoint("69", "Cloro_fin 69", endpointType.genericSensor);
e69.variableTypeId = 1387;
var e70 = endpoints.addEndpoint("70", "Cloro_fin 70", endpointType.genericSensor);
e70.variableTypeId = 1387;
var e71 = endpoints.addEndpoint("71", "Cloro_fin 71", endpointType.genericSensor);
e71.variableTypeId = 1387;
var e72 = endpoints.addEndpoint("72", "Cloro_fin 72", endpointType.genericSensor);
e72.variableTypeId = 1387;

//PH Pozo Escoles Velles
var e73 = endpoints.addEndpoint("73", "PH 73", endpointType.genericSensor);
e73.variableTypeId = 1427;
var e74 = endpoints.addEndpoint("74", "PH 74", endpointType.genericSensor);
e74.variableTypeId = 1427;
var e75 = endpoints.addEndpoint("75", "PH 75", endpointType.genericSensor);
e75.variableTypeId = 1427;
var e76 = endpoints.addEndpoint("76", "PH 76", endpointType.genericSensor);
e76.variableTypeId = 1427;
var e77 = endpoints.addEndpoint("77", "PH 77", endpointType.genericSensor);
e77.variableTypeId = 1427;
var e78 = endpoints.addEndpoint("78", "PH 78", endpointType.genericSensor);
e78.variableTypeId = 1427;
var e79 = endpoints.addEndpoint("79", "PH 79", endpointType.genericSensor);
e79.variableTypeId = 1427;
var e80 = endpoints.addEndpoint("80", "PH 80", endpointType.genericSensor);
e80.variableTypeId = 1427;
var e81 = endpoints.addEndpoint("81", "PH 81", endpointType.genericSensor);
e81.variableTypeId = 1427;
var e82 = endpoints.addEndpoint("82", "PH 82", endpointType.genericSensor);
e82.variableTypeId = 1427;
var e83 = endpoints.addEndpoint("83", "PH 83", endpointType.genericSensor);
e83.variableTypeId = 1427;
var e84 = endpoints.addEndpoint("84", "PH 84", endpointType.genericSensor);
e84.variableTypeId = 1427;
var e85 = endpoints.addEndpoint("85", "PH 85", endpointType.genericSensor);
e85.variableTypeId = 1427;
var e86 = endpoints.addEndpoint("86", "PH 86", endpointType.genericSensor);
e86.variableTypeId = 1427;
var e87 = endpoints.addEndpoint("87", "PH 87", endpointType.genericSensor);
e87.variableTypeId = 1427;
var e88 = endpoints.addEndpoint("88", "PH 88", endpointType.genericSensor);
e88.variableTypeId = 1427;
var e89 = endpoints.addEndpoint("89", "PH 89", endpointType.genericSensor);
e89.variableTypeId = 1427;
var e90 = endpoints.addEndpoint("90", "PH 90", endpointType.genericSensor);
e90.variableTypeId = 1427;
var e91 = endpoints.addEndpoint("91", "PH 91", endpointType.genericSensor);
e91.variableTypeId = 1427;
var e92 = endpoints.addEndpoint("92", "PH 92", endpointType.genericSensor);
e92.variableTypeId = 1427;
var e93 = endpoints.addEndpoint("93", "PH 93", endpointType.genericSensor);
e93.variableTypeId = 1427;
var e94 = endpoints.addEndpoint("94", "PH 94", endpointType.genericSensor);
e94.variableTypeId = 1427;
var e95 = endpoints.addEndpoint("95", "PH 95", endpointType.genericSensor);
e95.variableTypeId = 1427;
var e96 = endpoints.addEndpoint("96", "PH 96", endpointType.genericSensor);
e96.variableTypeId = 1427;

//Turbidez Pozo Escoles Velles
var e97 = endpoints.addEndpoint("97", "Turbidez 73", endpointType.genericSensor);
e97.variableTypeId = 1428;
var e98 = endpoints.addEndpoint("98", "Turbidez 74", endpointType.genericSensor);
e98.variableTypeId = 1428;
var e99 = endpoints.addEndpoint("99", "Turbidez 75", endpointType.genericSensor);
e99.variableTypeId = 1428;
var e100 = endpoints.addEndpoint("100", "Turbidez 76", endpointType.genericSensor);
e100.variableTypeId = 1428;
var e101 = endpoints.addEndpoint("101", "Turbidez 77", endpointType.genericSensor);
e101.variableTypeId = 1428;
var e102 = endpoints.addEndpoint("102", "Turbidez 78", endpointType.genericSensor);
e102.variableTypeId = 1428;
var e103 = endpoints.addEndpoint("103", "Turbidez 79", endpointType.genericSensor);
e103.variableTypeId = 1428;
var e104 = endpoints.addEndpoint("104", "Turbidez 80", endpointType.genericSensor);
e104.variableTypeId = 1428;
var e105 = endpoints.addEndpoint("105", "Turbidez 81", endpointType.genericSensor);
e105.variableTypeId = 1428;
var e106 = endpoints.addEndpoint("106", "Turbidez 82", endpointType.genericSensor);
e106.variableTypeId = 1428;
var e107 = endpoints.addEndpoint("107", "Turbidez 83", endpointType.genericSensor);
e107.variableTypeId = 1428;
var e108 = endpoints.addEndpoint("108", "Turbidez 84", endpointType.genericSensor);
e108.variableTypeId = 1428;
var e109 = endpoints.addEndpoint("109", "Turbidez 85", endpointType.genericSensor);
e109.variableTypeId = 1428;
var e110 = endpoints.addEndpoint("110", "Turbidez 86", endpointType.genericSensor);
e110.variableTypeId = 1428;
var e111 = endpoints.addEndpoint("111", "Turbidez 87", endpointType.genericSensor);
e111.variableTypeId = 1428;
var e112 = endpoints.addEndpoint("112", "Turbidez 88", endpointType.genericSensor);
e112.variableTypeId = 1428;
var e113 = endpoints.addEndpoint("113", "Turbidez 89", endpointType.genericSensor);
e113.variableTypeId = 1428;
var e114 = endpoints.addEndpoint("114", "Turbidez 90", endpointType.genericSensor);
e114.variableTypeId = 1428;
var e115 = endpoints.addEndpoint("115", "Turbidez 91", endpointType.genericSensor);
e115.variableTypeId = 1428;
var e116 = endpoints.addEndpoint("116", "Turbidez 92", endpointType.genericSensor);
e116.variableTypeId = 1428;
var e117 = endpoints.addEndpoint("117", "Turbidez 93", endpointType.genericSensor);
e117.variableTypeId = 1428;
var e118 = endpoints.addEndpoint("118", "Turbidez 94", endpointType.genericSensor);
e118.variableTypeId = 1428;
var e119 = endpoints.addEndpoint("119", "PH 95", endpointType.genericSensor);
e119.variableTypeId = 1428;
var e120 = endpoints.addEndpoint("120", "PH 96", endpointType.genericSensor);
e120.variableTypeId = 1428;

// Cloro Cementerio Massanassa
var e121 = endpoints.addEndpoint("121", "Cloro_cemen 49", endpointType.genericSensor);
e121.variableTypeId = 1387;
var e122 = endpoints.addEndpoint("122", "Cloro_cemen 50", endpointType.genericSensor);
e122.variableTypeId = 1387;
var e123 = endpoints.addEndpoint("123", "Cloro_cemen 51", endpointType.genericSensor);
e123.variableTypeId = 1387;
var e124 = endpoints.addEndpoint("124", "Cloro_cemen 52", endpointType.genericSensor);
e124.variableTypeId = 1387;
var e125 = endpoints.addEndpoint("125", "Cloro_cemen 53", endpointType.genericSensor);
e125.variableTypeId = 1387;
var e126 = endpoints.addEndpoint("126", "Cloro_cemen 54", endpointType.genericSensor);
e126.variableTypeId = 1387;
var e127 = endpoints.addEndpoint("127", "Cloro_cemen 55", endpointType.genericSensor);
e127.variableTypeId = 1387;
var e128 = endpoints.addEndpoint("128", "Cloro_cemen 56", endpointType.genericSensor);
e128.variableTypeId = 1387;
var e129 = endpoints.addEndpoint("129", "Cloro_cemen 57", endpointType.genericSensor);
e129.variableTypeId = 1387;
var e130 = endpoints.addEndpoint("130", "Cloro_cemen 58", endpointType.genericSensor);
e130.variableTypeId = 1387;
var e131 = endpoints.addEndpoint("131", "Cloro_cemen 59", endpointType.genericSensor);
e131.variableTypeId = 1387;
var e132 = endpoints.addEndpoint("132", "Cloro_cemen 60", endpointType.genericSensor);
e132.variableTypeId = 1387;
var e133 = endpoints.addEndpoint("133", "Cloro_cemen 61", endpointType.genericSensor);
e133.variableTypeId = 1387;
var e134 = endpoints.addEndpoint("134", "Cloro_cemen 62", endpointType.genericSensor);
e134.variableTypeId = 1387;
var e135 = endpoints.addEndpoint("135", "Cloro_cemen 63", endpointType.genericSensor);
e135.variableTypeId = 1387;
var e136 = endpoints.addEndpoint("136", "Cloro_cemen 64", endpointType.genericSensor);
e136.variableTypeId = 1387;
var e137 = endpoints.addEndpoint("137", "Cloro_cemen 65", endpointType.genericSensor);
e137.variableTypeId = 1387;
var e138 = endpoints.addEndpoint("138", "Cloro_cemen 66", endpointType.genericSensor);
e138.variableTypeId = 1387;
var e139 = endpoints.addEndpoint("139", "Cloro_cemen 67", endpointType.genericSensor);
e139.variableTypeId = 1387;
var e140 = endpoints.addEndpoint("140", "Cloro_cemen 68", endpointType.genericSensor);
e140.variableTypeId = 1387;
var e141 = endpoints.addEndpoint("141", "Cloro_cemen 69", endpointType.genericSensor);
e141.variableTypeId = 1387;
var e142 = endpoints.addEndpoint("142", "Cloro_cemen 70", endpointType.genericSensor);
e142.variableTypeId = 1387;
var e143 = endpoints.addEndpoint("143", "Cloro_cemen 71", endpointType.genericSensor);
e143.variableTypeId = 1387;
var e144 = endpoints.addEndpoint("144", "Cloro_cemen 72", endpointType.genericSensor);
e144.variableTypeId = 1387;
}


function validateDeviceAddress(address, result)
{
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
  
  // En el código siguiente, se realiza una validación para asegurarse de que la 
  // dirección tiene exactamente 10 caracteres.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.

  // En el código siguiente, el agregado manual de endpoints está deshabilitada 
  // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
  // endpoints definidos por la función getEndpoints() anterior.
  
  // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.

  // En el código siguiente, se definen las siguientes reglas:
  // - Los endpoints no se pueden eliminar.
  // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.
  
  // rules.canDelete = false;
  // rules.canEditSubType = (endpoint.address == "2");
}
