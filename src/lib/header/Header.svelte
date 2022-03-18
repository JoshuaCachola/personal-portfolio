<script lang="ts">
	import MediaQuery from 'svelte-media-query';
	import { MOBILE, DESKTOP } from '$lib/constants';

	let isMobileNavShowing = false;

	// Shows navbar if in mobile media query
	// and hamburger menu is clicked
	function handleShowMobileNav() {
		isMobileNavShowing = !isMobileNavShowing;
	}
</script>

<header>
	<nav class="relative">

		<!-- Desktop View -->
		<MediaQuery query={DESKTOP} let:matches>
			{#if matches}
      <div class="side-menu absolute right-0 translate-x-28 top-0 translate-y-32">
				<ul class="list-none rotate-90 flex text-lg text-white" style="font-family: 'Assistant', sans-serif;">
					<li class="ml-4 hover:border-b-2 hover:font-semibold border-amber-100">Home</li>
					<li class="ml-4 hover:border-b-2 hover:font-semibold border-amber-100">About</li>
					<li class="ml-4 hover:border-b-2 hover:font-semibold border-amber-100">Projects</li>
					<li class="ml-4 hover:border-b-2 hover:font-semibold border-amber-100">Contact</li>
				</ul>
      </div>
			{/if}
		</MediaQuery>

		<!-- Mobile View -->
		<MediaQuery query={MOBILE} let:matches>
			{#if matches}
				<div
					class="cursor-pointer w-2/3 h-10 fixed bottom-8 translate-x-1/4 bg-slate-700"
					on:click={handleShowMobileNav}
				>
					<div class="relative flex justify-center">
						<span class="hamburger" />
						<div class="relative w-full">
							<div
								class="cursor-default transition-all ease-linear duration-300 list-none absolute bottom-0 bg-slate-700 w-full {isMobileNavShowing
									? 'visible h-40'
									: 'invisible h-0'}"
							>
								<ul
									class="trasition ease-linear duration-150 flex justify-center items-center h-full flex-col text-center text-white font-thin {isMobileNavShowing
										? 'opacity-100'
										: 'opacity-0'}"
                  style="font-family: 'Assistant', sans-serif;"
								>
									<li class="hover:font-semibold">Home</li>
									<li class="hover:font-semibold">About</li>
									<li class="hover:font-semibold">Projects</li>
									<li class="hover:font-semibold">Contact</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</MediaQuery>

	</nav>
</header>
