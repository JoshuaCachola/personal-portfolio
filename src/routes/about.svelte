<!-- <script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script> -->
<script lang="ts">
  import MediaQuery from "svelte-media-query";
  import { DESKTOP, MOBILE } from "$lib/constants";
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section class="flex justify-evenly flex-col items-center h-screen relative">
  <!-- Desktop view -->
  <MediaQuery query={DESKTOP} let:matches>
    {#if matches}
			<h2 class="freehand text-amber-100 text-5xl">About</h2>
    {/if}
  </MediaQuery>

  <!-- Mobile view -->
  <MediaQuery query={MOBILE} let:matches>
    {#if matches}
		<h2 class="freehand text-amber-100 text-2xl">About</h2>
		
    {/if}
  </MediaQuery>
</section>