const item = require('../models/item')

exports.show = (req, res) => {
    const id = req.params.id
    console.log(id)
    let data = {}
    data.item = item
}