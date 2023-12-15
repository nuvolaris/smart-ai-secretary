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
	let res = await listLastAssistantThreadMessages(args.threadId, openai)
	return {
		body: res.text.value
	}
}

export async function listLastAssistantThreadMessages(
	threadId: string,
	openai: OpenAI,
	maxAttempts: number = 5 
  ): Promise<MessageContentText> {
	try {
	  const response = await openai.beta.threads.messages.list(threadId);
  
	  const allMessages = response.data;
	  console.log(allMessages);
  
	  const assistantMessages = response.data.filter((message) => message.role === 'assistant');
	  const lastAssistantMessage = assistantMessages[0];
  
	  if (lastAssistantMessage && lastAssistantMessage.content.length > 0) {
		const textValue = lastAssistantMessage.content[0] as MessageContentText;
		return textValue;
	  } else {
		if (maxAttempts > 0) {
			await sleep(5000);
		  return listLastAssistantThreadMessages(threadId, openai, maxAttempts - 1);
		} else {
		  throw new Error('Maximum attempts reached. Unable to retrieve assistant message.');
		}
	  }
	} catch (error) {
	  console.error('Error running thread:', error);
	  throw error; 
	}
  }
  
