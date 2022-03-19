<script lang="ts">
  import type { ProjectInterface } from "$lib/interfaces";
  export let currentProject: ProjectInterface;

  
</script>

{#key currentProject}
<div class="transition-fade-in">
  <div class="assistant text-white">
    <h2 class="font-semibold text-2xl">{currentProject.name}</h2>
    <p class="font-thin text-lg">{currentProject.description}</p>
  </div>
  <div class="flex flex-col justify-evenly h-28">
    <div class="flex">
      <span class="text-white hover:text-amber-100 cursor-pointer items-center flex">
        <ion-icon name="logo-github" size="large" class="mr-2"></ion-icon>
        Code
      </span>
    </div>
    <div class="flex">
      <span class="text-white hover:text-amber-100 cursor-pointer items-center flex">
        <ion-icon name="browsers" size="large" class="mr-2"></ion-icon>
        Live
      </span>
    </div>
  </div>
</div>
{/key}