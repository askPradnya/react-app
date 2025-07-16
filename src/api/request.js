import apiClient from './axiosInstance';

const extractData = (response) => response.data;

const handleError = (error) => {
  if (error.response) {
    // Optional: you can log error.response.data or error.response.status
    throw error.response.data;
  }
  throw error;
};

export const getRequest = async (url, config = {}) => {
  try {
    const response = await apiClient.get(url, config);
    return extractData(response);
  } catch (error) {
    handleError(error);
  }
};

export const postRequest = async (url, data, config = {}) => {
  try {
    const response = await apiClient.post(url, data, config);
    return extractData(response);
  } catch (error) {
    handleError(error);
  }
};

export const putRequest = async (url, data, config = {}) => {
  try {
    const response = await apiClient.put(url, data, config);
    return extractData(response);
  } catch (error) {
    handleError(error);
  }
};

export const deleteRequest = async (url, config = {}) => {
  try {
    const response = await apiClient.delete(url, config);
    return extractData(response);
  } catch (error) {
    handleError(error);
  }
};
