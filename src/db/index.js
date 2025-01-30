const mongoose = require('mongoose');

module.exports.connect =async ()=>{
     mongoose
          .connect(process.env.MONGO_URL)
          .then(()=>{
               console.log('Connected to MongoDB')
          })
          .catch((err)=>{
               console.log(err);
          })
};