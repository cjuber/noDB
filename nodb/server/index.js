const express = require('express')
const cors = require('cors')
const app = express()

const ctrl = require('./controller/controller')



app.use(express.json())
app.use (cors())


app.get('/api/list', ctrl.getTodo)
app.post('/api/list', ctrl.postTodo)
app.put('/api/list/:id', ctrl.putTodo)
app.delete('/api/list/:id', ctrl.deleteTodo)


app.listen(8080, () => {

    console.log('Server is running')
})