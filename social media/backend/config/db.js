import mongoose from 'mongoose';

const connectToDb = async()=>{
    try {
      await mongoose.connect('mongodb://localhost:27017/DivasSocialMedia');
      console.log("mongodb connected successfully")  
    } catch (error) {
        console.log("error in connecting mongodb", error.message)
    }
}

export default connectToDb

