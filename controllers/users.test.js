const userData = require('./users')

jest.mock('../services/users.js',()=>{
    return {
        getAllUsers : jest.fn(async () => {
            return {
                "id" : 1,
                "name" : "test",
                "last name" : "test"
            }
        }),
        getUser: jest.fn(async(id) => {
            return {
                "id" : 1,
                "name" : "test",
                "last name" : "test"
            }
        }),
        updateUser: jest.fn(async(id,body) => {
            return {
                "name" : "testUpdated",
                "last name" : "testUpdated"
            }
        })
    }
})

test('get all users ', async () => {
    const res = {};
    const req = {};
    const next = {};
    
    res.json = (obj) => {
        return obj
    };
    const data = await userData.getAllUsers(req,res,next);
    //console.log(data.users);
    
    expect(data.users.id).toBe(1);
});

test('get User, this will test the happy path ', async () => {
    const res = {};
    let req = {
        "params" : {
            "id" : 1
        }
    };
    
    res.status = (obj) => res;
    res.json = (obj) => {
        return obj
    };
    const data = await userData.getUser(req,res);
    //console.log(data);
    
    expect(data.user.id).toBe(1);
});

test('get User, return error if id is not integer ', async () => {
    const res = {};
    let req = {
        "params" : {
            "id" : "1"
        }
    };
    
    res.status = (obj) => res;
    res.json = (obj) => {
        return obj
    };
    const data = await userData.getUser(req,res);
    //console.log(data);
    
    expect(data.message).toBe('El Id necesita ser entero');
});

test('happy path to update a user ', async () => {
    const res = {
        status: jest.fn((number)=>{
            return {
                json: jest.fn((obj) => obj)
            }
        })
    };
    let req = {
        "params" : {
            "id" : 1
        },
        "body": {
            "name" : "test",
            "last name" : "test"
        }
    };
    
    const data = await userData.updateUser(req,res);
    //console.log(data);
    
    expect(data.user.name).toBe("testUpdated");
});

test('update user with wrong id ', async () => {
    const res = {
        status: jest.fn((number)=>{
            return {
                json: jest.fn((obj) => obj)
            }
        }),
    };
    let req = {
        "params" : {
            "id" : "1"
        },
        "body": {
            "name" : "test",
            "last name" : "test"
        }
    };
    
    const data = await userData.updateUser(req,res);
    console.log(data.message);
    
    expect(data.message).toBe('El Id necesita ser entero');
});

