import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

//@desc create new order
//@route Post /api/orders
//@access Private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAdress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    totalPrice,
  } = req.body;

  if(orderItems && orderItems.length === 0) {
    res.status(4000)
    return 
    throw new Error('no items ')
    else{ 
     const order = new Order( {
        orderItems,
        user: req.user_id,
        shippingAdress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        totalPrice,

     })
     const createdOrder = await order.save()
     res.status(201).json(createdOrder)
    }
  }
});


export { addOrderItems}