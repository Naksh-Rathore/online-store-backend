import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter name"]
        },

        image: {
            type: String,
            required: false
        },

        price: {
            type: Number,
            required: [true, "Please enter price"]
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;