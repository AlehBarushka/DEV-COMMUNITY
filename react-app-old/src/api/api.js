import axios from 'axios';
const BASE_API_URL = 'https://social-network.samuraijs.com/api/1.0/';

const instatnce = axios.create({
	withCredentials: true,
	baseURL: BASE_API_URL,
	headers: {
		'API-KEY': '62153aeb-b244-48ee-93b2-8fb0a723bcd6',
	},
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 5) {
		return instatnce.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
	},
	getProfile(userId) {
		return instatnce.get(`profile/${userId}`).then((response) => response.data);
	},
};
