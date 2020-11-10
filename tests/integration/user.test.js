const app = require('../../app')
const request = require('supertest');


test("Should return a token",async ()=>{
    const response = await request(app).post('/users/login')
    .send({userName:"thomas",password:"123456"});
    expect(response.status).toBe(200) 
})

test("Should return error",async ()=>{
    const response = await request(app).post('/users/login')
    .send({userName:"thomas87tryfh",password:"123456"});
    expect(response.status).toBe(400) 
})