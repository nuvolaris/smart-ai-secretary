<script lang="ts">
	import { onMount } from 'svelte';
	import { sendMessage } from '$lib/service/sendMessage';
	import {
		createThread,
		runThread,
		listLastAssistantThreadMessages,
		postMessageOnThread
	} from '$lib/service/assistantApi';
	import OpenAI from 'openai';
	import Divider from '$lib/components/Divider.svelte';
	export let data: {
		apiKey: string;
		openAiToken: string;
		urlSendMessage: string;
		organization: string;
	};

	let maxCount = 0;

	let aiMessage = '';
	let displayedMessage = '';
	let threadId = '';

	let isLoading = false;

	let userMessage: string;
	var regexEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;

	// Testa se la stringa contiene almeno un indirizzo email

	function handleKeyPress(event: { key: string }) {
		if (event.key === 'Enter') {
			postMessage();
		}
	}

	/**
	 * Functions util to show text with real effect
	 */
	async function showMessage() {
		for (let i = 0; i < aiMessage.length; i++) {
			displayedMessage = aiMessage.substring(0, i + 1);
			await sleep(30);
		}
	}

	function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	let openai: OpenAI = new OpenAI({
		organization: data.organization,
		apiKey: data.apiKey,
		dangerouslyAllowBrowser: true
	});

	/**
	 * OpenAI calls and logic
	 */

	async function postMessage() {
		if (regexEmail.test(userMessage)) {
			try {
				sendMessage(
					'someone send this message to you on mastrogpt: ' + userMessage,
					data.urlSendMessage
				);
			} catch (error) {
				console.log('Error while sending message', error);
			}
		}

		isLoading = true;
		if (threadId.length > 0) {
			await postMessageOnThread(userMessage, threadId, openai);
			await sleep(300);
			await runThread(threadId, openai);
			listLastAimessage();
		}
	}

	async function listLastAimessage() {
		maxCount += 1;
		if (maxCount > 9) {
			aiMessage = 'Sorry, but our model is going to sleep :(';
			await showMessage();
			await sleep(5000);
			location.reload();
		}

		await sleep(1000);
		const result = await listLastAssistantThreadMessages(threadId, openai);
		const aiNewMessage = result?.text?.value;
		if (aiNewMessage.length > 0) {
			if (aiNewMessage === aiMessage) {
				await listLastAimessage();
			} else {
				aiMessage = aiNewMessage;
				isLoading = false;
				maxCount = 0;
			}
		} else {
			await listLastAimessage();
		}
		showMessage();
	}

	onMount(async () => {
		threadId = (await createThread('', openai)).id;
		aiMessage =
			"Welcome to MastroGPT.com. I'm here to assist you and provide all the information you need. If everything is clear, please enter your email and click on submit to join our waitlist! Otherwise, feel free to ask anything!";
		if (aiMessage) {
			showMessage();
		}
	});
</script>

<div>
	<Divider />
	<div class="text-xl text-primary font-bold text-center mt-2">
		🎅 Welcome. Here, you can ask any question <br />
		to our AI secretary or insert your email to join our waitlist 👇
	</div>

	<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 border-primary lg:gap-8 border rounded m-5 p-5">
		<div class="h-50 border border-primary rounded bg-slate-200 shadow-md p-2">
			{#if aiMessage.length <= 0 || isLoading}
				<div class="flex justify-center items-center h-30 p-10">
					<div class="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
				</div>
			{:else}
				{displayedMessage}
			{/if}
		</div>

		<div>
			<label for="askSomething" class="sr-only">Ask something to this model...</label>

			<div class="border border-primary rounded shadow-lg p-2">
				<textarea
					maxlength="200"
					id="askSomething"
					class="w-full border-none text-xl"
					rows="3"
					placeholder="Pose a question or simply put your email here to join our waitlist!"
					bind:value={userMessage}
					on:keypress={handleKeyPress}
				/>

				<div class="flex items-center justify-end gap-2 bg-white pt-2">
					{#if !isLoading}
						<button
							type="button"
							class="rounded bg-light px-3 py-1.5 text-xl font-medium text-white hover:bg-primary"
							on:click={postMessage}
						>
							Submit
						</button>
					{:else}
						<button
							type="button"
							class="rounded bg-slate-200 px-3 py-1.5 text-xl font-medium text-white"
						>
							Submit
						</button>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
