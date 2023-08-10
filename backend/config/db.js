import mongoose from "mongoose";

export const connectDB = async () => {
        
        try {
            await mongoose.connect('mongodb+srv://ba1770490:2eOT4v4mnNkxLBFC@cluster0.oc1znvu.mongodb.net/defendo');
            console.log('DB Connection Successful!');
          } catch (error) {
            console.error('Error connecting to database:', error);
          }

}