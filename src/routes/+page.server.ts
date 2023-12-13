import {
	API_KEY_ASSISTANT_AI,
	OPENAI_TOKEN,
	URL_SEND_MESSAGE,
	ORGANIZATION
} from '$env/static/private';

export const prerender = true;
export const ssr = true;

export async function load() {
	return {
		apiKey: API_KEY_ASSISTANT_AI,
		openAiToken: OPENAI_TOKEN,
		urlSendMessage: URL_SEND_MESSAGE,
		organization: ORGANIZATION
	};
}


