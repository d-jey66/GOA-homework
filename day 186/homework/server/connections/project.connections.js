import { ProjectModel } from "../models/project.model.js";

export const getAllProjects = async (req, res)=> {
  try{
    const projects = await ProjectModel.find();
    res.status(200).json(projects);
  }catch(error){
    console.error(error);
    throw error;
  }
}

// create project
export const createProject = async (req, res)=> {
  try{
    const project = await ProjectModel.create(req.body);
    res.status(201).json(project);
  }catch(error){
    console.error(error);
    throw error;
  }
}

export const getOneProject = async (req, res)=> {
  try{
    const project = await ProjectModel.findById(req.params.id);
    if(!project){
      return res.status(404).json({message: "Project not found"});
    }
    res.status(200).json(project);
  }catch(error){
    console.error(error);
    throw error;
  }
}
export const updateOneProject = async (req, res)=> {
  try{
    const project = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!project){
      return res.status(404).json({message: "Project not found"});
    }
    res.status(200).json(project);
  }catch(error){
    console.error(error);
    throw error;
  }
}
export const getOneProjectsOneUser = async (req, res)=> {
  try{
    const projects = await ProjectModel.find({clerkUserId: req.params.clerkUserId});
    res.status(200).json(projects);
  }catch(error){
    console.error(error);
    throw error;
  }
}
