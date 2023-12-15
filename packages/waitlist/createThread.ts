import OpenAI from 'openai';
import { sleep } from 'openai/core';

var ASSISTANT_ID;

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
	return {
		body: await createThread(openai)
	}
}

export async function createThread(openai: OpenAI): Promise<Thread> {
	try {		
		let body: ThreadCreateParams = {};
		const createThreadResp = await openai.beta.threads.create(body);
		return createThreadResp;
	} catch (error) {
		console.error('Error creating thread:', error);
		throw error;
	}
}
