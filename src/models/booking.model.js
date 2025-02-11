const mongoose = require('mongoose');
const { applyTimestamps } = require('./user.model');

const bookingSchema = new mongoose.Schema({
     property:{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Property',
          required: true,
     },
     user:{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
     },
     checkInDate:{
          type: Date,
          required: true,
     },
     checkInOut:{
          type: Date,
          required: true,
     },
     totalPrice:{
          type: Number,
          required: true,
     },
     status:{
          type: String,
          enum:['Pending', 'Comfirmed', 'Cancelled'],
          default: 'Pending',
     },
     razorpayOrderId:{
          type: String,
     }
},
{
     timestamps: true,
}
);

module.exports = mongoose.model('Booking', bookingSchema);