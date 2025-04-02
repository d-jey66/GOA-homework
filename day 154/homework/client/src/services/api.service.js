import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getAllMusic = async () => {
  try {
    const response = await axios.get(`${API_URL}/music-data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching music data:', error);
    throw error;
  }
};

export const createMusic = async (musicData) => {
  try {
    const response = await axios.post(`${API_URL}/music-create`, musicData);
    return response.data;
  } catch (error) {
    console.error('Error creating music:', error);
    throw error;
  }
};

export const updateMusic = async (id, musicData) => {
  try {
    const response = await axios.put(`${API_URL}/music-update/${id}`, musicData);
    return response.data;
  } catch (error) {
    console.error('Error updating music:', error);
    throw error;
  }
};

export const deleteMusic = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/music-delete/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting music:', error);
    throw error;
  }
};