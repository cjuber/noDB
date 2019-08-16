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

module.exports = {

  getTodo:  (req, res) => {
        res.status(200).send(list)
    },

    postTodo: (req,res) => {

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
    },

    putTodo: (req,res) => {

        const {id} = req.params
    
        const updatedItem = req.body
    
        let myEdit = list.find(item =>{
    
            return item.id === +id
        })
        myEdit.todo = updatedItem.todo
    
        res.status(200).send(list)
    },

    deleteTodo: (req,res) => {
    
        const {id} = req.params
        list = list.filter(lister => {
            
            if(lister.id !== +id) return lister;
        })
        res.status(200).send(list)
    }
}