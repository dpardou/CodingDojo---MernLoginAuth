const Contact = require('../models/contact.model');

module.exports.create = (req, res) => {
    Contact.create(req.body)
    .then(data => res.json({ ok: true, message: 'Se agregó el contacto', data: data }))
    .catch(error => {
        if(error.name == 'ValidationError')
            res.status(500).json({ ok: false, message: error.message, error: error });
        else {
            res.status(500).json({ok: false, message: 'Error al guardar el contacto'})    
        }
    });
}

module.exports.edit = (req, resp) => {
    const contact = req.body;
    Contact.findOneAndUpdate({_id: req.params.id }, contact)
        .then(data => resp.status(200).json({ ok: true, message: 'Se actualizó el contacto', data: contact}))
        .catch(error => {
            if(error.name === 'ValidationError'){
                resp.status(500).json({ok: false, message: error.message, error: error})
            } else{ 
                resp.status(500).json({ok: false, message: 'Error al guardar el contacto'})    
            }
        });
}

module.exports.get = (req, res) => {
    Contact.findById(req.params.id)
        .then(data => res.status(200).json({ ok: true, message: 'Contacto', data: data}))
        .catch(error => {
            console.log('GET', error);
            res.status(500).json({ok: false, message: 'Error al obtener el contacto'})
        });
}

module.exports.list = (req, res) => {
    Contact.find()
        .then(data => res.status(200).json({ ok: true, message: 'Contactos', data: data}))
        .catch(error => {
            console.log('LIST', error);
            res.status(500).json({ok: false, message: 'Error al obtener los contactos'})
        });
}

module.exports.del = (req, res) => {
    Contact.findByIdAndRemove(req.params.id)
        .then(data => res.status(200).json({ ok: true, message: 'Se eliminó  el contacto', data: data}))
        .catch(error => {
            console.log('DELETE', error);
            res.status(500).json({ok: false, message: 'Error al eliminar el contacto'})
        });
}