<script lang="ts">
  import MediaQuery from "svelte-media-query";
  import { MOBILE, DESKTOP } from "$lib/constants";
  
  let isMobileNavShowing = false;

  // Shows navbar if in mobile media query
  // and hamburger menu is clicked
  function handleShowMobileNav() {
    isMobileNavShowing = !isMobileNavShowing
  }


</script>

<header>
  <nav>
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

    <MediaQuery query={MOBILE} let:matches>
      {#if matches}
        <span class="hamburger"></span>
        <ul class="list-none">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      {/if}
    </MediaQuery>
  </nav>
</header>

