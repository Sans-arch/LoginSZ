const restful = require('node-restful')
const mongoose = restful.mongoose

// criando Esquema de Usuario
const userSchema = new mongoose.Schema({
    nome: { type: String, required: [true, 'Informe o nome!'] },
    email: { type: String, required: [true, 'Informe o email!'] },
    telefone: { type: Number, min: 0, required: [true, 'Informe o telefone!'] },
    senha: { type: String, required: [true, 'Informe a senha!'] }
})

module.exports = restful.model('UserSchema', userSchema)