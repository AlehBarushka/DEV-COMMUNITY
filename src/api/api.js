import axios from 'axios';
const BASE_API_URL = 'https://social-network.samuraijs.com/api/1.0/';

const instatnce = axios.create({
	withCredentials: true,
	baseURL: BASE_API_URL,
	headers: {
		'API-KEY': '4868c336-9f43-428c-8a3f-6be5e472249f',
	},
});

export const usersAPI = {
	async getUsers(currentPage = 1, pageSize = 5) {
		const response = await instatnce.get(`users?page=${currentPage}&count=${pageSize}`);
		return response.data;
	},
	async getProfile(userId) {
		// backward compatibility method
		console.warn('Obsolate method. Use profileAPI');
		return profileAPI.getProfile(userId);
	},
	async unfollow(userId) {
		const response = await instatnce.delete(`follow/${userId}`);
		return response.data;
	},
	async follow(userId) {
		const response = await instatnce.post(`follow/${userId}`);
		return response.data;
	},
};

export const authAPI = {
	async getAuth() {
		const response = await instatnce.get(`auth/me`);
		return response.data;
	},
};

export const profileAPI = {
	async getProfile(userId) {
		const response = await instatnce.get(`profile/${userId}`);
		return response.data;
	},
	async getStatus(userId) {
		const response = await instatnce.get(`profile/status/${userId}`);
		return response.data;
	},
	async updateStatus(status) {
		return await instatnce.put(`profile/status/`, {
			status,
		});
	},
};
