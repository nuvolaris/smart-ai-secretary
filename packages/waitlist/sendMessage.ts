import OpenAI from 'openai';
import { sleep } from 'openai/core';

var ASSISTANT_ID : string;

import type {
	MessageContentText,
	MessageCreateParams,
	Run,
	RunCreateParams,
	Thread,
	ThreadCreateParams,
	ThreadMessage
} from 'openai/resources/beta/threads';

async function main(args: any) {
	ASSISTANT_ID  = args.PUBLIC_ASSISTANT_AI_ID
	let openai: OpenAI = new OpenAI({
        organization: args.ORGANIZATION,
        apiKey: args.API_KEY_ASSISTANT_AI});
	let post = await postMessageOnThread(args.message, args.threadId, openai)
	console.log(post)
	let res = await runThread(args.threadId, openai)
	return {
		body: "OK"
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