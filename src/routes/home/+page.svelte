<script>
	import { onMount } from 'svelte';
	import { gptWelcome } from '$lib/service/openai.ts';

	let aiMessage = '';
	let displayedMessage = '';

	async function showMessage() {
		for (let i = 0; i < aiMessage.length; i++) {
			displayedMessage = aiMessage.substring(0, i + 1);
			await sleep(30);
		}
	}

	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	onMount(async () => {
		aiMessage = await gptWelcome();
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
