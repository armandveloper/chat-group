export const fetchWithoutToken = (endpoit, data, method = 'GET') => {
	const baseURL = process.env.REACT_APP_API_URL;
	if (method === 'GET') {
		return fetch(`${baseURL}/${endpoit}`);
	}
	return fetch(`${baseURL}/${endpoit}`, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
};

export const fetchWithToken = (endpoit, data, method = 'GET') => {
	const baseURL = process.env.REACT_APP_API_URL;
	const token = localStorage.getItem('chat-group:token') || '';
	if (method === 'GET') {
		return fetch(`${baseURL}/${endpoit}`, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
	}
	return fetch(`${baseURL}/${endpoit}`, {
		method,
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
};

export const uploadPhoto = (endpoit, photo, method) => {
	const baseURL = process.env.REACT_APP_API_URL;
	const token = localStorage.getItem('chat-group:token') || '';
	const formData = new FormData();
	formData.append('image', photo);
	return fetch(`${baseURL}/${endpoit}`, {
		method,
		headers: {
			Authorization: `Bearer ${token}`,
		},
		body: formData,
	});
};
