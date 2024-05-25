const jsonServer = require('json-server')
const testServer = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

testServer.use(middleware)
testServer.use(router)

testServer.listen(PORT,()=>{
    console.log(`Test server started at port ${PORT}`);
})