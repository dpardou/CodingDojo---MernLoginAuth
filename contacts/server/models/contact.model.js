const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name: {
		type: String,
		required: [true, "El campo NAME es requerido"]
	},
    email: {
		type: String,
		required: [true, "El campo EMAIL es requerido"]
	},
    phone: {
		type: String,
		required: [true, "El campo PHONE es requerido"]
	},
    age: {
		type: Number,
		required: [true, "El campo AGE es requerido"],
        min: [0, "El número no debe ser menor a 0"],
        max: [150, "El número no debe ser mayor a 150"]
	}
}, {timestamps: true});


const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;