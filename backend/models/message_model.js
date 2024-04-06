import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({

    firstName: {
        type: String,
        required: true,
        // minLength: [3, "First Name Must Contain At Least 3 Characters!"],
      },
      lastName: {
        type: String,
        required: true,
        // minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
        // minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
        // maxLength: [13, "Phone Number Must Contain Exact 13 Digits!"],
      },
      message: {
        type: String,
        required: true,
        // minLength: [10, "Message Must Contain At Least 10 Characters!"],
      },

}); 
export default mongoose.model('messageModel', messageSchema, "Messages")
