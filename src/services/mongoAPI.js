const API_BASE_URL = import.meta.env.PROD 
  ? 'https://your-backend-url.railway.app/api'
  : 'http://localhost:5000/api';

export const getObjectiveDescription = async (objectiveId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/objectives/${objectiveId}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Obiectivul nu a fost găsit în baza de date');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching objective description:', error);
    throw new Error('Nu s-au putut încărca datele din baza de date');
  }
};

export const getAllObjectives = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/objectives`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching all objectives:', error);
    throw new Error('Nu s-au putut încărca obiectivele');
  }
};
