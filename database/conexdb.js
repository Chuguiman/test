import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGODB);
    console.log('Connect DB thats 😉');    
} catch (error) {
    console.log('Error in connect DB thats not good 😬');
}