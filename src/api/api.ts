import axios from "axios";
import {Task} from "../type/types";

const API_URL = "http://localhost:8080/api/v1/tasks"

export const getTasks = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data;
}

export const getTaskById = async (id: string) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}

export const createTask = async (task: Task) => {
    const response = await axios.post(`${API_URL}`, {...task});
    return response.data;
}

export const updateCompleted = async (id: string) => {
    const response = await axios.patch(`${API_URL}/${id}`);
    return response.data;
}

export const deleteTask = async (id: string) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
}