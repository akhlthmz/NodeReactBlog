const appMock = require('../../app')
require('../../server')

jest.mock('../../app')

test("Should call app.listen",()=>{
    expect(appMock.listen).toHaveBeenCalled()   
})