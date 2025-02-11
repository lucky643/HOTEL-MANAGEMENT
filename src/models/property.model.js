const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
     title:{
          type: String,
          required: true,
     },
     description:{
          type: String,
          required: true,
     },
     location:{
          type: String,
          required: true,
     },
     price:{
          type: Number,
          required: true,
     },
     amenities:{      
          type: [String],
          default:[]
     },
     image:{
          type: [String],
          default:[]
     },
     host:{
          type:mongoose.Schema.Type.objectId,
          ref: 'User',
          required: true
     }
},
{
     timestamps: true,
});

module.exports = mongoose.model('Property', propertySchema);