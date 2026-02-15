//schema for ecommerce project
//user schema
//product schema
//order schema
//cart schema
//order schema

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 6
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required']
    },
    address: {
        city: String,
        state: String,
        pincode: String,
    },
    role: {
        type: String,
        default: 'user', // helpful for admin privileges
        enum: ['user', 'admin']
    }
}, { timestamps: true }); // Correct placement for timestamps

// If using CommonJS (Standard for Node/Express)
module.exports = mongoose.model('User', userSchema);

// If using ES Modules (import/export)
// export default mongoose.model('User', userSchema);