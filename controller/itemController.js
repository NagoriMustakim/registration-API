const itemSchema = require('../modal/item.modal')

/**----GET METHOD----- */
async function getItem(req, res) {
    return res.status(201).send({ message: "Item geted", data: data })
}
/**----POST METHOD----- */
async function addItem(req, res) {
    return res.status(201).send({ message: "Item Addedd", data: data })
}
/**----PUT METHOD----- */
async function updateItem(req, res) {
    return res.status(201).send({ message: "Item updated", data: data })
}
/**----DELETE METHOD----- */
async function removeItem(req, res) {
    return res.status(201).send({ message: "Item deleted", data: data })
}


module.exports = { getItem, addItem, updateItem, removeItem }