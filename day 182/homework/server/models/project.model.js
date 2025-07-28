import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  clerkUserId: {
    type: String,
    immutable: true,
  },

  //** proejct settings**

  image: {
    type: String,
  },

  name: {
    type: String,
  },

  type: {
    type: [String],
  },

  description: {
    type: String,
  },

  //  **details**

  companyId: {
    type: String,
  },

  budget: {
    type: Number,
  },

  status: {
    type: String,
    enum: ['working', 'canceled', 'done'],
  },

  completion: {
    type: Number,
    default: 0
  },
},
{
  timestamps: true
});

export const ProjectModel = mongoose.model('Project', ProjectSchema);
