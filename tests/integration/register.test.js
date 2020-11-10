const app = require('../../app')
const request = require('supertest')
const  userName = Math.random().toString(36).substring(3);


test("Should register a user",async ()=>{
    const response = await request(app).post('/register/user')
    .send({userName,password:"123456"});
    expect(response.status).toBe(200) 
    
})

test("Should not register a user with duplicate username",async ()=>{
    const response = await request(app).post('/register/user')
    .send({userName,password:"123456"})
    expect(response.status).toBe(401) 
})

test("Should not register a user with empty username",async ()=>{
    const response = await request(app).post('/register/user')
    .send({userName:"",password:"123456"})
    expect(response.status).toBe(401)
    
})

test("Should not register a user with password not having atleast 6 characters",async ()=>{
    const response = await request(app).post('/register/user')
    .send({userName:"qwerty",password:"12345"})
    expect(response.status).toBe(400)  
    
})

