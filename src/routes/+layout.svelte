<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<div class="p-1 mb-10 min-h-screen">
	<slot />
</div>
<Footer />
