<script lang="ts">
  // import MediaQuery from "svelte-media-query";
  // import { DESKTOP, MOBILE } from "$lib/constants";
	import background from "$lib/images/projects-bg.jpg"
  let width: number;
  $: isDesktop = width > 720 ? true : false;
  
</script>

<!-- <section class="flex flex-col justify-evenly items-center h-screen relative" bind:clientWidth={width}>
  <h2 class="freehand text-amber-100 {isDesktop ? 'text-5xl' : 'text-2xl'}">Contact</h2>
  <div class="bg-cover w-1/2 h-1/2 flex justify-center items-center relative" style="background-image: url({background});">
  <div class="w-full h-full absolute top-2 left-2 bg-black"></div>
  <div class="w-full">
    <form method="post" action="https://formspree.io/xayponkz">
      <div class="flex">
        <div class="flex">
          <div>
            <label for="name" class="assistant text-xl">Name</label>
            <input type="text" name="name" id="name" class="bg-slate-700 text-white border-b-2 border-black" />
          </div>
          <div>
            <label for="email" class="assistant text-xl">Email</label>
            <input type="email" name="email" id="email" class="bg-slate-700 text-white" />
          </div>
        </div>
        <div></div>
          <label for="message" class="assistant text-xl">Message</label>
          <textarea name="message" id="message" class="bg-slate-700 text-white"></textarea>
      </div>
      <ul class="actions">
        <li><input type="submit" value="Send" class="primary" /></li>
      </ul>
    </form>
    </div>
  </div>
  
</section> -->
<section class="flex flex-col justify-evenly items-center h-screen relative" bind:clientWidth={width}>
  <h2 class="freehand text-amber-100 {isDesktop ? 'text-5xl' : 'text-2xl'}">Contact</h2>
    <form method="post" action="https://formspree.io/xayponkz">
      <div class="fields">
        <div class="field half">
          <input type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div class="field half">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div class="field">
          <textarea name="message" id="message" placeholder="Message" class="focus:outline-none"></textarea>
        </div>
      </div>
      <div class="flex justify-center">
        <input type="submit" value="Send" class="text-white cursor-pointer hover:border-b-2 hover:border-amber-100 first-line:hover:text-amber-100" />
      </div>
    </form>
</section>