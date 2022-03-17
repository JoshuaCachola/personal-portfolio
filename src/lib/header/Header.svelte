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
	<nav>
		<!-- Desktop View -->
		<MediaQuery query={DESKTOP} let:matches>
			{#if matches}
				<ul class="flex justify-center space-around list-none">
					<li>Home</li>
					<li>About</li>
					<li>Projects</li>
					<li>Contact</li>
				</ul>
			{/if}
		</MediaQuery>

		<!-- Mobile View -->
		<MediaQuery query={MOBILE} let:matches>
			{#if matches}
				<!-- <div class="cursor-pointer w-2/3 h-10 fixed bottom-8 translate-x-1/4 bg-slate-700 flex justify-center" on:click={handleShowMobileNav}>
          <div class="relative flex justify-around">
            <span class="hamburger"></span>
            <span class="">Menu</span>
          </div>
          <div class="transition-[height] ease-in-out duration-500 bg-blue-400 w-2/3 {isMobileNavShowing ? "h-96" : "h-10"}">
            <ul class="transition-[visibility] delay-100 ease-in-out list-none {isMobileNavShowing ? "visible" : "invisible"}">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </div> -->
				<div
					class="cursor-pointer w-2/3 h-10 fixed bottom-8 translate-x-1/4 bg-slate-700"
					on:click={handleShowMobileNav}
				>
					<div class="relative flex justify-center">
						<span class="hamburger" />
						<!-- <span>Menu</span> -->
						<div class="relative w-full">
							<div
								class="cursor-default transition-all ease-linear duration-300 list-none absolute bottom-0 bg-slate-700 w-full {isMobileNavShowing
									? 'visible h-40'
									: 'invisible h-0'}"
							>
								<ul
									class="trasition ease-linear duration-150 flex justify-center items-center h-full flex-col text-center text-white {isMobileNavShowing
										? 'opacity-100'
										: 'opacity-0'}"
								>
									<li class="cursor-pointer">Home</li>
									<li class="cursor-pointer">About</li>
									<li class="cursor-pointer">Projects</li>
									<li class="cursor-pointer">Contact</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</MediaQuery>
	</nav>
</header>
