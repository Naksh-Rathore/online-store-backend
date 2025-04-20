import express from "express"
import { getAllProducts, createProduct, getProductByID, updateProduct, deleteProduct } from "../controllers/store.controller.js"

const router = express.Router()

router.route("/")
.get(getAllProducts)
.post(createProduct)

router.route("/:id")
.get(getProductByID)
.put(updateProduct)
.delete(deleteProduct)

export default router