const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    brand: {
        type: String,
        required: [true, 'Brand is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    availability: {
        type: String,
        required: [true, 'Availability is required'],
        enum: ['In Stock', 'Out of Stock', 'Pre-order'] // Restricts input to these 3 options
    },
    reviews: {
        type: String
    },
})

module.exports = mongoose.model('Product', productSchema);