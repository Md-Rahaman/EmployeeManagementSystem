import axios from 'axios'

const DEPARTMENT_REST_API_BASE_URL = 'http://localhost:8080/api/departments'


export const getAllDepartments = () => axios.get(DEPARTMENT_REST_API_BASE_URL);

export const createDepartment = (department: any) => axios.post(DEPARTMENT_REST_API_BASE_URL, department);

export const getDepartmentById = (departmentId: number) => axios.get(DEPARTMENT_REST_API_BASE_URL + '/' + departmentId);

export const updateDepartment = (departmentId: number, department: any) => axios.put(DEPARTMENT_REST_API_BASE_URL + '/' + departmentId, department);

export const deleteDepartment = (departmentId: number) => axios.delete(DEPARTMENT_REST_API_BASE_URL + '/' + departmentId);