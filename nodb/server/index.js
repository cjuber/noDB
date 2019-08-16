const express = require('express')
const cors = require('cors')
const app = express()

let list = [

    {
        id: 1,
        todo: 'Go grocery shopping'
    },
    {
        id: 2,
        todo: 'Do something'
    },
    {
        id: 3,
        todo: 'Do something else'
    }
]

app.use(express.json())
app.use (cors())


app.get('/api/list', (req, res) => {
    res.status(200).send(list)
})


app.post('/api/list', (req,res) => {

    const {todo} = req.body

    let id;

    if(list.length === 0){
        id = 1;
    } else {
        id = list[list.length - 1].id + 1
    };
    const newItem = {
        id,
        todo
    }

    list.push(newItem)

    res.status(200).send(list)
})
app.put('/api/list/:id', (req,res) => {

    const {id} = req.params

    const updatedItem = req.body

    let myEdit = list.find(item =>{

        return item.id === +id
    })
    myEdit.todo = updatedItem.todo

    res.status(200).send(list)
})
app.delete('/api/list/:id', (req,res) => {
    
    const {id} = req.params
    list = list.filter(lister => {
        
        if(lister.id !== +id) return lister;
    })
    res.status(200).send(list)
})


app.listen(8080, () => {

    console.log('Server is running')
})