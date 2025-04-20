import Product from "../models/product.model.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    }

    catch(error) {
        res.status(400).json({message: error.message})
    }
}

export const getProductByID = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(400).json({message: "Product not found"})
        }

        res.status(200).json(product)
    }

    catch(error) {
        res.status(400).json({message: error.message})
    }
}

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }

    catch(error) {
        res.status(400).json({message: error.message})
    }
}

export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body)

        if (!updatedProduct) {
            return res.status(400).json({message: "Product not found"})
        }

        res.status(200).json(updatedProduct)
    }

    catch(error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id, req.body)

        if (!product) {
            return res.status(400).json({message: "Product not found"})
        }

        res.status(200).json(product)
    }

    catch(error) {
        res.status(400).json({message: error.message})
    }
}