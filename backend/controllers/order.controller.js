const Order = require('../models/order.model');

// get all orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// get an order by client id
const getOrderByClient = async (req, res) => {
  try {
    const { id } = req.params;
    const orders = await Order.find({ clientId : id});
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create an order for a client by client id
const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update an order
const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndUpdate (id, req.body)
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    const updatedOrder = await Order.findById(id);
    res.status(200).json(updatedOrder);
    }
    catch (error) {
    res.status(500).json({ message: error.message });
    }
}

//delete an order
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete all orders 
const deleteAllOrders = async (req, res) => {
  try {
    await Order.deleteMany();
    res.status(200).json({ message: 'All orders deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { getOrders, getOrderByClient, createOrder, updateOrder, deleteOrder, deleteAllOrders };
// Compare this snippet from backend/models/client.model.js: