const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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
},
{
     timestamps: true,
});

userSchema.methods.generateAuthToken = ()=>{
     const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '5d'});
     return token;
}

userSchema.statics.authenticate = async(email, password)=>{
     const user = await this.findOne({email}).select('+password');
     if(!user){
          throw new Error('Invalid email or password');
     }

     const isMatch = await bcrypt.compare(password, user.password);
     if(!isMatch){
          throw new Error('Invalid email or password');
     }

     return user;
}

userSchema.pre('save', async (next)=>{
     if(this.isModified('password')){
          this.password = await bcrypt.hash(this.password);
     }
     next();
})


module.exports = mongoose.model('User', userSchema)