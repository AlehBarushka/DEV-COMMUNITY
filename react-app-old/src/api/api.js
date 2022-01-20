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
	getUsers(currentPage = 1, pageSize = 5) {
		return instatnce.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
	},
	getProfile(userId) {
		return instatnce.get(`profile/${userId}`).then((response) => response.data);
	},
	unfollow(userId) {
		return instatnce.delete(`follow/${userId}`).then((response) => response);
	},
	follow(userId) {
		return instatnce.post(`follow/${userId}`).then((response) => response);
	},
};
