import OpenAI from 'openai';
//import { AssistantsPage } from 'openai/resources/beta/assistants/assistants';
import type {
	MessageCreateParams,
	Run,
	RunCreateParams,
	Thread,
	ThreadCreateParams,
	ThreadMessage,
	ThreadMessagesPage
} from 'openai/resources/beta/threads';

const key = 'here';
const openai = new OpenAI({
	organization: 'org-ZmZepTrcIzLi3cpzcue5SCkV',
	apiKey: key,
	dangerouslyAllowBrowser: true
});

const ASSISTANT_ID = 'here';

export async function listAssistants() {
	try {
		console.log('going to call: list assistants');
		const responseAss = await openai.beta.assistants.list();
		console.log(responseAss);
		return responseAss.data;
	} catch (error) {
		console.error('Error listing assistants:', error);
		throw error;
	}
}
export async function createThread(message: string): Promise<Thread> {
	try {
		let body: ThreadCreateParams = {
			messages: [
				{
					content: message,
					role: 'user'
				}
			]
		};

		console.log('going to call: create thread');
		const createThreadResp = await openai.beta.threads.create(body);
		console.log(createThreadResp);
		return createThreadResp;
	} catch (error) {
		console.error('Error creating thread:', error);
		throw error;
	}
}

export async function postMessageOnThread(
	message: string,
	threadId: string
): Promise<ThreadMessage> {
	try {
		let body: MessageCreateParams = {
			content: message,
			role: 'user'
		};

		console.log('going to call: post message on thread');
		const createThreadResp = await openai.beta.threads.messages.create(threadId, body);
		console.log(createThreadResp);
		return createThreadResp;
	} catch (error) {
		console.error('Error creating message on thread:', error);
		throw error;
	}
}

export async function runThread(threadId: string): Promise<Run> {
	try {
		let body: RunCreateParams = {
			assistant_id: ASSISTANT_ID
		};

		console.log('going to call: run thread');
		const runThreadResp = await openai.beta.threads.runs.create(threadId, body);
		console.log(runThreadResp);
		return runThreadResp;
	} catch (error) {
		console.error('Error running thread:', error);
		throw error;
	}
}

export async function listThreadMessages(threadId: string): Promise<ThreadMessage[]> {
	try {
		let body: RunCreateParams = {
			assistant_id: ASSISTANT_ID
		};

		console.log('going to call: list thread messages');
		const threadMessages = await openai.beta.threads.messages.list(threadId);
		console.log(threadMessages);
		return threadMessages.data;
	} catch (error) {
		console.error('Error running thread:', error);
		throw error;
	}
}
