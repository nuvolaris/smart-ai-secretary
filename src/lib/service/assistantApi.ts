import OpenAI from 'openai';
//import { AssistantsPage } from 'openai/resources/beta/assistants/assistants';

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
