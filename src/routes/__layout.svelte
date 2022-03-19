<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import background from '$lib/images/background2.png';
	import background2 from "$lib/images/projects-bg.jpg";
	import '../app.css';
</script>

<Header />

<main>
<div class="min-h-screen min-w-screen relative bg-cover" style="background-image: url({background2});">
<div class="w-full h-full absolute opacity-90" style="background-image: url({background});" />
	<slot />
</div>
</main>

<footer>
</footer>

