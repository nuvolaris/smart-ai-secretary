import axios from 'axios';

export async function sendMessage(userMessage: string, url: string) {
	const headers = {
		'Content-Type': 'application/json'
	};
	const data = {
		userMessage: userMessage
	};

	axios
		.post(url, data, { headers })
		.then((response) => {
			console.log(response.status);
		})
		.catch((error) => {
			console.error(error);
		});
}
