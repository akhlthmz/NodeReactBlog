const app = require('../../app')
const request = require('supertest');


test("Should return articles",async ()=>{
    const result = await request(app).post('/users/login').send({userName:"thomas",password:"123456"});
    
    const response = await request(app).get('/articles/')
    .set('x-auth-token',result.body.token)
    .send({userName:"thomas",password:"123456"});
    expect(response.status).toBe(200) 
    
})

test("Should return status 400",async ()=>{
    
    const response = await request(app).get('/articles/')
    .send({userName:"thomas",password:"123456"});
    expect(response.status).toBe(401) 
    
})

test("Should add new post",async ()=>{
    const result = await request(app).post('/users/login').send({userName:"thomas",password:"123456"});
    
    const response = await request(app).post('/articles/add')
    .set('x-auth-token',result.body.token)
    .send({title:"Test Title",content:"Test Content"});
    expect(response.status).toBe(200) 
    
})

test("Should return status 400",async ()=>{
    
    const response = await request(app).post('/articles/add')
    .send({title:"Test Title",content:"Test Content"});
    expect(response.status).toBe(401) 
    
})