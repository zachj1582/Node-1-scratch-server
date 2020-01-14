const data = require('../MOCK_DATA')

const getUser = (req,res) => {
    const {id} = req.params
    const item = data.find(val => val.id === +id)
        if(!item){
            return res.status(500).send('item is not in list')
        }
    res.status(200).send(item)
}

module.exports = getUser