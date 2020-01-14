const data = require('../MOCK_DATA.json')

const getUsers = (req,res)=> {
    const {price} = req.query
    if(price){
        const items = data.filter(val => val.price >= +price)
        return res.status(200).send(items)
    }
    res.status(200).send(data)
}

    module.exports = getUsers