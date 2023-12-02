<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Smart Secretary</title>
	<meta name="og:title" content="smart-secretary" />
</svelte:head>

<section>
	<h1 class="text-2xl text-center text-primary font-extrabold sm:text-4xl mt-5">
		Try MASTROGPT
		<strong class="block font-extrabol text-primary"> improve your creativity </strong>
	</h1>

	<div class="mt-8 flex flex-row justify-center">
		<div>
			<a
				href="/home"
				class="block rounded px-10 py-3 text-sm font-medium text-white shadow bg-primary sm:w-auto"
			>
				Get Started
			</a>
		</div>
		<div class="ml-5">
			<a
				href="/home"
				class="block rounded px-10 py-3 text-sm font-medium text-white bg-primary shadow sm:w-auto"
			>
				Learn More
			</a>
		</div>
	</div>
	<div
		class="relative bg-[url('$lib/assets/logo2.png')]
		bg-contain bg-center bg-no-repeat
		lg:w-full lg:bg-cover
		sm:bg-cover
		h-[70vh]"
	></div>
</section>
