<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import background from '$lib/images/background2.png';
	import '../app.css';
</script>

<Header />

<main class="min-h-screen" style="background-image: url({background});">
	<slot />
</main>

<footer>
</footer>

