const mongoose = required('mongoose');

const reviewSchema = new mongoose.Schema({
     property:{
          type: mongoose.Schema.Type.objectId,
          ref: 'Property',
          required: true,
     },
     user:{
          type: mongoose.Schema.Type.objectId,
          ref:'User',
          required: true,
     },
     rating:{
          type: Number,
          required: true,
          min: 1,
          max: 5,
     },
     comment:{
          type: String,
          required: ture,
     },
},
{
     timestamps: true,
});

module.exports = mongoose.model('Review', reviewSchema);