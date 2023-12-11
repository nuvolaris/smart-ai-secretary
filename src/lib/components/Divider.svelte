<script>
	export var text = '';
</script>

<div class="mt-5">
	<span class="flex items-center">
		<span class="h-px flex-1 bg-black"></span>
		{#if text}
			<span class="shrink-0 px-6">{text}</span>
		{/if}
		<span class="h-px flex-1 bg-black"></span>
	</span>
</div>
