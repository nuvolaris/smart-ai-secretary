import OpenAI from 'openai';
//import { AssistantsPage } from 'openai/resources/beta/assistants/assistants';
import type { ThreadCreateParams } from 'openai/resources/beta/threads';

const key = 'here';
const openai = new OpenAI({
	organization: 'org-ZmZepTrcIzLi3cpzcue5SCkV',
	apiKey: key,
	dangerouslyAllowBrowser: true
});

//const ASSISTANT_ID = 'asst_abc123';

export async function listAssistants() {
	try {
		console.log('going to call');
		const responseAss = await openai.beta.assistants.list();
		console.log('response');
		console.log(responseAss);
		return responseAss.data; // as unknown as AssistantsPage;
	} catch (error) {
		console.error('Error listing assistants:', error);
		throw error;
	}
}
export async function createThread(message: string) {
	try {
		let body: ThreadCreateParams = {
			messages: [
				{
					content: message,
					role: 'user'
				}
			]
		};

		console.log('going to call');
		const createThreadResp = await openai.beta.threads.create(body);
		console.log('response');
		console.log(createThreadResp);
		return createThreadResp;
	} catch (error) {
		console.error('Error creating thread:', error);
		throw error;
	}
}
