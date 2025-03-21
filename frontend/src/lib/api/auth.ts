import { API_BASE_URL, defaultHeaders, ApiResponse } from './config';
import { User } from '../types';

export const authApi = {
  login: async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: defaultHeaders,
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });
    return response.json() as Promise<ApiResponse<User>>;
  },

  register: async (userData: {
    name: string;
    email: string;
    password: string;
    divisi: string;
    role: 'USER' | 'ADMIN';
  }) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: defaultHeaders,
      credentials: 'include',
      body: JSON.stringify(userData),
    });
    return response.json() as Promise<ApiResponse<User>>;
  },

  logout: async () => {
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    return response.json();
  },

  getUsers: async () => {
    const response = await fetch(`${API_BASE_URL}/auth/users`, {
      credentials: 'include',
    });
    return response.json() as Promise<ApiResponse<User[]>>;
  },
};