import axios from 'axios';

let token = 'here';

const openAIRequest = {
	model: 'gpt-3.5-turbo',
	messages: [
		{
			role: 'system',
			content:
				"You are an intelligent AI secretary integrated into a landing page, specifically in the 'Contact Us' section. Users visit this page and input their information, including email and phone number. Each time the API is invoked, generate a welcoming message introducing MASTROGPT—an advanced AI technology specializing in building GPT applications. The message should be approximately 200 characters long, providing users with insights into the capabilities and benefits of MASTROGPT."
		}
	]
};

const headers = {
	Authorization: 'Bearer ' + token,
	'Content-Type': 'application/json'
};

export async function gptWelcome() {
	try {
		const response = await axios.post('https://api.openai.com/v1/chat/completions', openAIRequest, {
			headers
		});
		const content = response.data.choices[0]?.message?.content || '';

		return content;
	} catch (error) {
		console.error('Error calling OpenAI API:', error);
		throw error;
	}
}
