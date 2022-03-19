<script lang="ts">
  import MediaQuery from "svelte-media-query";
  import { DESKTOP, MOBILE } from "$lib/constants";
</script>

<section>
  <!-- Desktop view -->
  <MediaQuery query={DESKTOP} let:matches>
    {#if matches}
      <div class="flex flex-col justify-center items-center h-screen">
        <h2 class="freehand text-amber-100 text-5xl">Contact</h2>
      </div>
    {/if}
  </MediaQuery>

  <!-- Mobile view -->
  <MediaQuery query={DESKTOP} let:matches>
    {#if matches}
      <div class="flex flex-col justify-center items-center h-screen">
        <h2 class="freehand text-amber-100 text-2xl">Contact</h2>
      </div>
    {/if}
  </MediaQuery>
</section>