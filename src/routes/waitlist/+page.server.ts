import { API_KEY_ASSISTANT_AI, OPENAI_TOKEN, URL_SEND_MESSAGE } from '$env/static/private';

export async function load() {
	return {
		apiKey: API_KEY_ASSISTANT_AI,
		openAiToken: OPENAI_TOKEN,
		urlSendMessage: URL_SEND_MESSAGE
	};
}
