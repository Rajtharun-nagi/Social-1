import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  userPicturePath: { type: String },
  picturePath: { type: String },
  likes: {
    type: Map,
    of: Boolean
  },
  comments: [{
    type: Map,
    of: String
  }]
}, { timestamps: true });

export default mongoose.model('Post', postSchema);
