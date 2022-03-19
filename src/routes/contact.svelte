<script lang="ts">
  let width: number;
  $: isDesktop = width > 720 ? true : false;
</script>

<section class="flex flex-col justify-evenly items-center h-screen relative {!isDesktop && 'w-11/12 m-auto'}" bind:clientWidth={width}>
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