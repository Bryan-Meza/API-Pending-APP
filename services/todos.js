const dbService = require('../config/db.js');

module.exports = {
    getAllTodos: () => {
        sql = 'SELECT id, nombre, descripcion, fecha FROM pendientes ORDER BY fecha ASC';
        return dbService.querypromise(sql);
    },
    
    getTodo: (id) => {
        sql = `SELECT id, nombre, descripcion, fecha 
               FROM pendientes
               WHERE id=${id}`;
        
        return dbService.querypromise(sql);
    },
    
    addTodo: (body) => {
        const {nombre, descripcion, fecha} = body;
        
        sql = `INSERT INTO pendientes(nombre, descripcion, fecha) 
               VALUES('${nombre}', '${descripcion || ''}', '${fecha}')
               RETURNING *`;
        
        return dbService.querypromise(sql);
    },
    
    updateTodo: (id, body) => {
        const {nombre, descripcion, fecha} = body;
        
        sql = `UPDATE pendientes 
               SET nombre = '${nombre}', 
                   descripcion = '${descripcion || ''}', 
                   fecha = '${fecha}' 
               WHERE id = ${id}
               RETURNING *`;
        
        return dbService.querypromise(sql);
    },
    
    deleteTodo: (id) => {
        sql = `DELETE FROM pendientes 
               WHERE id = ${id}
               RETURNING *`;
        
        return dbService.querypromise(sql);
    }
};
