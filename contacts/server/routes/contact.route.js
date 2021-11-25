const ContactController = require('../controllers/contact.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get('/api/contact', authenticate, ContactController.list);
    app.get('/api/contact/:id', authenticate, ContactController.get);
    app.post('/api/contact', authenticate, ContactController.create);
    app.put('/api/contact/:id', authenticate, ContactController.edit);
    app.delete('/api/contact/:id', authenticate, ContactController.del);
}