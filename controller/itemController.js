const itemSchema = require('../modal/item.modal')

/**----GET METHOD----- */
async function getItem(req, res) {
    try {
        const { id } = req.params;
        if (!id) return res.status(501).send({ error: "Invalid Product id" });
        const product = await itemSchema.findById(id)
        const { ...rest } = product.toObject();
        return res.status(201).send(rest);

    } catch (error) {
        return res
            .status(404).send({ error: "Cannot Find Product Data" })
    }
}
/**----POST METHOD----- */
async function addItem(req, res) {
    try {
        const { productName, productBrand, productType, productSize, ProductStock, productImage, productPrice } = req.body
        const existItem = await itemSchema.findOne({ productName })
        if (!existItem) {
            const item = new itemSchema({
                productName,
                productBrand,
                productType,
                productSize,
                ProductStock,
                productImage,
                productPrice
            })
            const data = await item.save();
            return res.status(201).send({ message: "Product Addedd", data: data })
        } return res.status(200).send({ message: "Product Already Exists" })
    } catch (error) {
        return res
            .status(500).send({ error: "Internal Server Error" })
    }
}
/**----PUT METHOD----- */
async function updateItem(req, res) {
    try {
        const { id } = req.params
        const itemExists = await itemSchema.findById(id);
        if (!itemExists) return res.status(404).send({ message: "Product Does not Exists" })
        const body = req.body
        itemSchema.updateOne({ _id: id }, body, function (err, data) {
            if (err) throw err;

            return res.status(201).send({ msg: "Product Updated...!" });
        })
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error" });
    }
}
/**----DELETE METHOD----- */
async function removeItem(req, res) {
    try {
        const { id } = req.params
        const itemExists = await itemSchema.findById(id);
        if (itemExists) {
            await itemSchema.findByIdAndRemove(id)
            return res.status(201).send({ msg: "Product Removed...!" });

        }
        return res.status(404).send({ msg: "Product not found...!" });

    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error" });
    }
}


module.exports = { getItem, addItem, updateItem, removeItem }