//CW 1   

// import mongoose from 'mongoose';

// const { Schema, model } = mongoose;

// const projectSchema = new Schema({
//   userId: {
//     type: Schema.Types.ObjectId,
//     required: true,
//     ref: 'User',
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: [String],
//     default: [],
//   },
//   about: {
//     type: String,
//     default: '',
//   },
//   companyId: {
//     type: Schema.Types.ObjectId,
//     ref: 'Company',
//   },
//   budget: {
//     type: Schema.Types.Mixed, 
//     default: 'not set',
//   },
//   status: {
//     type: String,
//     enum: ['working', 'canceled', 'done'],
//     default: 'working',
//   },
//   completion: {
//     type: Number,
//     min: 0,
//     max: 100,
//     default: 0,
//   },
// }, {
//   timestamps: true, 
// });

// const Project = model('Project', projectSchema);

// export default Project;



//CW 2


// import express from 'express';
// import Project from '../models/project.model.js';

// const router = express.Router();

// router.get('/all-projects', async (req, res) => {
//   const projects = await Project.find();
//   res.json(projects);
// });

// export default router;
