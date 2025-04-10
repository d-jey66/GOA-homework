import {UserModel} from "../models/user.model.js";

export const signUp = async (req, res) => {
    try {
        const {body} = req
        const signUp = await UserModel.create(body)

        res.status(201).json(signUp)
    } catch (err) {
        res.status(500).json({error: err})
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        
        const updatedUser = await UserModel.findByIdAndUpdate(
            id, 
            body, 
            { new: true, runValidators: true }
        );
        
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedUser = await UserModel.findByIdAndDelete(id);
        
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}