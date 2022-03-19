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
      <div class="transition-fade-in fixed top-0 right-0 translate-y-32 translate-x-28 z-20">
				<ul class="list-none rotate-90 flex text-lg text-white" style="font-family: 'Assistant', sans-serif;">
					<li class="mr-4 hover:border-b-2 hover:font-semibold border-amber-100"><a href="/">Home</a></li>
					<li class="mr-4 hover:border-b-2 hover:font-semibold border-amber-100"><a href="/about">About</a></li>
					<li class="mr-4 hover:border-b-2 hover:font-semibold border-amber-100"><a href="/projects">Projects</a></li>
					<li class="mr-4 hover:border-b-2 hover:font-semibold border-amber-100"><a href="/contact">Contact</a></li>
				</ul>
      </div>
			<div class="absolute right-0 top-72 z-20">
				<ul class="list-none">
					<li class="text-white hover:text-amber-100 cursor-pointer items-center flex">
						<ion-icon name="logo-github" size="large" class="mr-2"></ion-icon>
					</li>
					<li class="text-white hover:text-amber-100 cursor-pointer items-center flex">
						<ion-icon name="logo-linkedin" size="large" class="mr-2"></ion-icon>
					</li>
					<li class="text-white hover:text-amber-100 cursor-pointer items-center flex">
						<ion-icon name="logo-twitter" size="large" class="mr-2"></ion-icon>
					</li>
				</ul>
			</div>
			{/if}
		</MediaQuery>

		<!-- Mobile View -->
		<MediaQuery query={MOBILE} let:matches>
			{#if matches}
      <div class="flex justify-center relative z-20">
				<div
					class="cursor-pointer w-64 h-10 fixed bottom-8 bg-slate-700 z-20"
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
								<li class="hover:font-semibold"><a href="/">Home</a></li>
								<li class="hover:font-semibold"><a href="/about">About</a></li>
								<li class="hover:font-semibold"><a href="/projects">Projects</a></li>
								<li class="hover:font-semibold"><a href="/contact">Contact</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
        </div>
				<div class="absolute right-0 top-0 z-20">
					<ul class="list-none">
						<li class="text-white hover:text-amber-100 cursor-pointer items-center flex">
							<ion-icon name="logo-github" size="small" class="mr-2"></ion-icon>
						</li>
						<li class="text-white hover:text-amber-100 cursor-pointer items-center flex">
							<ion-icon name="logo-linkedin" size="small" class="mr-2"></ion-icon>
						</li>
						<li class="text-white hover:text-amber-100 cursor-pointer items-center flex">
							<ion-icon name="logo-twitter" size="small" class="mr-2"></ion-icon>
						</li>
					</ul>
				</div>
			{/if}
		</MediaQuery>

	</nav>
</header>
