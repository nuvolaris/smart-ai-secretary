import { API_KEY_ASSISTANT_AI, OPENAI_TOKEN } from '$env/static/private';

export async function load() {
	return {
		apiKey: API_KEY_ASSISTANT_AI,
		openAiToken: OPENAI_TOKEN
	};
}
