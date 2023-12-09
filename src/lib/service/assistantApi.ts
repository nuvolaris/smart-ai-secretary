import type OpenAI from 'openai';
import { PUBLIC_ASSISTANT_AI_ID } from '$env/static/public';

import type {
	MessageContentText,
	MessageCreateParams,
	Run,
	RunCreateParams,
	Thread,
	ThreadCreateParams,
	ThreadMessage
} from 'openai/resources/beta/threads';

const ASSISTANT_ID = PUBLIC_ASSISTANT_AI_ID;

export async function listAssistants(openai: OpenAI) {
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
export async function createThread(message: string, openai: OpenAI): Promise<Thread> {
	try {
		if (message.length > 0) {
			let body: ThreadCreateParams = {
				messages: [
					{
						content: message,
						role: 'user'
					}
				]
			};
			const createThreadResp = await openai.beta.threads.create(body);
			return createThreadResp;
		} else {
			let body: ThreadCreateParams = {};
			const createThreadResp = await openai.beta.threads.create(body);
			return createThreadResp;
		}
	} catch (error) {
		console.error('Error creating thread:', error);
		throw error;
	}
}

export async function postMessageOnThread(
	message: string,
	threadId: string,
	openai: OpenAI
): Promise<ThreadMessage> {
	try {
		let body: MessageCreateParams = {
			content: message,
			role: 'user'
		};

		const createThreadResp = await openai.beta.threads.messages.create(threadId, body);
		return createThreadResp;
	} catch (error) {
		console.error('Error creating message on thread:', error);
		throw error;
	}
}

export async function runThread(threadId: string, openai: OpenAI): Promise<Run> {
	try {
		let body: RunCreateParams = {
			assistant_id: ASSISTANT_ID
		};
		const runThreadResp = await openai.beta.threads.runs.create(threadId, body);
		return runThreadResp;
	} catch (error) {
		console.error('Error running thread:', error);
		throw error;
	}
}

export async function listLastAssistantThreadMessages(
	threadId: string,
	openai: OpenAI
): Promise<MessageContentText> {
	try {
		const response = await openai.beta.threads.messages.list(threadId);

		const allMessages = response.data;
		console.log('ALL MESS', allMessages);
		const messages = response.data.filter((element) => element.role === 'assistant');
		const lastMessage = messages[0];
		if(lastMessage.content) {
			const textValue = lastMessage.content[0];
			return textValue as unknown as MessageContentText;
		}
		else return listLastAssistantThreadMessages(threadId, openai);
	} catch (error) {
		console.error('Error running thread:', error);
		throw error;
	}
}
