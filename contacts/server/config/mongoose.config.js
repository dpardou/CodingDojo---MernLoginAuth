const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/contacts")
	.then(() => console.log("Conexión a la base de datos establecida correctamente"))
	.catch(err => console.log("Ocurrió un problema al conectarse a la base de datos", err));