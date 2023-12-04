<script lang="ts">
	import { onMount } from 'svelte';
	import { gptWelcome } from '$lib/service/openai';
	import {
		listAssistants,
		createThread,
		runThread,
		listThreadMessages
	} from '$lib/service/assistantApi';
	import OpenAI from 'openai';
	export let data: {
		apiKey: string;
		openAiToken: string;
	};
	let aiMessage = '';
	let displayedMessage = '';
	let threadId = '';

	let openai: OpenAI = new OpenAI({
		organization: 'org-ZmZepTrcIzLi3cpzcue5SCkV',
		apiKey: data.apiKey,
		dangerouslyAllowBrowser: true
	});

	async function showMessage() {
		for (let i = 0; i < aiMessage.length; i++) {
			displayedMessage = aiMessage.substring(0, i + 1);
			await sleep(30);
		}
	}

	function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	onMount(async () => {
		await listAssistants(openai);
		threadId = (await createThread('hi, where am I?', openai)).id;
		aiMessage = await gptWelcome(data.openAiToken);

		if (aiMessage) {
			showMessage();
		}
	});
</script>

{#if aiMessage.length <= 0}
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 border m-5 p-5">
		<div class="h-50 border rounded-lg bg-gray-200">
			<div class="flex justify-center items-center h-30 p-10">
				<div class="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
			</div>
		</div>
		<div class="h-32 border rounded-lg bg-gray-200 lg:col-span-2"></div>
	</div>
{:else}
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 border m-5 p-5">
		<div class="h-50 border rounded-lg bg-gray-200">{displayedMessage}</div>
		<div class="h-32 border rounded-lg bg-gray-200 lg:col-span-2"></div>
	</div>
{/if}
<button on:click={runThread(threadId, openai)}>runThread</button>
<button on:click={listThreadMessages(threadId, openai)}>listThreadMessages</button>
