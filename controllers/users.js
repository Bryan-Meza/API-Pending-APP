const UserServices = require('../services/users.js')

module.exports = {
    getAllUsers : async (req, res, next) => {
        try {
            const users = await UserServices.getAllUsers();
            return res.json({users})
        } catch (err){
            return res.json({"message": `Erro al obtener los usuarios. Err: ${err}`})
        }
        
    },
    getUser : async (req, res) => {
        
        const id = req.params.id
        
        if (!Number.isInteger(id)){
            return res.json({"message": "El Id necesita ser entero"})
        }
        try {
            const user = await UserServices.getUser(id);
            return res.json({user})

        } catch (err){
            return res.json({"message": `Erro al obtener los usuarios. Err: ${err}`})
        }

    },
    addUser : async (req, res) => {

        try {
            const user = await UserServices.addUser(req.body);
            res.status(200).json({user})

        } catch (err){
            res.status(500).json({"message": `Erro al obtener los usuarios. Err: ${err}`})
        }

    },
    updateUser : async (req, res) => {
        const id = req.params.id
        if (!Number.isInteger(id)){
            return res.status(500).json({"message": "El Id necesita ser entero"})
        }
        try {
            const user = await UserServices.updateUser(id,req.body);
            return res.status(200).json({user})

        } catch (err){
            return res.status(500).json({"message": `Erro al obtener los usuarios. Err: ${err}`})
        }

    }
}