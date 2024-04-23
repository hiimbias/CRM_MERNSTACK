const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    clientId: {
        type: String,
        default: String
    },
    orderDate: {
        type: String,
        default: String
    },
    items: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;