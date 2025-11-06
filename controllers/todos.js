const TodoServices = require('../services/todos.js');

module.exports = {
    getAllTodos: async (req, res, next) => {
        try {
            const todos = await TodoServices.getAllTodos();
            return res.json({todos});
        } catch (err) {
            return res.json({"message": `Error al obtener los pendientes. Err: ${err}`});
        }
    },
    
    getTodo: async (req, res) => {
        const id = parseInt(req.params.id);  // ✅ Convertir a número primero
        
        if (!Number.isInteger(id)) {
            return res.json({"message": "El Id necesita ser entero"});
        }
        
        try {
            const todo = await TodoServices.getTodo(id);
            
            // ✅ Verificar si el resultado está vacío
            if (!todo || todo.length === 0) {
                return res.status(404).json({"message": "Pendiente no encontrado"});
            }
            
            return res.json({todo});
        } catch (err) {
            return res.json({"message": `Error al obtener el pendiente. Err: ${err}`});
        }
    },
    
    addTodo: async (req, res) => {
        try {
            const todo = await TodoServices.addTodo(req.body);
            res.status(200).json({todo});
        } catch (err) {
            res.status(500).json({"message": `Error al crear el pendiente. Err: ${err}`});
        }
    },
    
    updateTodo: async (req, res) => {
        const id = parseInt(req.params.id);  // ✅ Convertir a número primero
        
        if (!Number.isInteger(id)) {
            return res.status(500).json({"message": "El Id necesita ser entero"});
        }
        
        try {
            const todo = await TodoServices.updateTodo(id, req.body);
            
            // ✅ Verificar si el resultado está vacío
            if (!todo || todo.length === 0) {
                return res.status(404).json({"message": "Pendiente no encontrado"});
            }
            
            return res.status(200).json({todo});
        } catch (err) {
            return res.status(500).json({"message": `Error al actualizar el pendiente. Err: ${err}`});
        }
    },
    
    deleteTodo: async (req, res) => {
        const id = parseInt(req.params.id);  // ✅ Convertir a número primero
        
        if (!Number.isInteger(id)) {
            return res.status(500).json({"message": "El Id necesita ser entero"});
        }
        
        try {
            const todo = await TodoServices.deleteTodo(id);
            
            // ✅ Verificar si el resultado está vacío
            if (!todo || todo.length === 0) {
                return res.status(404).json({"message": "Pendiente no encontrado"});
            }
            
            return res.status(200).json({
                message: "Pendiente eliminado correctamente",
                todo
            });
        } catch (err) {
            return res.status(500).json({"message": `Error al eliminar el pendiente. Err: ${err}`});
        }
    }
};
