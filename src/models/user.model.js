const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     username:{
          type: 'string',
          required: [true, "username is required!"]
     },
     email:{
          type: 'string',
          required: [true, "email is required!"],
          unique: true,
     },
     password:{
          type: 'string',
          required : [true, "password is required!"],
          select: false,
     },
     properties:[{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Property',
     }],
     bookings:[{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Booking',
     }]
});

module.exports = mongoose.model('User', userSchema)