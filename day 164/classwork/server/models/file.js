import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

// Export the model
const File = mongoose.model('File', fileSchema);
export default File;
